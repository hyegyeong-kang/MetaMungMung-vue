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
      <!--일반-->
      <div class="bn-line"></div>
      <div class="top-line"></div>

      <ProductCategory />

      <div class="shCMSshop">
        <div class="shopView">
          <div class="viewHeader">
            <!-- 상품이미지 -->
            <div class="productImg">
              <!-- <img v-bind:src="productDetail.img_url" alt="" /> -->
            </div>
            <!-- 상품 설명 -->
            <div class="productInfo">
              <h3>ggg</h3>
              <div class="price">
                <span class="sale">20<span>%</span></span>
                <span class="cost-price">15,000원</span>
                <span class="sale-price">9,000원</span>
              </div>
              <div class="manufact">제조사 <span>cj</span></div>
              <div class="categori">분류 <span>기타</span></div>
              <div class="origin">
                원산지 <span>각 재료 별 원산지는 상세설명 참조</span>
              </div>
              <div class="items">
                <h3>
                  <div class="num">
                    <span>수량 </span>
                    <span class="count">
                      <a v-on:click="count--" href="#" class="minus"> - </a>
                      <span id="result"> 24,000 </span>
                      <a v-on:click="count++" href="#" class="plus"> + </a>
                    </span>
                  </div>
                </h3>
              </div>
              <div class="all-price">총 상품금액 <span> 24,000 </span>원</div>
              <div class="btn">
                <a href="">장바구니</a>
                <a href="">구매하기</a>
              </div>
            </div>
          </div>
          <!-- 하단의 탭부분 시작 -->
          <div class="viewBody">
            <ul class="contentNav">
              <li class="active"><a href="">상품 정보</a></li>
              <!-- <li><a href="">상품 후기<span>(<span class="count">20</span>)</span></a></li> -->
              <!-- <li><router-link to="/products/reviews">상품 후기<span>(<span class="count">20</span>)</span></router-link></li> -->
              <li @click="moveToProductReviewsPage(productDetail.p_id)">
                <a
                  >상품 후기<span>(<span class="count">20</span>)</span></a
                >
              </li>
              <li>
                <a href="">Q & A <span></span></a>
              </li>
              <li><a href="">반품 / 교환</a></li>
            </ul>
            <!-- 탭부분 끝 -->
            <!-- 상품정보 -->
            <table class="tproduct-info active">
              <tr>
                <td>제품명</td>
                <td>배고파?</td>
                <td>식품의 유형</td>
                <td>기타</td>
              </tr>
              <tr>
                <td>제조사</td>
                <td>일단밥을먹어</td>
                <td>배송타입</td>
                <td>뇸뇸뇸</td>
              </tr>
              <tr>
                <td>제조년월일</td>
                <td>제조일로부터 일주일이내 포장된 제품으로 발송됩니다.</td>
                <td>품질유지기한</td>
                <td>제조일로부터 120일</td>
              </tr>
            </table>
            <!-- 상품 후기 -->
            <table class="tproduct-review">
              <thead>
                <tr>
                  <td>평점</td>
                  <td>내용</td>
                  <td>작성자</td>
                  <td>작성일</td>
                </tr>
              </thead>
              <tr>
                <td>별점</td>
                <td class="tcontent">
                  <img src="" alt="" /><span
                    >내용 - 짧은 내용(동해물과 백두산이 마르고 닳도록 하느님이
                    보우하사 우리나라만세</span
                  >
                </td>
                <td>rud***</td>
                <td>2017-09-26 10:20</td>
              </tr>
              <tr class="detail-content">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>별점</td>
                <td class="tcontent">
                  <img src="" alt="" /><span
                    >내용 - 짧ㅁㄴㅇㄻㄴㅇㄻㄴ은 내용(동해물과 백두산이 마르고
                    닳도록 블라불라블라
                  </span>
                </td>
                <td>rud***</td>
                <td>2017-09-26 10:20</td>
              </tr>
              <tr class="detail-content">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>별점</td>
                <td class="tcontent">
                  <img src="" alt="" /><span
                    >내용 - 짧은 내용(동해물과 백두산이 마르고 닳도록
                  </span>
                </td>
                <td>rud***</td>
                <td>2017-09-26 10:20</td>
              </tr>
              <tr class="detail-content">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
            <!-- Q & A  -->
            <table class="tquestion">
              <thead>
                <tr>
                  <td>번호</td>
                  <td colspan="2">내용</td>
                  <td>작성자</td>
                  <td>
                    작성일
                    <a href="">문의 하기</a>
                  </td>
                </tr>
              </thead>
              <tr>
                <td>글번호</td>
                <td class="answer-no">미완료</td>
                <td class="tcontent">내용 - 문의</td>
                <td>rud***</td>
                <td>2017-09-26 10:20</td>
              </tr>
              <tr>
                <td>글번호</td>
                <td class="answer-ok">답변완료</td>
                <td class="tcontent">내용 - 문의</td>
                <td>rud***</td>
                <td>2017-09-26 10:20</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCategory from "@/components/store/product/ProductCategory.vue";
import { onMounted } from "vue";
export default {
  components: {
    ProductCategory,
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
@import "@/assets/css/store/product/list/product-list.css";
@import "@/assets/css/store/product/detail/product-detail.css";
</style>
