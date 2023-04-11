<template>
  <div>
    <div class="map_wrap" style="position: relative;">
      <div id="map">
        <div class="center-marker">
          <img src="@/assets/images/offMeeting/center-marker.png" alt="">
        </div>
        <button @click="openModalFunc" class="custom-btn btn-12 modal-button" style="position: absolute; z-index: 2; bottom: 5%; right: 5%"><span>클릭하세요!</span><span>모임생성</span></button>
        <div class="current-location">
          <button id="current-location-btn" style="background-color: transparent;"><img src="@/assets/images/offMeeting/current-location.png" alt=""></button>
        </div>
      </div>
    </div>
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
              <input type="text" placeholder="제목을 입력해주세요.">
            </div>
            <div class="form-row">
              <label for="">위치</label>
              <input type="text" disabled>
            </div>
            <div class="form-row">
              <label for="iduser">인원수</label>
              <select class="user-select" name="user-name" id="user">
                <option value="" selected disabled>인원수를 선택해주세요.</option>
              </select>
            </div>
            <div class="form-row">
              <label for="">Date</label>
              <input type="date">
            </div>
            <div class="form-row">
              <label for="">Start time</label>
              <input type="time">
            </div>
            <div class="form-row">
              <label for="">Event length</label>
              <input type="text">
            </div>
          </form>
        </div>
      <div class="modal-footer">
        <input type="submit" class="button good" value="Save">
      </div>
    </div>
  </div>
    <!-- 모임생성 모달 end -->
  </div>
</template>

<script>
export default {
  name: 'KakaoMap',
  data () {
    return {
      // map 객체 설정
      map: null
    }
  },
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
  },
  created () {},
  mounted () {
    // api 스크립트 소스 불러오기 및 지도 출력
    if (window.kakao && window.kakao.maps) {
      this.loadMap()
    } else {
      this.loadScript()
    }
  },
  unmounted () {},
  methods: {
    loadScript () {
      const script = document.createElement('script')
      script.src =
        '//dapi.kakao.com/v2/maps/sdk.js?appkey=331e2b8989b90b725f0ab6a607cf49f9&autoload=false'
      script.onload = () => window.kakao.maps.load(this.loadMap)

      document.head.appendChild(script)
    },
    loadMap () {
      const container = document.getElementById('map')
      const currentBtn = document.getElementById('current-location-btn');
      let lat = 0;
      let lon = 0;

      const option = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      }
      const map = new kakao.maps.Map(container, option)

      geolocationFunc();

      // 지도에 마커와 인포윈도우를 표시하는 함수
      function displayMarker (locPosition, message) {
        const marker = new kakao.maps.Marker({
          map: map,
          position: locPosition
        })
        const iwContent = message // 인포윈도우에 표시할 내용
        const iwRemovaable = true
        // 인포 윈도우 생성
        var infowindow = new kakao.maps.InfoWindow({
          content: iwContent,
          removavle: iwRemovaable
        })
        infowindow.open(map, marker)

        map.setCenter(locPosition)
      }

      // 현재위치로 지도 이동
      function changeDisplayWithNoMarker (locPosition) {
        map.setCenter(locPosition)
      }

      function geolocationFunc () {
        if (navigator.geolocation) {
          // GeoLocation을 이용해서 접속 위치를 얻어옴
          navigator.geolocation.getCurrentPosition(function (position) {
            lat = position.coords.latitude // 위도

            lon = position.coords.longitude // 경도

            const locPosition = new kakao.maps.LatLng(lat, lon)
            const message = '<div style="padding:5px;">여기에 계신가요?</div>' // 인포윈도우에 표시될 내용

            // 마커와 인포윈도우를 표시한다.
            displayMarker(locPosition, message)
          })
        } else {
          var locPostion = new kakao.maps.LatLng(33.450701, 126.570667)
          var message = '현재위치를 찾을 수 없습니다.'

          displayMarker(locPostion, message)
        }
      }

      /* 내 위치 찾기 버튼 클릭 시 현재 위치로 지도 이동하는 코드 start */
        currentBtn.addEventListener('click', function(event) {
          const locPosition = new kakao.maps.LatLng(lat, lon)
          map.setCenter(locPosition)
        });

      // 지도가 이동, 확대, 축소로 인해 중심좌표가 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
      kakao.maps.event.addListener(map, 'center_changed', function() {

          // 지도의  레벨을 얻어옵니다
          var level = map.getLevel();

          // 지도의 중심좌표를 얻어옵니다
          var latlng = map.getCenter();

          var message = '';
          message += '중심 좌표는 위도 ' + latlng.getLat() + ', 경도 ' + latlng.getLng() + '입니다';

          var resultDiv = document.getElementsByClassName('result');
          resultDiv.innerHTML = message;

          // console.log(message);
      });

      // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
      var zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    }
  }
}
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
.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
}
.btn-12{
  position: relative;
  right: 20px;
  bottom: 20px;
  border:none;
  box-shadow: none;
  width: 130px;
  height: 40px;
  line-height: 42px;
  -webkit-perspective: 230px;
  perspective: 230px;
}
.btn-12 span {
  background: rgb(0,172,238);
  background: linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%);
  display: block;
  position: absolute;
  width: 130px;
  height: 40px;
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  border-radius: 5px;
  margin:0;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all .3s;
  transition: all .3s;
}
.btn-12 span:nth-child(1) {
  box-shadow:
   -7px -7px 20px 0px #fff9,
   -4px -4px 5px 0px #fff9,
   7px 7px 20px 0px #0002,
   4px 4px 5px 0px #0001;
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
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}
.btn-12:hover span:nth-child(2) {
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
 color: transparent;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}
/*    중심 마커   */
.center-marker {
  z-index: 3;
  position: absolute;
  width: 50px;
  top: 50%;
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

/*************/
/*   MODAL   */
/*************/
.modal {
	display: none;
	/* Hidden by default */
	position: absolute;
	/* Stay in place */
	z-index: 3;
	/* Sit on top */
	left: 0;
	top: 20%;
	width: 100%;
	/* Full width */
	height: 100%;
	/* Full height */
	overflow: hidden;
	/* Black w/ opacity */
	transition: all 0.5s ease 0.06s;
}


/* Modal Content/Box */

.modal-content {
	background-color: #fff;
	margin: 15% auto;
	/* 15% from the top and centered */
	padding: 1.2rem;
	max-width: 30%;
  min-width: 400px;
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
	display: flex;
	flex-direction: row-reverse;
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
	50%{
		transform: translateY(4%);
	}
	65%{
		transform: translateY(-2%);
	}
	80%{
		transform: translateY(2%);
	}
	95%{
		transform: translateY(-1%);
	}
	100% {
		transform: translateY(0%);
	}
}
</style>
