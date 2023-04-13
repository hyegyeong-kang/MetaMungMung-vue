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
        <div class="form-row">
          <label for="">제목</label>
          <input v-model="title" disabled />
        </div>
        <div class="form-row">
          <label for="">호스트</label>
          <input v-model="host" disabled />
        </div>
        <div class="form-row">
          <label for="">위치</label>
          <input v-model="location" disabled />
        </div>
        <div class="form-row">
          <label for="iduser">제한인원</label>
          <input v-model="limit" disabled />
        </div>
        <div class="form-row">
          <label for="">날짜</label>
          <input v-model="date" disabled />
        </div>
        <div class="form-row">
          <label for="">시작시간</label>
          <input v-model="startTime" disabled />
        </div>
        <div class="form-row">
          <label for="">내용</label>
          <textarea v-model="content" disabled />
        </div>
      </div>
      <div class="modal-footer">
        <button @click="closeDetailModalFunc" class="btn btn-warning">
          닫기
        </button>
        <button class="btn btn-danger">삭제</button>
        <button class="btn btn-primary">수정</button>
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
  props: ["selectedMarker", "boardDetails"],
  setup(props) {
    let title = ref("");
    let host = ref("");
    let location = ref("");
    let date = ref("");
    let startTime = ref("");
    let content = ref("");
    let limit = ref("");

    const modal = document.getElementsByClassName("detailModal");
    const clickable = document.querySelectorAll(".clickable");

    const openDetailModalFunc = () => {
      modal[0].style.display = "block";

      // console.log("props로 받은 title값 : " + props.selectedMarker.getTitle());

      try {
        for (let i = 0; i < props.boardDetails.length; i++) {
          if (props.selectedMarker.getTitle() == props.boardDetails[i].idx) {
            console.log(props.boardDetails[i].title);
            console.log(typeof props.boardDetails[i].title);
            console.log(typeof title.value);

            title.value = props.boardDetails[i].title;
            host.value = props.boardDetails[i].host;
            location.value = props.boardDetails[i].addr;
            date.value = props.boardDetails[i].date;
            startTime.value = props.boardDetails[i].startTime;
            content.value = props.boardDetails[i].content;
            limit.value = props.boardDetails[i].limit;

            console.log("제목잘들어왔니 " + title.value);

            // title.value = props.boardDetails[i].title;
            // console.log(props.boardDetails);
            // title.value = props.boardDetails[i].title;
          }
        }
      } catch (err) {
        console.log("err!!!!" + err);
      }
    };

    const closeModal = () => {
      modal[0].style.display = "none";
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
      host,
      location,
    };
  },
};
</script>

<style scoped>
@import "@/assets/css/meeting/offMeeting/off-meeting-modal.css";
</style>
