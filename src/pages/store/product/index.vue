<template>
  <div class="services_section layout_padding">
    <div class="container">
      <ProductHeader @send-type="sendType" :isMain="isMain" />
      <ProductCategory />
      <ProductList
        @send-type="sendType"
        :isMain="isMain"
        :isSearch="isSearch"
      />
    </div>
  </div>
</template>

<script>
import ProductHeader from "@/components/store/product/ProductHeader.vue";
import ProductCategory from "@/components/store/product/ProductCategory.vue";
import ProductList from "@/components/store/product/ProductList.vue";
import { ref, onMounted } from "vue";

export default {
  components: {
    ProductHeader,
    ProductCategory,
    ProductList,
  },
  setup() {
    const isMain = ref(true);
    const isSearch = ref(false);

    const sendType = (type) => {
      console.log("부모가 받암ㅆ더!");
      console.log(type);

      if (type === "search") {
        isMain.value = false;
        isSearch.value = true;
      }
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
      sendType,
      isMain,
      isSearch,
    };
  },
};
</script>

<style scoped>
@import "@/assets/css/store/product/list/product-list.css";
</style>
