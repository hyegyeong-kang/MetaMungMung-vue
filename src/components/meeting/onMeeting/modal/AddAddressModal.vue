<template>
  <!-- 모임생성 모달 start -->
  <div id="addrModal">
      <!-- Modal content -->
      <div class="modal-content slideDown">
        <div class="modal-header">
          <span @click="closeModal" class="close" id="closeModal">&times;</span>
          <h2>주소 추가</h2>
        </div>
        <div class="modal-body">
          <form action="" class="modal-form" id="addrForm">
            <div class="form-row">
              <input
                type="text"
                placeholder="주소를 입력해주세요." id="keyword"/>
                <div class="topInputSearch _searchBox">
                    <button type="submit" class="btnSearch" id="btn_search" @click="checkInputText"></button>
                </div>
            </div>
            <div class="form-row mapCustom">
                <div class="map_wrap">
                    <div id="map">
                        <div class="hAddr">
                            <span class="title">지도중심기준 행정동 주소정보</span>
                            <span id="centerAddr"></span>
                        </div>
                    </div>

                    <div id="menu_wrap" class="bg_white">
                        <div class="option">
                            <div>
                                <!-- <form onsubmit="searchPlaces(); return false;">
                                    키워드 : <input type="text" value="이태원 맛집" id="keyword" size="15"> 
                                    <button type="submit">검색하기</button> 
                                </form> -->
                            </div>
                        </div>
                        <hr>
                        <ul id="placesList"></ul>
                        <div id="pagination"></div>
                    </div>
                </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
    <!-- 모임생성 모달 end -->
    <!-- <div class="mapListArea _searchResult" style="display: block;">
        <ul data-viewname="DSpotListView" class="mapList">
            <li data-viewname="DSpotListItemView" class="mapItem -active">
                <span class="icon">
                    <svg class="svgIcon sf_color" aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ico-map-15"></use>
                    </svg>
                </span>
                <div class="mapInfo">
                    <strong class="title">스피어즈</strong>
                    <span href="#" class="text">서울특별시 송파구 송파대로 345 1B동 지하1층 B161호</span>
                </div>
            </li>
            <li data-viewname="DSpotListItemView" class="mapItem">
                <span class="icon">
                    <svg class="svgIcon sf_color" aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ico-map-15"></use>
                    </svg>
                </span>
            </li>
        </ul>
    </div> -->
</template>

<script>
import { exportDefaultSpecifier } from '@babel/types'


export default {
    data() {
        return {
            currentLocation: '',
            currentLat: '',
            currentLng: ''
        }

    },
    mounted() {
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
                // const marker = new kakao.maps.Marker({
                // map: map,
                // position: locPosition
                // })
                marker.setPosition(locPosition);
                marker.setMap(map);

                const iwContent = message // 인포윈도우에 표시할 내용
                const iwRemovaable = true
                // 인포 윈도우 생성
                // var infowindow = new kakao.maps.InfoWindow({
                // content: iwContent,
                // removavle: iwRemovaable
                // })
                infowindow.setContent(iwContent);
                infowindow.open(map, marker)

                map.setCenter(locPosition)
            }

            function kangFunc() {
                if (navigator.geolocation) {
                // GeoLocation을 이용해서 접속 위치를 얻어옴
                navigator.geolocation.getCurrentPosition(function (position) {
                    lat = position.coords.latitude // 위도

                    lon = position.coords.longitude // 경도

                    const locPosition = new kakao.maps.LatLng(lat, lon)
                    return locPosition;
                })
                } else {
                var locPostion = new kakao.maps.LatLng(33.450701, 126.570667)
                return locPostion;
                }
            }

            function geolocationFunc () {
                if (navigator.geolocation) {
                // GeoLocation을 이용해서 접속 위치를 얻어옴
                navigator.geolocation.getCurrentPosition(function (position) {
                    lat = position.coords.latitude // 위도

                    lon = position.coords.longitude // 경도

                    const locPosition = new kakao.maps.LatLng(lat, lon)
                    const message = '<div style="padding:5px;cursor:pointer" @click="addPosition()">이 위치를 추가   <span><img src="@/assets/images/offMeeting/paw-print.png"></span></div>' // 인포윈도우에 표시될 내용

                    // 마커와 인포윈도우를 표시한다.
                    displayMarker(locPosition, message)
                })
                } else {
                var locPostion = new kakao.maps.LatLng(33.450701, 126.570667) 
                var message = '현재위치를 찾을 수 없습니다.'

                displayMarker(locPostion, message)
                }
            }

            let base = this;

      /* 지도 중심좌표 찾는 코드 start */
      // 지도가 이동, 확대, 축소로 인해 중심좌표가 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
    //   kakao.maps.event.addListener(map, 'center_changed', function() {
    //     // 지도의 중심좌표를 얻어옵니다
    //     var latlng = map.getCenter();

    //     const latitude = latlng.getLat();
    //     const longitude = latlng.getLng();

    //     base.currentLat = latitude;
    //     base.currentLng = longitude;

    //     /* 주소 얻어오기 */
    //     getAddr(latitude,longitude);

    //     function getAddr(lat,lon){
    //         /* 주소-좌표 변환 객체 생성 */
    //         let geocoder = new kakao.maps.services.Geocoder();

    //         let coord = new kakao.maps.LatLng(lat, lon);
    //         let callback = function(result, status) {
    //             if (status === kakao.maps.services.Status.OK) {
    //               locationAddress = result[0].address.address_name;
    //               // console.log(locationAddress);
    //               base.currentLocation = locationAddress;
    //               // console.log('ssssss'+base.currentLocation)
    //             }
    //         }
    //         geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    //     }

    //         // var message = '';
    //         // message += '중심 좌표는 위도 ' + latlng.getLat() + ', 경도 ' + latlng.getLng() + '입니다';
    //         // console.log(message);
    //   });


      // ** 클릭한 위치에 마커 표시하기 **
      // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

        var marker = new kakao.maps.Marker(), // 클릭한 위치를 표시할 마커입니다
            infowindow = new kakao.maps.InfoWindow({zindex:1}); // 클릭한 위치에 대한 주소를 표시할 인포윈도우입니다
        

        const locPosition = kangFunc();
        // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
        searchAddrFromCoords(map.getCenter(), displayCenterInfo);

        // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
        kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
            searchDetailAddrFromCoords(mouseEvent.latLng, function(result, status) {
                if (status === kakao.maps.services.Status.OK) {
                    var detailAddr = !!result[0].road_address ? '<div>도로명주소 : ' + result[0].road_address.address_name + '</div>' : '';
                    detailAddr += '<div>지번 주소 : ' + result[0].address.address_name + '</div>';
                    
                    var address = '';
                    if(result[0].road_address){
                        address = result[0].road_address.address_name;
                    } else{
                        address = result[0].address.address_name;
                    }
                    var content = '<div style="padding:5px;cursor:pointer" @click="addPosition(' + address + ')">이 위치를 추가   <span><img src="@/assets/images/offMeeting/paw-print.png"></span>' + '<div class="bAddr">' +
                                    detailAddr + 
                                '</div></div>';

                    // 마커를 클릭한 위치에 표시합니다 
                    marker.setPosition(mouseEvent.latLng);
                    marker.setMap(map);

                    // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
                    infowindow.setContent(content);
                    infowindow.open(map, marker);
                }   
            });
        });

        // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
        kakao.maps.event.addListener(map, 'idle', function() {
            searchAddrFromCoords(map.getCenter(), displayCenterInfo);
        });

        function searchAddrFromCoords(coords, callback) {
            // 좌표로 행정동 주소 정보를 요청합니다
            geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);         
        }

        function searchDetailAddrFromCoords(coords, callback) {
            // 좌표로 법정동 상세 주소 정보를 요청합니다
            geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        }

        // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
        function displayCenterInfo(result, status) {
            if (status === kakao.maps.services.Status.OK) {
                var infoDiv = document.getElementById('centerAddr');

                for(var i = 0; i < result.length; i++) {
                    // 행정동의 region_type 값은 'H' 이므로
                    if (result[i].region_type === 'H') {
                        infoDiv.innerHTML = result[i].address_name;
                        break;
                    }
                }
            }    
        }

    //   // 지도를 클릭한 위치에 표출할 마커입니다
    //     var marker = new kakao.maps.Marker({ 
    //         // 지도 중심좌표에 마커를 생성합니다 
    //         position: map.getCenter() 
    //     }); 
    //     // 지도에 마커를 표시합니다
    //     marker.setMap(map);

    //     // 지도에 클릭 이벤트를 등록합니다
    //     // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    //     kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
            
    //         // 클릭한 위도, 경도 정보를 가져옵니다 
    //         var latlng = mouseEvent.latLng; 
            
    //         // 마커 위치를 클릭한 위치로 옮깁니다
    //         marker.setPosition(latlng);

    //         console.log(`위도::::: ${latlng.getLat()} //// 경도:::: ${latlng.getLng()}`)
            
    //         var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
    //         message += '경도는 ' + latlng.getLng() + ' 입니다';
            
    //         var resultDiv = document.getElementById('clickLatlng'); 
    //         resultDiv.innerHTML = message;
            
    //     });

        // 지도 위에 표시되고 있는 마커를 모두 제거합니다
        function removeMarker() {
            for ( var i = 0; i < markers.length; i++ ) {
                markers[i].setMap(null);
            }
            markers = [];
        }

            //현주
            // 마커를 담을 배열입니다
            var markers = [];  
            // 장소 검색 객체 생성
            const ps = new kakao.maps.services.Places();

            document.getElementById("addrForm").addEventListener('submit', (e) => {
                e.preventDefault();
                document.getElementById("menu_wrap").style.display = 'block';
                searchPlaces();
            });

            document.getElementById('menu_wrap').addEventListener('click', () => {
                document.getElementById("menu_wrap").style.display = 'block';
            });
            //키워드 검색을 요청하는 함수
            function searchPlaces() {

                var keyword = document.getElementById('keyword').value;

                if (!keyword.replace(/^\s+|\s+$/g, '')) {
                    alert('키워드를 입력해주세요!');
                    return false;
                }

                // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
                ps.keywordSearch( keyword, placesSearchCB, {
                    location: new kakao.maps.LatLng(lat, lon)
                }); 
            }
            // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
            function placesSearchCB(data, status, pagination) {

                if (status === kakao.maps.services.Status.OK) {
                    // 현재 위치 마커 삭제
                    marker.setMap(null);
                    // 현재 위치 인포윈도우 닫기
                    infowindow.close();

                    // 정상적으로 검색이 완료됐으면
                    // 검색 목록과 마커를 표출합니다
                    displayPlaces(data);

                    // 페이지 번호를 표출합니다
                    displayPagination(pagination);

                } else if (status === kakao.maps.services.Status.ZERO_RESULT) {

                    alert('검색 결과가 존재하지 않습니다.');
                    return;

                } else if (status === kakao.maps.services.Status.ERROR) {

                    alert('검색 결과 중 오류가 발생했습니다.');
                    return;

                }
            }
            // 검색 결과 목록과 마커를 표출하는 함수입니다
            function displayPlaces(places) {

                var listEl = document.getElementById('placesList'), 
                menuEl = document.getElementById('menu_wrap'),
                fragment = document.createDocumentFragment(), 
                bounds = new kakao.maps.LatLngBounds(), 
                listStr = '';

                // 검색 결과 목록에 추가된 항목들을 제거합니다
                removeAllChildNods(listEl);

                // 지도에 표시되고 있는 마커를 제거합니다
                removeMarker();

                for ( var i=0; i<places.length; i++ ) {

                    // 마커를 생성하고 지도에 표시합니다
                    var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
                        marker = addMarker(placePosition, i), 
                        itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

                    // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                    // LatLngBounds 객체에 좌표를 추가합니다
                    bounds.extend(placePosition);

                    // 마커와 검색결과 항목에 mouseover 했을때
                    // 해당 장소에 인포윈도우에 장소명을 표시합니다
                    // mouseout 했을 때는 인포윈도우를 닫습니다
                    (function(marker, title) {
                        kakao.maps.event.addListener(marker, 'click', function() {
                            displayInfowindow(marker, title);
                        });

                        // kakao.maps.event.addListener(marker, 'mouseout', function() {
                        //     infowindow.close();
                        // });

                        itemEl.onclick =  function () {
                            displayInfowindow(marker, title);
                        };

                        // itemEl.onmouseout =  function () {
                        //     infowindow.close();
                        // };
                    })(marker, places[i].place_name);

                    fragment.appendChild(itemEl);
                    
                }

                // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
                listEl.appendChild(fragment);
                menuEl.scrollTop = 0;

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                map.setBounds(bounds);
                displayInfowindow(markers[0], places[0].place_name);
            }
            // 검색결과 항목을 Element로 반환하는 함수입니다
            function getListItem(index, places) {

                var el = document.createElement('li'),
                itemStr = '<span class="markerbg marker_' + (index+1) + '"></span>' +
                            '<div class="info">' +
                            '   <h5>' + places.place_name + '</h5>';

                if (places.road_address_name) {
                    itemStr += '    <span>' + places.road_address_name + '</span>' +
                                '   <span class="jibun gray">' +  places.address_name  + '</span>';
                } else {
                    itemStr += '    <span>' +  places.address_name  + '</span>'; 
                }
                            
                itemStr += '  <span class="tel">' + places.phone  + '</span>' +
                            '</div>' + '<hr>';           

                el.innerHTML = itemStr;
                el.className = 'item';

                return el;
            }
            // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
            function addMarker(position, idx, title) {
                var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
                    imageSize = new kakao.maps.Size(36, 37),  // 마커 이미지의 크기
                    imgOptions =  {
                        spriteSize : new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
                        spriteOrigin : new kakao.maps.Point(0, (idx*46)+10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
                        offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
                    },
                    markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
                        marker = new kakao.maps.Marker({
                        position: position, // 마커의 위치
                        image: markerImage 
                    });

                marker.setMap(map); // 지도 위에 마커를 표출합니다
                markers.push(marker);  // 배열에 생성된 마커를 추가합니다

                return marker;
            }
            // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
            function displayPagination(pagination) {
                var paginationEl = document.getElementById('pagination'),
                    fragment = document.createDocumentFragment(),
                    i; 

                // 기존에 추가된 페이지번호를 삭제합니다
                while (paginationEl.hasChildNodes()) {
                    paginationEl.removeChild (paginationEl.lastChild);
                }

                for (i=1; i<=pagination.last; i++) {
                    var el = document.createElement('a');
                    el.href = "#";
                    el.innerHTML = i;

                    if (i===pagination.current) {
                        el.className = 'on';
                    } else {
                        el.onclick = (function(i) {
                            return function() {
                                pagination.gotoPage(i);
                            }
                        })(i);
                    }

                    fragment.appendChild(el);
                }
                paginationEl.appendChild(fragment);
            }

            // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
            // 인포윈도우에 장소명을 표시합니다
            function displayInfowindow(marker, title) {

                var content = '<div style="padding:5px;cursor:pointer" @click="addPosition(' + title + ')">이 위치를 추가   <span><img src="@/assets/images/offMeeting/paw-print.png"></span><div style="padding:5px;z-index:1;">' + title + '</div></div>';

                infowindow.setContent(content);
                infowindow.open(map, marker);
            }

            // 검색결과 목록의 자식 Element를 제거하는 함수입니다
            function removeAllChildNods(el) {   
                while (el.hasChildNodes()) {
                    el.removeChild (el.lastChild);
                }
            }



        } // loadMap() end
    },
    props:{
        isOpen: Boolean
    },
    setup(props, {emit}){
        const closeModal = () => {
            document.getElementById("menu_wrap").style.display = 'block';
            emit('is-open', false);
        }

        const addPosition = (name) => {
            console.log(name);
            emit('add-address', name);
        }

        return{
            closeModal,
            addPosition
        }
    }

}
</script>

<style scoped>
#addrModal{
    /* display: none; */
    position: absolute;
    z-index: 11;
    left: 28%;
    top: 23%;
    max-width: 100%;
    height: auto;
    /* overflow: hidden; */
    transition: all 0.5s ease 0.06s;
}
.modal-content {
    background-color: #fff;
    /* margin: 15% auto; */
    padding: 1.2rem;
    max-width: 100%;
    min-width: 400px;
    visibility: hidden;
    box-shadow: 2px 2px 10px 0px rgba(99, 106, 119, 0.6);
    border-radius: 5px;
}
#map{
    height: 390px;
}
.form-row input, .form-row select {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 50%;
    border: 1px solid hsl(0, 0%, 90%);
    padding: 0.4rem 0.4rem;
    max-width: 100%;
}
.topInputSearch{
    width: 10%;
}
.topInputSearch .btnSearch:before {
    width: 24px;
    height: 24px;
    -webkit-mask-image: url(@/assets/images/common/search-icon.png);
    mask-image: url(@/assets/images/common/search-icon.png);
    -webkit-mask-size: 24px 24px;
    mask-size: 24px 24px;
    background-color: #222;
    display: inline-block;
    vertical-align: top;
    margin-top: 3px;
    margin-left: -3px;
    width: 17px;
    height: 17px;
    -webkit-mask-size: 17px 17px;
    mask-size: 17px 17px;
    content: '';
    margin-left: 10px;
}
.mapCustom{
    padding: 0.4rem 0;
}

.map_wrap, .map_wrap * {margin:0;padding:0;font-family:'Malgun Gothic',dotum,'돋움',sans-serif;font-size:12px;}
.map_wrap a, .map_wrap a:hover, .map_wrap a:active{color:#000;text-decoration: none;}
.map_wrap {position:relative;width:100%;/*height:500px;*/}
#menu_wrap {
    display: none;
    position: absolute;
    top: 225px;
    left: 0;
    bottom: 0;
    height: 43%;
    width: 100%;
    /* margin: 10px 0 30px 10px; */
    padding: 5px;
    overflow-y: auto;
    background: rgba(255, 255, 255, 0.7);
    z-index: 1;
    font-size: 12px;
    border-radius: 10px;
}
.bg_white {background:#fff;}
#menu_wrap hr {display: block; height: 1px;border: 0; border-top: 2px solid #5F5F5F;margin:3px 0;}
#menu_wrap .option{text-align: center;}
#menu_wrap .option p {margin:10px 0;}  
#menu_wrap .option button {margin-left:5px;}
#placesList li {list-style: none;}
#placesList .item {position:relative;border-bottom:1px solid #888;overflow: hidden;cursor: pointer;min-height: 65px;}
#placesList .item span {display: block;margin-top:4px;}
#placesList .item h5, #placesList .item .info {text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
#placesList .item .info{padding:10px 0 10px 55px;}
#placesList .info .gray {color:#8a8a8a;}
#placesList .info .jibun {padding-left:26px;background:url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_jibun.png) no-repeat;}
#placesList .info .tel {color:#009900;}
#placesList .item .markerbg {float:left;position:absolute;width:36px; height:37px;margin:10px 0 0 10px;background:url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png) no-repeat;}
#placesList .item .marker_1 {background-position: 0 -10px;}
#placesList .item .marker_2 {background-position: 0 -56px;}
#placesList .item .marker_3 {background-position: 0 -102px}
#placesList .item .marker_4 {background-position: 0 -148px;}
#placesList .item .marker_5 {background-position: 0 -194px;}
#placesList .item .marker_6 {background-position: 0 -240px;}
#placesList .item .marker_7 {background-position: 0 -286px;}
#placesList .item .marker_8 {background-position: 0 -332px;}
#placesList .item .marker_9 {background-position: 0 -378px;}
#placesList .item .marker_10 {background-position: 0 -423px;}
#placesList .item .marker_11 {background-position: 0 -470px;}
#placesList .item .marker_12 {background-position: 0 -516px;}
#placesList .item .marker_13 {background-position: 0 -562px;}
#placesList .item .marker_14 {background-position: 0 -608px;}
#placesList .item .marker_15 {background-position: 0 -654px;}
#pagination {margin:10px auto;text-align: center;}
#pagination a {display:inline-block;margin-right:10px;}
#pagination .on {font-weight: bold; cursor: default;color:#777;}
</style>