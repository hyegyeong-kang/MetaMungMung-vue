<template>
  <div>
    <div class="map_wrap" style="position: relative">
      <div id="map">
        <div class="center-marker">
          <img src="@/assets/images/offMeeting/center-marker.png" alt="" />
        </div>
        <div class="current-location">
          <button
            id="current-location-btn"
            style="background-color: transparent"
          >
            <img src="@/assets/images/offMeeting/current-location.png" alt="" />
          </button>
        </div>
      </div>
      <OffMeetingModal
        :currentLocation="currentLocation"
        :currentLat="this.currentLat"
        :currentLng="this.currentLng"
      ></OffMeetingModal>
      <DetailModal
        :selectedMarker="selectedMarker"
        :boardDetails="boardDetails"
        ref="detailModal"
      />
    </div>
    <div>{{ this.currentLocation }}</div>
    <div>{{ this.currentLat }}</div>
    <div>{{ this.currentLng }}</div>
  </div>
</template>

<script>
import OffMeetingModal from "@/components/meeting/offMeeting/modal/createModal.vue";
import DetailModal from "@/components/meeting/offMeeting/modal/detailModal.vue";
// import {ref} from 'vue';

export default {
  name: "KakaoMap",
  components: {
    OffMeetingModal,
    DetailModal,
  },
  data() {
    return {
      currentLocation: "",
      currentLat: "",
      currentLng: "",
      openIt: null,
      selectedMarker: null,
      boardMarkers: [],
      boardDetails: [
        {
          idx: 1,
          title: "첫게시글!!!!",
          host: "손정아",
          addr: "헤이그카페",
          latitude: 37.25974040657983,
          longitude: 127.14262381993633,
          limit: "5",
          date: "2023-04-13",
          startTime: "18:00",
          content:
            "여기서 모여요~ 여기 카페 음식도 맛있고, 강아지들 잘 놀아요!!!!!",
        },
        {
          idx: 2,
          title: "두번째 게시글!!!!",
          host: "홍길동",
          addr: "스타벅스",
          latitude: 37.25967098625983,
          longitude: 127.1422826831307,
          limit: "4",
          date: "2023-04-15",
          startTime: "12:00",
          content: "카페는 역시 스타벅스죠~~~~~ 여기 어떠세요????!!!!!",
        },
        {
          idx: 3,
          title: "세번째 게시글!!!!",
          host: "박길동",
          addr: "경찰병원역 스타벅스",
          latitude: 37.494784448894926,
          longitude: 127.12194168816411,
          limit: "4",
          date: "2023-04-15",
          startTime: "12:00",
          content: "카페는 역시 스타벅스죠~~~~~ 여기 어떠세요????!!!!!",
        },
        {
          idx: 4,
          title: "네번째 게시글!!!!",
          host: "박길동",
          addr: "우불식당",
          latitude: 37.495170738242564,
          longitude: 127.12086238052915,
          limit: "4",
          date: "2023-04-15",
          startTime: "12:00",
          content: "카페는 역시 스타벅스죠~~~~~ 여기 어떠세요????!!!!!",
        },
        {
          idx: 5,
          title: "다섯번째 게시글!!!!",
          host: "박길동",
          addr: "빽다방",
          latitude: 37.49481084427134,
          longitude: 127.1203642409428,
          limit: "4",
          date: "2023-04-15",
          startTime: "12:00",
          content: "카페는 역시 스타벅스죠~~~~~ 여기 어떠세요????!!!!!",
        },
      ],
    };
  },
  // created() {
  //   let base = this;
  //   //비동기적으로 selectedMarker를 업데이트

  // },
  mounted() {
    // api 스크립트 소스 불러오기 및 지도 출력
    if (window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }

    let base = this;

    base.openIt = this.$refs.detailModal.openDetailModalFunc;

    console.log("asdfasdfasdfasdf");
    console.log(base.openIt + "asdfasdfasdfasdf");
  },
  methods: {
    loadScript() {
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=331e2b8989b90b725f0ab6a607cf49f9&autoload=false&libraries=services";
      script.onload = () => window.kakao.maps.load(this.loadMap);

      document.head.appendChild(script);
    },
    loadMap() {
      const container = document.getElementById("map");
      const currentBtn = document.getElementById("current-location-btn");
      let lat = 0;
      let lon = 0;
      let locationAddress = "";

      const option = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      /* 지도 생성 코드 */
      const map = new kakao.maps.Map(container, option);

      // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
      var zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      geolocationFunc();

      // 지도에 마커와 인포윈도우를 표시하는 함수
      function displayMarker(locPosition, message) {
        const marker = new kakao.maps.Marker({
          map: map,
          position: locPosition,
        });
        const iwContent = message; // 인포윈도우에 표시할 내용
        const iwRemovaable = true;
        // 인포 윈도우 생성
        var infowindow = new kakao.maps.InfoWindow({
          content: iwContent,
          removavle: iwRemovaable,
        });
        infowindow.open(map, marker);

        map.setCenter(locPosition);
      }

      function geolocationFunc() {
        if (navigator.geolocation) {
          // GeoLocation을 이용해서 접속 위치를 얻어옴
          navigator.geolocation.getCurrentPosition(function (position) {
            lat = position.coords.latitude; // 위도

            lon = position.coords.longitude; // 경도

            const locPosition = new kakao.maps.LatLng(lat, lon);
            const message = '<div style="padding:5px;">여기에 계신가요?</div>'; // 인포윈도우에 표시될 내용

            // 마커와 인포윈도우를 표시한다.
            displayMarker(locPosition, message);
          });
        } else {
          var locPostion = new kakao.maps.LatLng(33.450701, 126.570667);
          var message = "현재위치를 찾을 수 없습니다.";

          displayMarker(locPostion, message);
        }
      }

      /* 내 위치 찾기 버튼 클릭 시 현재 위치로 지도 이동하는 코드 start */
      currentBtn.addEventListener("click", function (event) {
        const locPosition = new kakao.maps.LatLng(lat, lon);
        map.setCenter(locPosition);
      });

      let base = this;

      /* 지도 중심좌표 찾는 코드 start */
      // 지도가 이동, 확대, 축소로 인해 중심좌표가 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
      kakao.maps.event.addListener(map, "center_changed", function () {
        // 지도의 중심좌표를 얻어옵니다
        var latlng = map.getCenter();

        const latitude = latlng.getLat();
        const longitude = latlng.getLng();

        base.currentLat = latitude;
        base.currentLng = longitude;

        /* 주소 얻어오기 */
        getAddr(latitude, longitude);

        function getAddr(lat, lon) {
          /* 주소-좌표 변환 객체 생성 */
          let geocoder = new kakao.maps.services.Geocoder();

          let coord = new kakao.maps.LatLng(lat, lon);
          let callback = function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
              locationAddress = result[0].address.address_name;
              // console.log(locationAddress);
              base.currentLocation = locationAddress;
              // console.log('ssssss'+base.currentLocation)
            }
          };
          geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
        }
      });

      // // 커스텀 오버레이에 표시할 컨텐츠 입니다
      // // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
      // // 별도의 이벤트 메소드를 제공하지 않습니다
      // var content =
      //   '<div class="wrap">' +
      //   '    <div class="info">' +
      //   '        <div class="title">' +
      //   "            카카오 스페이스닷원" +
      //   '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      //   "        </div>" +
      //   '        <div class="body">' +
      //   '            <div class="img">' +
      //   '                <img src="" width="73" height="70">' +
      //   "           </div>" +
      //   '            <div class="desc">' +
      //   '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' +
      //   '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' +
      //   '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' +
      //   "            </div>" +
      //   "        </div>" +
      //   "    </div>" +
      //   "    <button>버튼</button>";
      // ("</div>");

      // let overlay = new Object();
      // createCustomOverlay();
      addBoardMarker();

      /* 게시물 좌표 마커 생성 */
      function addBoardMarker() {
        let boardMarkerPosition = 0;
        let cnt = 1;
        for (let i = 0; i < base.boardDetails.length; i++) {
          boardMarkerPosition = new kakao.maps.LatLng(
            base.boardDetails[i].latitude,
            base.boardDetails[i].longitude
          );

          const boardMarker = new kakao.maps.Marker({
            position: boardMarkerPosition,
            title: cnt + i,
          });

          boardMarker.setMap(map);

          base.boardMarkers.push(boardMarker);

          kakao.maps.event.addListener(boardMarker, "click", function () {
            if (base.selectedMarker || base.selectedMarker !== boardMarker) {
              base.selectedMarker = boardMarker;
              console.log(
                "선택된 마커 : " +
                  base.selectedMarker.getTitle() +
                  ", 위도경도는" +
                  base.selectedMarker.getPosition()
              );
              base.openIt();
            }
          });

          // // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
          // kakao.maps.event.addListener(boardMarker, "click", function () {
          //   overlay.setMap(map);
          // });

          // // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
          // function closeOverlay() {
          //   overlay.setMap(null);
          // }
        }
      }

      // // 마커 위에 커스텀오버레이를 표시합니다
      // // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
      // function createCustomOverlay() {
      //   let boardMarkerPosition = 0;

      //   for (let i = 0; i < base.boardDetails.length; i++) {
      //     boardMarkerPosition = new kakao.maps.LatLng(
      //       base.boardDetails[i].latitude,
      //       base.boardDetails[i].longitude
      //     );
      //     overlay = new kakao.maps.CustomOverlay({
      //       content: content,
      //       map: map,
      //       position: boardMarkerPosition,
      //     });
      //   }
      // }
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/meeting/offMeeting/kakaomap.css";

.wrap {
  position: absolute;
  left: 0;
  bottom: 40px;
  width: 288px;
  height: 132px;
  margin-left: -144px;
  text-align: left;
  overflow: hidden;
  font-size: 12px;
  font-family: "Malgun Gothic", dotum, "돋움", sans-serif;
  line-height: 1.5;
}
.wrap * {
  padding: 0;
  margin: 0;
}
.wrap .info {
  width: 286px;
  height: 120px;
  border-radius: 5px;
  border-bottom: 2px solid #ccc;
  border-right: 1px solid #ccc;
  overflow: hidden;
  background: #fff;
}
.wrap .info:nth-child(1) {
  border: 0;
  box-shadow: 0px 1px 2px #888;
}
.info .title {
  padding: 5px 0 0 10px;
  height: 30px;
  background: #eee;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
  font-weight: bold;
}
.info .close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #888;
  width: 17px;
  height: 17px;
  background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png");
}
.info .close:hover {
  cursor: pointer;
}
.info .body {
  position: relative;
  overflow: hidden;
}
.info .desc {
  position: relative;
  margin: 13px 0 0 90px;
  height: 75px;
}
.desc .ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.desc .jibun {
  font-size: 11px;
  color: #888;
  margin-top: -2px;
}
.info .img {
  position: absolute;
  top: 6px;
  left: 5px;
  width: 73px;
  height: 71px;
  border: 1px solid #ddd;
  color: #888;
  overflow: hidden;
}
.info:after {
  content: "";
  position: absolute;
  margin-left: -12px;
  left: 50%;
  bottom: 0;
  width: 22px;
  height: 12px;
  background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png");
}
.info .link {
  color: #5085bb;
}
</style>
