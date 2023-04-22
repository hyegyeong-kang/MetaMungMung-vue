<template>
  <form @submit.prevent="modifyModalFunc">
    <!-- 모임 수정 모달 start -->
    <div id="modifyModal" class="modifyModal" style="overflow: visible">
      <!-- Modal content -->
      <div class="modal-content slideDown">
        <div class="modal-header">
          <span @click="closeModalFunc" class="close" id="closeModal"
            >&times;</span
          >
          <h2 style="color: gray; font-weight: bolder">모임 수정</h2>
        </div>
        <div class="modal-body">
          <div style="margin-bottom: 20px">
            <middle
              id="location"
              style="text-align: center"
              class="form-text text-muted box ivory"
              >👉🏻 모임 생성 위치 : {{ locationAddress }} 👈🏻</middle
            >
          </div>
          <div class="form-group">
            <label for="title">🐶 제목</label>
            <input
              type="text"
              class="form-control inputText"
              id="title"
              aria-describedby="emailHelp"
              placeholder="제목을 입력해주세요."
              v-model="title"
            />
          </div>

          <div class="form-group" style="display: none">
            <label for="location">위치</label>
            <input
              type="text"
              class="form-control inputText disabledLabel"
              id="location"
              :value="locationAddress"
              disabled
            />
          </div>

          <div class="form-group" style="display: none">
            <label for="">위도</label>
            <input type="text" :value="latitude" disabled />
          </div>
          <div class="form-group" style="display: none">
            <label for="">경도</label>
            <input type="text" :value="longitude" disabled />
          </div>

          <div class="form-group">
            <label for="limit">💁🏼‍♀️ 제한인원</label>
            <input
              type="number"
              id="limit"
              :value="limit"
              name="usernumber"
              min="2"
              max="1000"
              class="form-control inputText"
            />
          </div>

          <div class="form-group">
            <label for="limit">📅 날짜</label>
            <input
              type="date"
              id="date"
              v-model="meetingDate"
              name="limit"
              class="form-control inputText"
            />
          </div>

          <div class="form-group">
            <label for="startTime">⏰ 시작시간</label>
            <input
              type="time"
              id="startTime"
              v-model="startTime"
              name="startTime"
              class="form-control inputText"
            />
          </div>

          <div class="form-group">
            <label for="contents">📝 내용</label>
            <textarea
              class="form-control inputText"
              id="contents"
              rows="3"
              placeholder="내용을 입력해주세요."
              v-model="contents"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="content">📸 파일첨부</label>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile04"
              />
              <label class="custom-file-label inputText" for="inputGroupFile04"
                >파일을 선택하세요.</label
              >
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn createBtn">수정</button>
          <a
            @click="closeModifyModalFunc"
            style="color: white; width: 100px"
            class="btn cancelBtn"
            >취소</a
          >
        </div>
      </div>
    </div>
    <!-- 모임생성 모달 end -->
  </form>
</template>

<script>
import axios from "axios";
import { ref, onMounted, watchEffect } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "OffMeetingModal",
  props: ["isOpen", "board"],

  setup(props) {
    const myIdx = Number(sessionStorage.getItem("memberIdx"));
    let offMeetingIdx = ref(null);
    let title = ref("");
    let meetingDate = ref("");
    let startTime = ref("");
    let contents = ref("");
    let limit = ref("2");
    let latitude = ref(null);
    let longitude = ref(null);
    let locationAddress = ref("");
    let hostIdx = ref(null);
    let hostId = ref("");
    let modal = ref(null);

    const router = useRouter();
    const clickable = document.querySelectorAll(".clickable");
    let openModifyModalFunc = ref(null);
    let isOpen = ref(null);
    let board = ref(null);

    board.value = props.board;
    console.log("detail 값 ===> " + JSON.stringify(board.value, null, 2));
    offMeetingIdx.value = board.value.offMeetingIdx;
    title.value = board.value.title;
    meetingDate.value = board.value.meetingDate.substring(0, 10);
    startTime.value = board.value.startTime;
    contents.value = board.value.contents;
    limit.value = board.value.limit;
    latitude.value = board.value.latitude;
    longitude.value = board.value.longitude;
    locationAddress.value = board.value.locationAddress;
    hostId.value = board.value.host.memberId;
    hostIdx.value = board.value.host.memberIdx;

    // watchEffect(() => {
    //   if (props.isOpen) {
    //     isOpen = props.isOpen;

    //     console.log("마지막~! =====> " + isOpen);

    //     openModifyModalFunc = () => {
    //       modal[0].style.display = "block";
    //     };

    //     openModifyModalFunc();
    //   }
    // });

    const closeModifyModalFunc = () => {
      modal[0].style.display = "none";
    };

    const modifyModalFunc = async () => {
      submitModifyOffMeetingForm();
      router.go();
    };

    const submitModifyOffMeetingForm = async () => {
      axios.defaults.headers.common["AUTHORIZATION"] =
        sessionStorage.getItem("token");
      axios
        .patch(`/offMeetings/${offMeetingIdx.value}`, {
          offMeetingIdx: offMeetingIdx.value,
          title: title.value,
          meetingDate: meetingDate.value,
          limit: limit.value,
          contents: contents.value,
          startTime: startTime.value,
        })
        .then(function (response) {
          console.log("response => " + JSON.stringify(response, null, 2));
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    for (let i = 0; i < clickable.length; i++) {
      clickable[i].openModalFunc;
    }

    onMounted(() => {
      modal = document.getElementsByClassName("modifyModal");

      window.onclick = function (event) {
        if (event.target == modal[0]) {
          modal[0].style.display = "none";
        }
      };
    });

    return {
      openModifyModalFunc,
      closeModifyModalFunc,
      modifyModalFunc,
      submitModifyOffMeetingForm,
      offMeetingIdx,
      title,
      limit,
      meetingDate,
      startTime,
      contents,
      limit,
      latitude,
      longitude,
      locationAddress,
      startTime,
      hostId,
      hostIdx,
      myIdx,
      isOpen,
      board,
    };
  },
};
</script>

<style scoped>
.box {
  border-radius: 15px 15px 15px 15px;
  width: 100%;
  padding: 10px;
  text-align: center;
  color: #555;
  border: 1px solid transparent;
}
.ivory {
  background-color: #fcf8e3;
  border-color: #faebcc;
  color: #8a6d3b;
}
.createBtn {
  border-radius: 20px;
  font-size: 13px;
  color: white;
  width: 100px;
  background-color: cornflowerblue;
}
.cancelBtn {
  border-radius: 20px;
  font-size: 13px;
  color: white;
  width: 100px;
  background-color: lightgray;
}
</style>
