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
@import "@/assets/css/meeting/offMeeting/kakaomap.css";
@import "@/assets/css/meeting/offMeeting/off-meeting-modal.css";
</style>
