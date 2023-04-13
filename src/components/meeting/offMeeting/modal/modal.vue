<template>
    <button @click="openModalFunc" class="custom-btn btn-12 modal-button" style="position: absolute; z-index: 2; bottom: 5%; right: 5%"><span>클릭하세요!</span><span>모임생성</span></button>

  
</template>

<script>
import axios from 'axios';
import {ref} from 'vue';

  export default {
    name: 'OffMeetingModal',
    props: [
        'currentLocation',
        'currentLat',
        'currentLng'
    ],
    setup (props) {
        let title = ref('');
        let date = ref('');
        let startTime = ref('');
        let content = ref('');
        let limit = ref('2');

        const modal = document.getElementsByClassName('modal');
        const clickable = document.querySelectorAll('.clickable');


        const openModal = () => {
            modal[0].style.display = "block"
        }

        const closeModal = () => {
            modal[0].style.display = "none"
        }
        const openModalFunc = () => {
            openModal();
        }
        const closeModalFunc = () => {
            closeModal();
        }

        const submitOffMeetingForm = () => {
            console.log("제목!!! " + title.value);
            console.log("제한인원!!!  " + limit.value);
            console.log("날짜!!! " + date.value);
            console.log("모임시작시간!!! " + startTime.value);
            console.log("내용!!! " + content.value);
            console.log(props.currentLat);
        }

        for (let i = 0; i < clickable.length; i++) {
            clickable[i].openModalFunc;
        }

        window.onclick = function(event) {
            if (event.target == modal[0]) {
                modal[0].style.display = "none"
            }
        }
        return {
            openModalFunc,
            closeModalFunc,
            submitOffMeetingForm,
            title,
            date,
            startTime,
            content,
            limit
        }
    }
  }
</script>

<style scoped>
@import "@/assets/css/meeting/offMeeting/off-meeting-modal.css";
</style>
