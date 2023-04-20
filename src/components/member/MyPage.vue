<template>
  <div class="services_section layout_padding">
        <div class="container">
            
            <div class="content">
            <div class="profile">
                <div class="profile-image">
                <img id="preview-image" :src="profileImgSrc" @error="defaultImage">
                <br>
                <label for="input-image">
                    <img src="@/assets/images/member/plus.png" id="edit">
                </label>
                <input id="input-image" type="file" accept="image/*" ref="inputImage" @change="readImage" style="display:none"/>
                </div>
                <h1>회원 이름</h1>
                <p>소개글</p>
            </div>
            <div class="menu">
                <ul>
                <li><router-link :to="{ name: 'Modify' }">회원정보 수정 및 탈퇴</router-link></li>
                <li><router-link :to="{ name: 'Register' }">나의 반려견</router-link></li>
                <li><router-link :to="{ name: 'Modify' }">나의 모임</router-link></li>
                <li><router-link :to="{ name: 'Modify' }">내 주문</router-link></li>
                </ul>
            </div>
            </div>

        </div>
    </div>
</template>

<script>
import {useRoute, useRouter} from 'vue-router';
import { ref } from 'vue';
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

    function readImage() {
      const input = inputImage.value;

      if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = (e) => {
            profileImgSrc.value = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
      }
    }
    

    return {
        defaultImage,
        inputImage,
        profileImgSrc,
        readImage,
    };
  }
}
</script>

<style scoped>
@import "@/assets/css/member/mypage.css";
</style>