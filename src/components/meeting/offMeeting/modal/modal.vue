<template>
    <button @click="openModalFunc" class="custom-btn btn-12 modal-button" style="position: absolute; z-index: 2; bottom: 5%; right: 5%"><span>클릭하세요!</span><span>모임생성</span></button>

    <form @submit.prevent="submitOffMeetingZ">
        <!-- 모임생성 모달 start -->
        <div id="myModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content slideDown">
            <div class="modal-header">
                <span @click="closeModalFunc" class="close" id="closeModal">&times;</span>
                <h2>모임생성</h2>
            </div>
            <div class="modal-body">
                <form action="" class="modal-form">
                <div class="form-row">
                    <label for="">제목</label>
                    <input type="text" placeholder="제목을 입력해주세요." v-model="title">
                </div>
                <div class="form-row" style="display:none;">
                    <label for="">위치</label>
                    <input type="text" v-model="location" disabled>
                </div>
                <div class="form-row" style="display:none;"></div>
                <!-- <div class="form-row">
                    <label for="iduser">인원수</label>
                    <select class="user-select" name="user-name" id="user">
                    <option value="" selected disabled>인원수를 선택해주세요.</option>
                    <option value="">1명</option>
                    </select>
                </div> -->
                <div class="form-row">
                    <label for="iduser">제한인원</label>
                    <input type="number" id="usernumber" :value="2" name="usernumber" min="2" max="1000">
                </div>
                <div class="form-row">
                    <label for="">날짜</label>
                    <input type="date" v-model="date">
                </div>
                <div class="form-row">
                    <label for="">시작시간</label>
                    <input type="time" v-model="time">
                </div>
                <div class="form-row">
                    <label for="">내용</label>
                    <textarea type="text" placeholder="내용을 입력해주세요." v-model="content"></textarea>
                </div>
                </form>
            </div>
            <div class="modal-footer">
                <input type="submit" class="button good" value="Save">
            </div>
            </div>
        </div>
        <!-- 모임생성 모달 end -->
    </form>
</template>

<script>
  export default {
    name: 'OffMeetingModal',
    setup () {

        const modal = document.getElementsByClassName('modal')
        const clickable = document.querySelectorAll('.clickable')

        const openModal = () => {
        console.log(modal[0]);
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
        closeModalFunc
        }
    }
  }
</script>

<style scoped>
@import "@/assets/css/meeting/offMeeting/off-meeting-modal.css";
</style>