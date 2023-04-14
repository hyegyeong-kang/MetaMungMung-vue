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

      <!-- 카테고리 -->
      <ProductCategory />

      <!--새로나온 친구들 리스트-->
      <div class="con prod-list hot-stuff">
        <nav class="prod-list-1">
          <div class="prod-list-title"></div>
          <ul class="row">
            <li class="cell">
              <a href="/products/1">
                <div class="img-box">
                  <span
                    ><img
                      src="https://img1.daumcdn.net/thumb/R300x300/?fname=https%3A%2F%2Ft1.daumcdn.net%2Ffriends%2Fprod%2Fproduct%2FFRPBAPCAR8401_AW_00.jpg"
                      alt=""
                      class="img1"
                  /></span>
                </div>
              </a>
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
                    src="https://img1.daumcdn.net/thumb/R300x300/?fname=https%3A%2F%2Ft1.daumcdn.net%2Ffriends%2Fprod%2Fproduct%2FFRPBAPCAR8401_AW_00.jpg"
                    alt=""
                    class="img4"
                /></span>
              </div>
              <div class="title">페이스형안대-리틀 튜브</div>
              <div class="price"><span>12,000원</span></div>
            </li>
          </ul>
        </nav>
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
</style>
