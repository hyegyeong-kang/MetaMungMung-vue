<template>
  <h2 style="margin-top: 50px; margin-left: 50px; margin-bottom: 30px">
    📅 나의 모임 목록 조회
  </h2>

  <div
    class="container"
    style="margin: 0 auto; width: 100%; margin-top: -150px"
  >
    <div class="table">
      <div class="table-header" style="background: #acc8dd">
        <div class="header__item">
          <a id="name" class="filter__link" href="#">🙋🏻</a>
        </div>
        <!-- <div class="header__item">
          <a id="wins" class="filter__link filter__link--number" href="#"
            >호스트</a
          >
        </div> -->
        <div class="header__item">
          <a id="wins" class="filter__link filter__link--number" href="#"
            >모임제목</a
          >
        </div>
        <div class="header__item">
          <a id="draws" class="filter__link filter__link--number" href="#"
            >날짜</a
          >
        </div>
        <div class="header__item">
          <a id="losses" class="filter__link filter__link--number" href="#"
            >시간</a
          >
        </div>
        <div class="header__item">
          <a id="wins" class="filter__link filter__link--number" href="#"
            >위치</a
          >
        </div>
        <!-- <div class="header__item">
          <a id="total" class="filter__link filter__link--number" href="#"
            >내용</a
          >
        </div> -->
      </div>
      <div
        v-for="(list, index) in myMeetingList"
        :key="index"
        class="table-content"
      >
        <div style="background-color: white" class="table-row">
          <div class="table-data">{{ Number(index) + 1 }}</div>
          <!-- <div class="table-data">0</div> -->
          <div class="table-data">{{ list.title }}</div>
          <div class="table-data">{{ list.meetingDate }}</div>
          <div class="table-data">{{ list.startTime }}</div>
          <div class="table-data">{{ list.locationAddress }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  setup() {
    const myIdx = Number(sessionStorage.getItem("memberIdx"));
    const myMeetingList = ref(null);

    /* 나의 오프모임 조회 axios 비동기 통신 */
    const myOffMeeting = async () => {
      try {
        axios.defaults.headers.common["AUTHORIZATION"] =
          sessionStorage.getItem("token");

        const res = await axios.get("/offMeetings/myOffMeetings", {
          params: { onMeetingIdx: 14, memberIdx: myIdx },
        });
        myMeetingList.value = { ...res.data };

        console.log(JSON.stringify(res, null, 2));
      } catch (err) {
        console.log(err);
      }
    };

    myOffMeeting();

    return {
      myOffMeeting,
      myIdx,
      myMeetingList,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700");

$base-spacing-unit: 24px;
$half-spacing-unit: $base-spacing-unit / 2;

$color-alpha: #1772ff;
$color-form-highlight: #eeeeee;

*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  padding: $base-spacing-unit;
  font-family: "Source Sans Pro", sans-serif;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

.container {
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.table {
  width: 100%;
  border: 1px solid $color-form-highlight;
}

.table-header {
  display: flex;
  width: 100%;
  background: #000;
  padding: ($half-spacing-unit * 1.5) 0;
}

.table-row {
  display: flex;
  width: 100%;
  padding: ($half-spacing-unit * 1.5) 0;

  &:nth-of-type(odd) {
    background: $color-form-highlight;
  }
}

.table-data,
.header__item {
  flex: 1 1 20%;
  text-align: center;
}

.header__item {
  text-transform: uppercase;
}

.filter__link {
  color: white;
  text-decoration: none;
  position: relative;
  display: inline-block;
  padding-left: $base-spacing-unit;
  padding-right: $base-spacing-unit;

  &::after {
    content: "";
    position: absolute;
    right: -($half-spacing-unit * 1.5);
    color: white;
    font-size: $half-spacing-unit;
    top: 50%;
    transform: translateY(-50%);
  }

  &.desc::after {
    content: "(desc)";
  }

  &.asc::after {
    content: "(asc)";
  }
}
</style>
