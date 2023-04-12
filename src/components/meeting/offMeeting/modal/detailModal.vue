<template>
  <button
    @click="openDetailModalFunc"
    class="custom-btn btn-12 detail-modal-btn"
    style="position: absolute; z-index: 2; bottom: 15%; right: 5%"
  >
    <span>클릭하세요!</span><span>모임상세</span>
  </button>

  <!-- 모임상세 모달 start -->
  <div id="myModal" class="detailModal">
    <!-- Modal content -->
    <div class="modal-content slideDown">
      <div class="modal-header">
        <span @click="closeDetailModalFunc" class="close" id="closeModal"
          >&times;</span
        >
        <h2>모임상세</h2>
      </div>
      <div class="modal-body">
        <form action="" class="modal-form">
          <div class="form-row">
            <label for="">제목</label>
            <div></div>
          </div>
          <div class="form-row">
            <label for="">호스트</label>
            <div></div>
          </div>
          <div class="form-row">
            <label for="">위치</label>
            <div></div>
          </div>
          <div class="form-row" style="display: none">
            <label for="">위도</label>
            <div></div>
          </div>
          <div class="form-row" style="display: none">
            <label for="">경도</label>
            <div></div>
          </div>

          <div class="form-row">
            <label for="iduser">제한인원</label>
            <div></div>
          </div>
          <div class="form-row">
            <label for="">날짜</label>
            <div></div>
          </div>
          <div class="form-row">
            <label for="">시작시간</label>
            <div></div>
          </div>
          <div class="form-row">
            <label for="">내용</label>
            <div></div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button @click="closeDetailModalFunc" class="btn btn-danger">
          닫기
        </button>
        <button class="btn btn-primary">수정</button>
        <button class="btn btn-warning">삭제</button>
      </div>
    </div>
  </div>
  <!-- 모임생성 모달 end -->
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  name: "OffMeetingModal",
  setup() {
    let title = ref("");
    let date = ref("");
    let startTime = ref("");
    let content = ref("");
    let limit = ref("2");

    const modal = document.getElementsByClassName("detailModal");
    const clickable = document.querySelectorAll(".clickable");

    const openModal = () => {
      modal[0].style.display = "block";
    };

    const closeModal = () => {
      modal[0].style.display = "none";
    };
    const openDetailModalFunc = () => {
      openModal();
    };
    const closeDetailModalFunc = () => {
      closeModal();
    };

    for (let i = 0; i < clickable.length; i++) {
      clickable[i].openModalFunc;
    }

    window.onclick = function (event) {
      if (event.target == modal[0]) {
        modal[0].style.display = "none";
      }
    };
    return {
      openDetailModalFunc,
      closeDetailModalFunc,
      title,
      date,
      startTime,
      content,
      limit,
    };
  },
};
</script>

<style scoped>
@import "@/assets/css/meeting/offMeeting/off-meeting-modal.css";
</style>
