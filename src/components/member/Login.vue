<template>
    <div class="services_section layout_padding">
      <div class="container">
            <div class="membership-login">
            <div style="text-align:center"><h1>로그인</h1></div>
                
            <form role="form" @submit.prevent="loginForm">

            <div>
                
                <div>아이디</div>
                <div>
                <input type="text" v-model="member.userId">
                </div>
            </div>

            <div>
                <div>비밀번호</div>
                <input type="password" v-model="member.password">
                <div><span v-if="failed" class="text-danger">잘못된 아이디 또는 잘못된 비밀번호입니다.</span></div>
            </div>

            <button type="submit" id="btnLogin" @click="submit">로그인</button>
            
            </form>
            
        
        </div>

      </div>
    </div>
</template>

<script>
import {useRoute, useRouter} from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const member = ref({
      userId: '',
      password: '',
    });

    const loginForm = async() => {
      try {
        console.log(member.value);
        const res = await axios.post('/members/login', {
          userId: member.value.userId,
          password: member.value.password
        });

        if (res.status === 200) {
          const member = res.data.member;
          sessionStorage.setItem('sessionId', JSON.stringify(member));
          alert("로그인 성공")
          location.href = '/';
        } else {
          console.error("로그인 실패");
        }
        
      } catch (error) {
          console.log(error);
          router.push({ name: 'Login' });
          alert("잘못된 로그인입니다.")
          
      } 
        
        console.log(member.value);
    };

    return {
      member,
      loginForm,
    };
  }
}
</script>

<style scoped>
@import "@/assets/css/member/login.css";
</style>