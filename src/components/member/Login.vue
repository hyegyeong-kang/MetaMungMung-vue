<template>
    <div class="services_section layout_padding">
      <div class="container">
            <div class="membership-login">
            <div style="text-align:center"><h1>로그인</h1></div>
                
            <form role="form" @submit.prevent="loginForm">

            <div>
                
                <div>아이디</div>
                <div>
                <input type="text" v-model="member.memberId">
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
import Swal from "sweetalert2";

export default {
  setup() {
    const router = useRouter();
    const member = ref({
      memberId: '',
      password: '',
    });

    const token = sessionStorage.getItem('token');

    const loginForm = async() => {
      try {
        console.log(member.value);

        const res = await axios.post('/members/login', {
          memberId: member.value.memberId,
          password: member.value.password
        });

        sessionStorage.setItem('token', res.headers.token);
        sessionStorage.setItem('memberId', member.value.memberId);

        console.log(sessionStorage);
        
        alert(member.value.memberId + " 님 메타멍멍에 오신 것을 환영합니다!");
        window.location.reload(true);
        router.push({ name: 'Home'});
        
      } catch (error) {
          console.log(error);
          router.push({ name: 'Login' });

          Swal.fire({
            icon: 'error',
            title: '잘못된 로그인'
          });
      } 
        
        // console.log(member.value);
    };

    return {
      member,
      token,
      loginForm,
    };
  }
}
</script>

<style scoped>
@import "@/assets/css/member/login.css";
</style>