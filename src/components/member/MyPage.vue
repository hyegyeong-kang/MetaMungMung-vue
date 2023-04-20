<template>
  <div class="services_section layout_padding">
        <div class="container">
            
            <div class="content">

            <div class="profile">
                <div class="profile-image">
                <img id="preview-image" :src="profileImgSrc" @error="defaultImage">
                <br>
                </div>
                <h1>My</h1>
            </div>


            <div class="main-content">
              <div class="menu">
                <ul>
                <li><router-link :to="{ name: 'Register' }">나의 반려견</router-link></li>
                <li><router-link :to="{ name: 'Modify' }">나의 모임</router-link></li>
                <li><router-link :to="{ name: 'Modify' }">내 주문</router-link></li>
                <li><router-link :to="{ name: 'Modify' }">회원정보 수정 및 탈퇴</router-link></li>
                </ul>
              </div>
              
              <div class="profile-wrapper">
                <div class="card-news" v-for="myPet in myPetList" :key="myPet.petIdx">
                  <h2><img :src="myPet.petImg"/></h2>
                  <div class="card-container">
                    <div class="card">
                      <img src="" alt="Card image 1">
                      <h3>{{ myPet.petName }}</h3>
                      <p>{{ myPet.sex }}</p>
                      <p>{{ myPet.birth }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            </div>

        </div>
    </div>
</template>

<script>
import {useRoute, useRouter} from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'MyPage',
  setup() {
    const router = useRouter();

    // 이미지 파일 첨부
    const inputImage = ref(null);
    const profileImgSrc = ref('');
    const defaultImage = () => {
        profileImgSrc.value = require(`@/assets/images/member/profile.png`);
    }

    // function readImage() {
    //   const input = inputImage.value;

    //   if (input.files && input.files[0]) {
    //     const reader = new FileReader();

    //     reader.onload = (e) => {
    //         profileImgSrc.value = e.target.result;
    //     };

    //     reader.readAsDataURL(input.files[0]);
    //   }
    // }

    // const myPetList = async () => {
    //     try{
    //         const res = await axios.get('/members/pet');
    //         myPetList.value = {...res.data};
            
    //         for(let i in res.data){
    //             myPetList.value[i].introduction = res.data.recommendList[i].introduction.replace(/<br>/g, ' ');
    //         }
    //     } catch(err){
    //         console.log(err);
    //     }
    // }

    const myPetList = ref([]);

    const getMyPets = async () => {

      const memberIdx = sessionStorage.getItem('memberIdx');
      axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('token');

      const response = await axios.get('/members/pets', {
        memberIdx: memberIdx
      });

      myPetList.value = response.data;
    };
    
    onMounted(() => {
      getMyPets();
    });
    

    return {
        defaultImage,
        myPetList,
        getMyPets,
        profileImgSrc,
    };
  }
}
</script>

<style scoped>
@import "@/assets/css/member/mypage.css";
</style>