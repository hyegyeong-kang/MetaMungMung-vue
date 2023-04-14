<template>
  <div class="services_section layout_padding">
    <div class="container">
      <h1 class="services_taital">
        <span>스토어</span>
        <img
          src="@/assets/images/offMeeting/paw-print.png"
          style="width: 70px"
        />
        <span style="color: #1f1f1f">멍멍스토어</span>
      </h1>

      <ProductCategory />

      <!--새로나온 친구들 리스트-->
      <div class="con prod-list hot-stuff">
        <nav class="prod-list-1">
          <div class="prod-list-title">멍멍스토어 상품들</div>
          <ul class="row">
            <li class="cell">
              <div class="img-box">
                <span
                  >prod-img-1<img
                    src="https://images-dev.wefluffy.co.kr/product-option/1192/modify_detail_056.webp"
                    alt=""
                    class="img1"
                /></span>
              </div>
              <div class="title">
                프로플랜 센서티브 스킨 앤 스토막 어덜트 12kg
              </div>
              <div class="price"><span>87,000원</span></div>
            </li>
            <li class="cell">
              <div class="img-box">
                <span
                  >prod-img-2<img
                    src="https://img1.daumcdn.net/thumb/R300x300/?fname=https%3A%2F%2Ft1.daumcdn.net%2Ffriends%2Fprod%2Fproduct%2FFRPBRYCAR8400_AW_00.jpg"
                    alt=""
                    class="img2"
                /></span>
              </div>
              <div class="title">차량용 거치대_라이언</div>
              <div class="price"><span>19,000원</span></div>
            </li>
            <li class="cell">
              <div class="img-box">
                <span
                  >prod-img-3<img
                    src="https://img1.daumcdn.net/thumb/R300x300/?fname=https%3A%2F%2Ft1.daumcdn.net%2Ffriends%2Fprod%2Fproduct%2F8809641461544_AW_00.jpg"
                    alt=""
                    class="img3"
                /></span>
              </div>
              <div class="title">메모리폼 목베개-리틀 어피치</div>
              <div class="price"><span>24,000원</span></div>
            </li>
            <li class="cell">
              <div class="img-box">
                <span
                  >prod-img-4<img
                    src="https://img1.daumcdn.net/thumb/R300x300/?fname=https%3A%2F%2Ft1.daumcdn.net%2Ffriends%2Fprod%2Fproduct%2FAW_00_shade_TB.jpg"
                    alt=""
                    class="img4"
                /></span>
              </div>
              <div class="title">페이스형안대-리틀 튜브</div>
              <div class="price"><span>12,000원</span></div>
            </li>
            <li class="cell">
              <div class="img-box">
                <span
                  >prod-img-5<img
                    src="https://img1.daumcdn.net/thumb/R300x300/?fname=https%3A%2F%2Ft1.daumcdn.net%2Ffriends%2Fprod%2Fproduct%2FAW_00_littleRY_case.jpg"
                    alt=""
                    class="img5"
                /></span>
              </div>
              <div class="title">에어팟케이스_리틀라이언</div>
              <div class="price"><span>15,000원</span></div>
            </li>
            <li class="cell">
              <div class="img-box">
                <span
                  >prod-img-6<img
                    src="https://img1.daumcdn.net/thumb/R300x300/?fname=https%3A%2F%2Ft1.daumcdn.net%2Ffriends%2Fprod%2Fproduct%2FFRPBRYHTL0001_AW_00.jpg"
                    alt=""
                    class="img6"
                /></span>
              </div>
              <div class="title">핸드타올_별라이언</div>
              <div class="price"><span>69,000원</span></div>
            </li>
            <li class="cell">
              <div class="img-box">
                <span
                  >prod-img-7<img
                    src="https://img1.daumcdn.net/thumb/R300x300/?fname=https%3A%2F%2Ft1.daumcdn.net%2Ffriends%2Fprod%2Fproduct%2FAW_00_neckRY.jpg"
                    alt=""
                    class="img7"
                /></span>
              </div>
              <div class="title">후드 목베개-리틀라이언</div>
              <div class="price"><span>24,000원</span></div>
            </li>
            <li class="cell">
              <div class="img-box">
                <span
                  >prod-img-8<img
                    src="https://img1.daumcdn.net/thumb/R300x300/?fname=https%3A%2F%2Ft1.daumcdn.net%2Ffriends%2Fprod%2Fproduct%2FAW_01_passport_AP.jpg"
                    alt=""
                    class="img8"
                /></span>
              </div>
              <div class="title">투명여권지갑_리틀 어피치</div>
              <div class="price"><span>8,000원</span></div>
            </li>
          </ul>
        </nav>
        <span
          id="spanId"
          @click="removeHideFunc"
          style="margin-top: 50px"
          class="more-prod hide"
          >상품 더 보기</span
        >
        <ul id="ulId" class="row prod-list-1-2 hide">
          <li class="cell">
            <div class="img-box">
              <span
                ><img
                  src="https://img1.daumcdn.net/thumb/R300x300/?fname=https%3A%2F%2Ft1.daumcdn.net%2Ffriends%2Fprod%2Fproduct%2FFRPBAPCAR8401_AW_00.jpg"
                  alt=""
                  class="img1"
              /></span>
            </div>
            <div class="title">차량용 급속충전기_어피치</div>
            <div class="price"><span>20,000원</span></div>
          </li>
          <li class="cell">
            <div class="img-box">
              <span
                ><img
                  src="https://img1.daumcdn.net/thumb/R300x300/?fname=https%3A%2F%2Ft1.daumcdn.net%2Ffriends%2Fprod%2Fproduct%2FFRPBRYCAR8400_AW_00.jpg"
                  alt=""
                  class="img2"
              /></span>
            </div>
            <div class="title">차량용 거치대_라이언</div>
            <div class="price"><span>19,000원</span></div>
          </li>
          <li class="cell">
            <div class="img-box">
              <span
                ><img
                  src="https://img1.daumcdn.net/thumb/R300x300/?fname=https%3A%2F%2Ft1.daumcdn.net%2Ffriends%2Fprod%2Fproduct%2F8809641461544_AW_00.jpg"
                  alt=""
                  class="img3"
              /></span>
            </div>
            <div class="title">메모리폼 목베개-리틀 어피치</div>
            <div class="price"><span>24,000원</span></div>
          </li>
          <li class="cell">
            <div class="img-box">
              <span
                ><img
                  src="https://img1.daumcdn.net/thumb/R300x300/?fname=https%3A%2F%2Ft1.daumcdn.net%2Ffriends%2Fprod%2Fproduct%2FAW_00_shade_TB.jpg"
                  alt=""
                  class="img4"
              /></span>
            </div>
            <div class="title">페이스형안대-리틀 튜브</div>
            <div class="price"><span>12,000원</span></div>
          </li>
          <li class="cell">
            <div class="img-box">
              <span
                ><img
                  src="https://img1.daumcdn.net/thumb/R300x300/?fname=https%3A%2F%2Ft1.daumcdn.net%2Ffriends%2Fprod%2Fproduct%2FAW_00_littleRY_case.jpg"
                  alt=""
                  class="img5"
              /></span>
            </div>
            <div class="title">에어팟케이스_리틀라이언</div>
            <div class="price"><span>15,000원</span></div>
          </li>
          <li class="cell">
            <div class="img-box">
              <span
                ><img
                  src="https://img1.daumcdn.net/thumb/R300x300/?fname=https%3A%2F%2Ft1.daumcdn.net%2Ffriends%2Fprod%2Fproduct%2FFRPBRYHTL0001_AW_00.jpg"
                  alt=""
                  class="img6"
              /></span>
            </div>
            <div class="title">핸드타올_별라이언</div>
            <div class="price"><span>69,000원</span></div>
          </li>
          <li class="cell">
            <div class="img-box">
              <span
                ><img
                  src="https://img1.daumcdn.net/thumb/R300x300/?fname=https%3A%2F%2Ft1.daumcdn.net%2Ffriends%2Fprod%2Fproduct%2FAW_00_neckRY.jpg"
                  alt=""
                  class="img7"
              /></span>
            </div>
            <div class="title">후드 목베개-리틀라이언</div>
            <div class="price"><span>24,000원</span></div>
          </li>
          <li class="cell">
            <div class="img-box">
              <span
                ><img
                  src="https://img1.daumcdn.net/thumb/R300x300/?fname=https%3A%2F%2Ft1.daumcdn.net%2Ffriends%2Fprod%2Fproduct%2FAW_01_passport_AP.jpg"
                  alt=""
                  class="img8"
              /></span>
            </div>
            <div class="title">투명여권지갑_리틀 어피치</div>
            <div class="price"><span>8,000원</span></div>
          </li>
        </ul>
      </div>

      <!--카드-->
      <div class="card-box con text-align-center">
        <ul class="row">
          <li class="cell">
            <a href="#">
              <div class="text">충전할 <br />시간이에요</div>
              <img
                id="product-card"
                src="@/assets/images/store/product/dog-card-3.jpg"
                alt=""
              />
            </a>
          </li>
          <li class="cell">
            <a href="#">
              <div class="text">달콤한 <br />3분 디저트</div>
              <img
                id="product-card"
                src="@/assets/images/store/product/dog-card-2.png"
                alt=""
              />
            </a>
          </li>
          <li class="cell">
            <a href="#">
              <div class="text">스마트함을 <br />더하는 인싸템</div>
              <img
                id="product-card"
                src="@/assets/images/store/product/dog-card-1.png"
                alt=""
              />
            </a>
          </li>
          <li class="cell">
            <a href="#">
              <div class="text">충전할 <br />시간이에요</div>
              <img
                id="product-card"
                src="@/assets/images/store/product/dog-card-8.jpg"
                alt=""
              />
            </a>
          </li>
        </ul>
        <!--어피치 리스트-->
        <div class="con prod-list hot-stuff">
          <nav class="prod-list-1">
            <a href="" class="prod-list-bn relative">
              <div class="top-text">강아지 MBTI<br />DBTI 하러가기!</div>
              <!-- <div class="bottom-text">잔망둥이 어피치가 한 곳에!</br>어피치를 '픽'해보아요</!br></div> -->
              <div class="img-box">
                <img
                  src="https://t1.daumcdn.net/friends/prod/theme/themeAPEACH_PC.png"
                  alt=""
                />
              </div>
            </a>
          </nav>
        </div>
      </div>

      <!--모바일 풋터 메뉴-->
      <div class="mobile-footer mobile">
        <h3>혹시, 아직 못정했나요?</h3>
        <nav class="footer-menu">
          <ul class="row">
            <li class="cell"><a href="#">전체</a></li>
            <li class="cell"><a href="#">사료</a></li>
            <li class="cell"><a href="#">간식 & 건강</a></li>
            <li class="cell"><a href="#">위생 & 배변</a></li>
            <li class="cell"><a href="#">미용 & 목욕</a></li>
            <li class="cell"><a href="#">의류 & 악세사리</a></li>
            <li class="cell"><a href="#">장난감</a></li>
            <li class="cell"><a href="#">홈으로...</a></li>
          </ul>
        </nav>
      </div>

      <div class="scrollbar" id="style-1">
        <div class="force-overflow"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from "@/pages/store/product/index.vue";
import ProductCategory from "@/components/store/product/ProductCategory.vue";
import { onMounted } from "vue";

export default {
  name: "ProductList",
  components: {
    ProductList,
    ProductCategory,
  },
  setup() {
    const removeHideFunc = () => {
      document.getElementById("ulId").classList.remove("hide");
      document.getElementById("spanId").remove();
    };

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
      removeHideFunc,
    };
  },
};
</script>

<style scoped>
@import "@/assets/css/store/product/list/product-list.css";
</style>
