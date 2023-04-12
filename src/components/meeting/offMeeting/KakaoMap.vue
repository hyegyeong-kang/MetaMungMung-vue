<template>
  <div>
    <div class="map_wrap" style="position: relative;">
      <div id="map">
        <div class="center-marker">
          <img src="@/assets/images/offMeeting/center-marker.png" alt="">
        </div>
        <div class="current-location">
          <button id="current-location-btn" style="background-color: transparent;"><img src="@/assets/images/offMeeting/current-location.png" alt=""></button>
        </div>
      </div>
      <OffMeetingModal :currentLocation='currentLocation'></OffMeetingModal>
    </div>
    <div>{{this.currentLocation}}</div>

    <div style="display: none;">{{this.currentLocation}}</div>
  </div>
</template>

<script>
import OffMeetingModal from '@/components/meeting/offMeeting/modal/modal.vue';
// import {ref} from 'vue';

export default {
  name: 'KakaoMap',
  components: {
    OffMeetingModal
  },
  data () {
    return {
      currentLocation: ''
    }
  },
  mounted () {
    // api 스크립트 소스 불러오기 및 지도 출력
    if (window.kakao && window.kakao.maps) {
      this.loadMap()
    } else {
      this.loadScript()
    }
  },
  methods: {
    loadScript () {
      const script = document.createElement('script')
      script.src =
        '//dapi.kakao.com/v2/maps/sdk.js?appkey=331e2b8989b90b725f0ab6a607cf49f9&autoload=false&libraries=services'
      script.onload = () => window.kakao.maps.load(this.loadMap)

      document.head.appendChild(script)
    },
    loadMap () {
      const container = document.getElementById('map')
      const currentBtn = document.getElementById('current-location-btn');
      let lat = 0;
      let lon = 0;
      let locationAddress= '';

      const option = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      }

      /* 지도 생성 코드 */
      const map = new kakao.maps.Map(container, option)

      // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
      var zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

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

      let base = this;

      /* 지도 중심좌표 찾는 코드 start */
      // 지도가 이동, 확대, 축소로 인해 중심좌표가 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
      kakao.maps.event.addListener(map, 'center_changed', function() {
        // 지도의 중심좌표를 얻어옵니다
        var latlng = map.getCenter();

        const latitude = latlng.getLat();
        const longitude = latlng.getLng();

        /* 주소 얻어오기 */
        getAddr(latitude,longitude);

        function getAddr(lat,lon){
            /* 주소-좌표 변환 객체 생성 */
            let geocoder = new kakao.maps.services.Geocoder();

            let coord = new kakao.maps.LatLng(lat, lon);
            let callback = function(result, status) {
                if (status === kakao.maps.services.Status.OK) {
                  locationAddress = result[0].address.address_name;
                  console.log(locationAddress);
                  base.currentLocation = locationAddress;
                  // console.log('ssssss'+base.currentLocation)
                }
            }
            geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
        }

            // var message = '';
            // message += '중심 좌표는 위도 ' + latlng.getLat() + ', 경도 ' + latlng.getLng() + '입니다';
            // console.log(message);
      });
    }
  }
}
</script>

<style scoped>
@import "@/assets/css/meeting/offMeeting/kakaomap.css";
</style>

