<template>
  <div class="container m-auto p-10 text-grey-darkest" id="app">
    <div style="margin-top: 30px" class="filters row">
      <div class="form-group col-sm-3">
        <label style="font-weight: bold; font-size: 20px" for="search-element"
          >👉🏻 나의 오프모임 조회
        </label>
        <input
          v-model="searchKeyword"
          type="text"
          placeholder="참여한 모임을 확인해보세요!"
          class="form-control focus:outline-none"
          id="search"
          autocomplete="off"
          @keyup.enter="submitSearch"
        />
      </div>
    </div>
    <table style="min-width: 550px" class="table">
      <thead>
        <tr>
          <th>🙋🏻</th>
          <th>모임제목</th>
          <th>날짜</th>
          <th>시간</th>
          <th>위치</th>
          <th class="col-sm-2">✏️</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="group-item"
          v-for="(list, index) in myMeetingList"
          :key="index"
        >
          <td>{{ Number(index) + 1 }}</td>
          <td>
            {{ list.title }}
            <span class="glyphicon glyphicon-euro" aria-hidden="true"></span>
          </td>
          <td>
            {{ list.meetingDate }}
            <span class="glyphicon glyphicon-euro" aria-hidden="true"></span>
          </td>
          <td>
            {{ list.startTime }}
            <span class="glyphicon glyphicon-euro" aria-hidden="true"></span>
          </td>
          <td>
            {{ list.locationAddress }}
            <span class="glyphicon glyphicon-euro" aria-hidden="true"></span>
          </td>
          <td>
            <a class="btn btn-warning btn-xs modifyBtn">조회</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { onMounted } from "@vue/runtime-core";
export default {
  props: ["onMeetingIdx"],
  setup(props) {
    const myIdx = Number(sessionStorage.getItem("memberIdx"));
    /* 기존의 오프 미팅 리스트 */
    const myMeetingList = ref([]);

    /* 검색용 오프 미팅 리스트 */
    const searchMyMeetingList = ref(null);

    const route = useRoute();
    let searchKeyword = ref("");

    let onMeetingIdx = ref(0);

    /* 나의 오프모임 조회 axios 비동기 통신 */
    const myOffMeeting = async () => {
      try {
        axios.defaults.headers.common["AUTHORIZATION"] =
          sessionStorage.getItem("token");

        const res = await axios.get("/offMeetings/myOffMeetings", {
          params: { onMeetingIdx: route.params.id, memberIdx: myIdx },
        });
        myMeetingList.value = { ...res.data };

        // console.log(JSON.stringify(res, null, 2));
      } catch (err) {
        console.log(err);
      }
    };

    myOffMeeting();

    /* 키워드 조회 */
    const submitSearch = async () => {
      onMeetingIdx = props.onMeetingIdx;
      console.log("이히히히 => " + onMeetingIdx);
      console.log("여기는 내 모임 컴포넌트 onMeetingIdx : " + onMeetingIdx);

      axios.defaults.headers.common["AUTHORIZATION"] =
        sessionStorage.getItem("token");

      // 검색어를 이용한 검색 로직 구현
      console.log(`Searching for ${searchKeyword.value}`);

      try {
        console.log(
          "try문 안으로 들어왔다  => " +
            onMeetingIdx +
            " " +
            searchKeyword.value
        );

        const res = await axios.get("/offMeetings/search/" + onMeetingIdx, {
          params: {
            keyword: searchKeyword.value,
          },
        });

        console.log("여기까지 들어 왔니?");
        // console.log(JSON.stringify(res));
        searchMyMeetingList.value = res.data;

        console.log(
          `SEARCH:::: ${JSON.stringify(searchMyMeetingList.value, null, 2)}`
        );
        console.log(`원래:: ${JSON.stringify(myMeetingList.value, null, 2)}`);

        // console.log(typeof myMeetingList.value);

        myMeetingList.value = searchMyMeetingList.value;

        console.log(
          `덮어씌워졌니:: ${JSON.stringify(myMeetingList.value, null, 2)}`
        );
      } catch (err) {
        console.log(err);
      }

      searchKeyword.value = "";
    };

    return {
      myOffMeeting,
      myIdx,
      myMeetingList,
      submitSearch,
      searchKeyword,
      searchMyMeetingList,
      onMeetingIdx,
    };
  },
};
</script>

<style scoped>
.form-group {
  max-width: 500px;
}

.actions {
  padding: 10px 0;
}

.glyphicon-euro {
  font-size: 12px;
}
.modifyBtn {
  margin-right: 10px;
  border-radius: 20px;
  font-size: 13px;
  color: white;
  width: 80px;
  background-color: rgb(130, 199, 145);
  border: none;
}
.deleteBtn {
  border-radius: 20px;
  font-size: 13px;
  color: white;
  width: 70px;
  border: none;
  background-color: lightslategray;
}
</style>
