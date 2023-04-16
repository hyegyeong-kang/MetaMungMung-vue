<template>
  <!--새로나온 친구들 리스트-->
  <div class="con prod-list hot-stuff">
    <nav class="prod-list-1">
      <div class="prod-list-title">멍멍스토어 상품들</div>
      <ul class="row" v-for="product in productList" :key="product.productIdx">
        <li
          style="margin-top: 30px"
          @click="moveToDetailPage(product.productIdx)"
          class="cell"
        >
          <div class="img-box">
            <span><img :src="product.productImg" alt="" class="img1" /></span>
          </div>
          <!-- <div :productIdx="productIdx">{{ product.productIdx }}</div> -->
          <div class="title">{{ product.productName }}</div>
          <div class="price">{{ product.price }}원<span></span></div>
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
              src="https://images-dev.wefluffy.co.kr/product-option/8888/modify_detail_029.webp"
              alt=""
              class="img1"
          /></span>
        </div>
        <div class="title">도라에몽 하네스 S</div>
        <div class="price"><span>18,700원</span></div>
      </li>
      <li class="cell">
        <div class="img-box">
          <span
            ><img
              src="https://images-dev.wefluffy.co.kr/product-option/4839/modify_detail_051.webp"
              alt=""
              class="img2"
          /></span>
        </div>
        <div class="title">매쉬 하네스(브라운)L</div>
        <div class="price"><span>19,000원</span></div>
      </li>
      <li class="cell">
        <div class="img-box">
          <span
            ><img
              src="https://shopping-phinf.pstatic.net/main_8284201/82842012334.jpg?type=f300"
              alt=""
              class="img3"
          /></span>
        </div>
        <div class="title">강아지 슬링백</div>
        <div class="price"><span>29,500원</span></div>
      </li>
      <li class="cell">
        <div class="img-box">
          <span
            ><img
              src="https://shopping-phinf.pstatic.net/main_8483522/84835221258.jpg?type=f300"
              alt=""
              class="img4"
          /></span>
        </div>
        <div class="title">포그니 강아지 이동가방</div>
        <div class="price"><span>89,000원</span></div>
      </li>
      <li class="cell">
        <div class="img-box">
          <span
            ><img
              src="https://images-dev.wefluffy.co.kr/product-option/1794/addgoods_7jik66as7kea64sqide0ca%253d%253d.webp"
              alt=""
              class="img5"
          /></span>
        </div>
        <div class="title">건강한 덴탈껌 오리지널</div>
        <div class="price"><span>40,20원</span></div>
      </li>
      <li class="cell">
        <div class="img-box">
          <span
            ><img
              src="https://images-dev.wefluffy.co.kr/product-option/8183/1000011243_detail_020.webp"
              alt=""
              class="img6"
          /></span>
        </div>
        <div class="title">동결건조 큐브 오징어</div>
        <div class="price"><span>18,000원</span></div>
      </li>
      <li class="cell">
        <div class="img-box">
          <span
            ><img
              src="https://images-dev.wefluffy.co.kr/product-option/8509/1000011455_detail_273.webp"
              alt=""
              class="img7"
          /></span>
        </div>
        <div class="title">메타멍스</div>
        <div class="price"><span>1,600원</span></div>
      </li>
      <li class="cell">
        <div class="img-box">
          <span
            ><img
              src="https://images-dev.wefluffy.co.kr/product-option/6333/1000010672_detail_058.webp"
              alt=""
              class="img8"
          /></span>
        </div>
        <div class="title">띵커바우츄 오리 딩고껌</div>
        <div class="price"><span>9,870원</span></div>
      </li>
    </ul>
  </div>

  <!--카드-->
  <div class="card-box con text-align-center">
    <ul class="row">
      <li class="cell">
        <a href="#">
          <div class="text">강아지 <br />패션트렌드</div>
          <img
            id="product-card"
            src="@/assets/images/store/product/dog-card-3.jpg"
            alt=""
          />
        </a>
      </li>
      <li class="cell">
        <a href="#">
          <div class="text">산책할 때 <br />필요한 건?</div>
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
          <div class="text">간식 충전할 <br />시간이에요</div>
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
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  props: {
    isMain: Boolean,
    isSearch: Boolean,
  },
  emits: ["send-type"],
  setup(props, { emit }) {
    const router = useRouter();
    const productIdx = ref(0);

    const productList = ref([
      {
        productIdx: 1,
        category: "사료",
        productName: "프로플랜 센서티브 스킨 앤 스토막 어덜트",
        brand: "퓨리나",
        price: 87000,
        productImg:
          "https://images-dev.wefluffy.co.kr/product-option/1192/modify_detail_056.webp",
        productDetail:
          "프로플랜 센서티브 스킨 앤 스토막 어덜트프로플랜 센서티브 스킨 앤 스토막 어덜트",
        volume: "12kg",
      },
      {
        productIdx: 2,
        category: "간식",
        productName: "울트라 그레인프리 닭고기",
        brand: "내추럴발란스",
        price: 142400,
        productImg:
          "https://images-dev.wefluffy.co.kr/product-option/1234/1000010255_detail_034.webp",
        productDetail:
          "울트라 그레인프리 닭고기울트라 그레인프리 닭고기울트라 그레인프리 닭고기",
        volume: "13.6kg",
      },
      {
        productIdx: 3,
        category: "사료",
        productName: "스페셜 특수견 프로",
        brand: "제일사료",
        price: 29200,
        productImg:
          "https://images-dev.wefluffy.co.kr/product-option/1143/register_detail_095.webp",
        productDetail:
          "스페셜 특수견 프로스페셜 특수견 프로스페셜 특수견 프로스페셜 특수견 프로스페셜 특수견 프로",
        volume: "15kg",
      },
      {
        productIdx: 4,
        category: "사료",
        productName: "LID 고구마&연어 알러지 포뮬라",
        brand: "내추럴발란스",
        price: 82600,
        productImg:
          "https://images.pet-high.com/product-option/1204/natural_balance2.webp",
        productDetail:
          "LID 고구마&연어 알러지 포뮬라LID 고구마&연어 알러지 포뮬라LID 고구마&연어 알러지 포뮬라",
        volume: "3kg",
      },
      {
        productIdx: 5,
        category: "장난감",
        productName: "후각놀이 킁킁볼",
        brand: "시소플레이",
        price: 13500,
        productImg:
          "https://images-dev.wefluffy.co.kr/product-option/2618/modify_detail_128.webp",
        productDetail: "후각놀이 킁킁볼후각놀이 킁킁볼후각놀이 킁킁볼",
        volume: "-",
      },
      {
        productIdx: 6,
        category: "장난감",
        productName: "멍도날드 후각놀이 매트",
        brand: "시소플레이",
        price: 19300,
        productImg:
          "https://images-dev.wefluffy.co.kr/product-option/2619/modify_detail_180.webp",
        productDetail:
          "멍도날드 후각놀이 매트멍도날드 후각놀이 매트멍도날드 후각놀이 매트",
        volume: "-",
      },
      {
        productIdx: 7,
        category: "장난감",
        productName: "개코볼 노즈워크 강아지 장난감 강아지공",
        brand: "독톡",
        price: 23400,
        productImg:
          "https://shopping-phinf.pstatic.net/main_8303605/83036053704.jpg?type=f300",
        productDetail:
          "개코볼 노즈워크 강아지 장난감 강아지공개코볼 노즈워크 강아지 장난감 강아지공개코볼 노즈워크 강아지 장난감 강아지공",
        volume: "-",
      },
      {
        productIdx: 8,
        category: "장난감",
        productName: "얼레벌레 애벌레 터그 장난감",
        brand: "바잇미",
        price: 12900,
        productImg:
          "https://shop-phinf.pstatic.net/20230414_7/1681454943916lVMSV_JPEG/42415862824398183_1730661470.jpg?type=f300",
        productDetail:
          "얼레벌레 애벌레 터그 장난감얼레벌레 애벌레 터그 장난감얼레벌레 애벌레 터그 장난감",
        volume: "-",
      },
    ]);

    const moveToDetailPage = (productIdx) => {
      console.log(productIdx);

      router.push({
        name: "ProductDetail",
        prarams: { id: productIdx },
      });
    };

    const removeHideFunc = () => {
      document.getElementById("ulId").classList.remove("hide");
      document.getElementById("spanId").remove();
    };

    return {
      moveToDetailPage,
      removeHideFunc,
      productList,
      productIdx,
    };
  },
};
</script>

<style></style>
