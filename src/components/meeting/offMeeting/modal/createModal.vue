<template>
  <!-- <button
    @click="openModalFunc"
    class="custom-btn btn-12 modal-button"
    style="position: absolute; z-index: 2; bottom: 5%; right: 5%"
  >
    <span>클릭하세요!</span><span>모임생성</span>
  </button> -->

  <form @submit.prevent="submitOffMeetingForm">
    <!-- 모임생성 모달 start -->
    <div id="myModal" class="modal" style="overflow: visible">
      <!-- Modal content -->
      <div class="modal-content slideDown">
        <div class="modal-header">
          <span @click="closeModalFunc" class="close" id="closeModal"
            >&times;</span
          >
          <h2>모임생성</h2>
        </div>
        <div class="modal-body">
          <form action="" class="modal-form">
            <div class="form-row">
              <label for="">제목</label>
              <input
                type="text"
                placeholder="제목을 입력해주세요."
                v-model="title"
              />
            </div>
            <div class="form-row">
              <label for="">위치</label>
              <input type="text" :value="currentLocation" disabled />
            </div>
            <div class="form-row" style="display: none">
              <label for="">위도</label>
              <input type="text" :value="currentLat" disabled />
            </div>
            <div class="form-row" style="display: none">
              <label for="">경도</label>
              <input type="text" :value="currentLng" disabled />
            </div>

            <div class="form-row">
              <label for="iduser">제한인원</label>
              <input
                type="number"
                id="usernumber"
                :value="limit"
                name="usernumber"
                min="2"
                max="1000"
              />
            </div>
            <div class="form-row">
              <label for="">날짜</label>
              <input type="date" v-model="date" />
            </div>
            <div class="form-row">
              <label for="">시작시간</label>
              <input type="time" v-model="startTime" />
            </div>
            <div class="form-row">
              <label for="">내용</label>
              <textarea
                type="text"
                placeholder="내용을 입력해주세요."
                v-model="content"
              ></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary">등록</button>
        </div>
      </div>
    </div>
    <!-- 모임생성 모달 end -->
  </form>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "OffMeetingModal",
  props: ["currentLocation", "currentLat", "currentLng"],
  setup(props) {
    let title = ref("");
    let date = ref("");
    let startTime = ref("");
    let content = ref("");
    let limit = ref("2");
    const router = useRouter();

    const modal = document.getElementsByClassName("modal");
    const clickable = document.querySelectorAll(".clickable");

    const openCreateModalFunc = () => {
      modal[0].style.display = "block";
    };

    const closeModalFunc = () => {
      modal[0].style.display = "none";
    };

    const submitOffMeetingForm = () => {
      // console.log("제목!!! " + title.value);
      // console.log("위치!!!   " + props.currentLocation);
      // console.log("제한인원!!!  " + limit.value);
      // console.log("날짜!!! " + date.value);
      // console.log("모임시작시간!!! " + startTime.value);
      // console.log("내용!!! " + content.value);
      // console.log("위도 " + props.currentLat);
      // console.log("경도 " + props.currentLng);

      router.go();
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
      openCreateModalFunc,
      closeModalFunc,
      submitOffMeetingForm,
      title,
      date,
      startTime,
      content,
      limit,
    };
  },
};
</script>

