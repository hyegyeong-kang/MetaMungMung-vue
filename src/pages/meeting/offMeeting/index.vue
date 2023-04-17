<template>
  <!-- map section start -->
  <div class="services_section layout_padding">
    <div class="container">
      <h1 class="services_taital" style="margin-bottom: 20px">
        <span>Our</span>
        <img
          src="@/assets/images/offMeeting/paw-print.png"
          style="width: 70px"
        />
        <span style="color: #1f1f1f">OffMeeting</span>
      </h1>
      <KakaoMap />
    </div>
  </div>
  <!-- map section start -->
</template>

<script>
import KakaoMap from "@/components/meeting/offMeeting/KakaoMap.vue";
import { onMounted } from "vue";

export default {
  name: "Service",
  components: {
    KakaoMap,
  },
  setup() {
    onMounted(() => {
      checkFunc();
    });

    const checkFunc = () => {
      let overlay = null;
      let headerSection = null;

      check();

      function check() {
        if (overlay == null) {
          overlay = document.getElementsByClassName("overlay")[0];
        }
        if (headerSection == null) {
          headerSection = document.getElementsByClassName("header_section")[0];
        }
      }

      headerSection.classList.add("background_bg");
      document.getElementById("bannerDiv").style.display = "none";
    };

    return {
      checkFunc,
    };
  },
};
</script>

<style scoped>
/*************/
/*  KakaoMap */
/*************/
#map {
  width: 100%;
  height: 600px;
}
/* --- 모임생성 btn ---*/
.custom-btn,
.detail-modal-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}
.btn-12 {
  position: relative;
  right: 20px;
  bottom: 20px;
  border: none;
  box-shadow: none;
  width: 130px;
  height: 40px;
  line-height: 42px;
  -webkit-perspective: 230px;
  perspective: 230px;
}
.btn-12 span {
  background: rgb(0, 172, 238);
  background: linear-gradient(
    0deg,
    rgba(0, 172, 238, 1) 0%,
    rgba(2, 126, 251, 1) 100%
  );
  display: block;
  position: absolute;
  width: 130px;
  height: 40px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 0;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.btn-12 span:nth-child(1) {
  box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transform: rotateX(90deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-12 span:nth-child(2) {
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-12:hover span:nth-child(1) {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}
.btn-12:hover span:nth-child(2) {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  color: transparent;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}
/*    중심 마커   */
.center-marker {
  margin: 0, auto;
  z-index: 3;
  position: absolute;
  width: 50px;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.current-location {
  z-index: 4;
  position: absolute;
  bottom: 13%;
  right: 3%;
  width: 40px;
}

/* 카테고리 */

#category {
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 5px;
  border: 1px solid #909090;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  background: #fff;
  overflow: hidden;
  z-index: 2;
}
#category li {
  float: left;
  list-style: none;
  width: 50px;
  border-right: 1px solid #acacac;
  padding: 6px 0;
  text-align: center;
  cursor: pointer;
}
#category li.on {
  background: #eee;
}
#category li:hover {
  background: #ffe6e6;
  border-left: 1px solid #acacac;
  margin-left: -1px;
}
#category li:last-child {
  margin-right: 0;
  border-right: 0;
}
#category li span {
  display: block;
  margin: 0 auto 3px;
  width: 27px;
  height: 28px;
}
#category li .category_bg {
  background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png)
    no-repeat;
}
#category li .hospital {
  background-position: -10px 0;
}
#category li .cafe {
  background-position: -10px -144px;
}
#category li .life {
  background-position: -10px -180px;
}
#category li.on .category_bg {
  background-position-x: -46px;
}
.placeinfo_wrap {
  position: absolute;
  bottom: 28px;
  left: -150px;
  width: 300px;
}
.placeinfo {
  position: relative;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #ccc;
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
  background: #fff;
}
.placeinfo:nth-of-type(n) {
  border: 0;
  box-shadow: 0px 1px 2px #888;
}
.placeinfo_wrap .after {
  content: "";
  position: relative;
  margin-left: -12px;
  left: 50%;
  width: 22px;
  height: 12px;
  background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png");
}
.placeinfo a,
.placeinfo a:hover,
.placeinfo a:active {
  color: #fff;
  text-decoration: none;
}
.placeinfo a,
.placeinfo span {
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.placeinfo span {
  margin: 5px 5px 0 5px;
  cursor: default;
  font-size: 13px;
}
.placeinfo .title {
  font-weight: bold;
  font-size: 14px;
  border-radius: 6px 6px 0 0;
  margin: -1px -1px 0 -1px;
  padding: 10px;
  color: #fff;
  background: #d95050;
  background: #d95050
    url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png)
    no-repeat right 14px center;
}
.placeinfo .tel {
  color: #0f7833;
}
.placeinfo .jibun {
  color: #999;
  font-size: 11px;
  margin-top: 0;
}

/*************/
/*   MODAL   */
/*************/
.modal,
.detailModal {
  display: none;
  /* Hidden by default */
  position: absolute;
  /* Stay in ㄹㅊ place */
  z-index: 3;
  /* Sit on top */
  left: 0;
  top: 12%;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  /* overflow: hidden; */
  /* Black w/ opacity */
  transition: all 0.5s ease 0.06s;
}

/* Modal Content/Box */

.modal-content {
  background-color: #fff;
  margin: 15% auto;
  /* 15% from the top and centered */
  padding: 1.2rem;
  max-width: 35%;
  min-width: 400px;
  height: 650px;
  overflow-y: auto;
  /* Could be more or less, depending on screen size */
  visibility: hidden;
  box-shadow: 2px 2px 10px 0px rgba(99, 106, 119, 0.6);
  border-radius: 5px;
}

/* The Close Button */
.close {
  color: #dedede;
  /*float: right;*/
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.close:before {
  content: "Close";
  font-size: 1rem;
  display: none;
  text-decoration: none;
  align-self: center;
  margin-top: 0.2rem;
  font-weight: 400;
}

.close:hover:before {
  display: initial;
  color: #dedede;
}

.close:hover,
.close:focus {
  color: hsl(0, 100%, 70%);
  text-decoration: none;
  cursor: pointer;
}

.close:active,
.close:before:active {
  transition: all 60ms ease;
  transform: scale(0.97);
}

/***********************/
/*  modal form layout  */
/***********************/

.modal-content {
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 2em;
  font-weight: bold;
}

.modal-footer {
  text-align: center;
  display: inline-block;
  /* flex-direction: row-reverse; */
  align-items: center;
}

.modal-footer > input {
  margin-top: 0.8rem;
  margin-bottom: 0rem;
  margin-left: 0rem;
  margin-right: 0rem;
}

.modal-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-row {
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0.4rem 0.4rem;
}

.form-row:nth-child(odd) {
  background: #f2f2f2;
}

.form-row label {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 50%;
}

.form-row input,
.form-row select {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
  border: 1px solid hsl(0, 0%, 90%);
  padding: 0.2rem 0.2rem;
  max-width: 50%;
  background: transparent;
}

.slideDown {
  animation-name: slideDown;
  -webkit-animation-name: slideDown;
  animation-duration: 0.6s;
  -webkit-animation-duration: 0.6s;
  animation-timing-function: ease;
  -webkit-animation-timing-function: ease;
  visibility: visible !important;
}
@keyframes slideDown {
  0% {
    transform: translateY(-100%);
  }
  50% {
    transform: translateY(4%);
  }
  65% {
    transform: translateY(-2%);
  }
  80% {
    transform: translateY(2%);
  }
  95% {
    transform: translateY(-1%);
  }
  100% {
    transform: translateY(0%);
  }
}

.input-group-text {
  background: #9fd6cd;
  border-color: rgba(224, 224, 224, 0.531);

  color: white;
  width: 80px;
}

.inputText {
  color: #5f5f5f;
  border-color: rgba(224, 224, 224, 0.531);
}

.custom-file-input .custom-file {
  border-color: rgba(224, 224, 224, 0.531);
}
</style>
