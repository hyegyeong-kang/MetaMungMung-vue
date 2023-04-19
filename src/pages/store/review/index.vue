<template>
  <div class="services_section layout_padding">
    <ReviewHeader :productIdx="productIdx" />
    <div class="container">
      <div id="app">
        <label>제목</label>
        <input title="title" type="text" v-model="title" /><br />
        <label>내용</label>
        <textarea title="content" v-model="content"></textarea>

        <button v-on:click="[addReview(), checkContentLength()]">
          리뷰등록
        </button>

        <div v-for="review in reviewList" :key="review.title" class="review">
          <div class="review-memberImg">
            <img v-bind:src="review.memberImg" />
          </div>

          <div class="review-box">
            <div class="review-author">
              <p>
                <strong>{{ review.title }}</strong> -
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                - {{ review.writer }}
              </p>
            </div>
            <div class="review-comment">
              <p>{{ review.content }}</p>
            </div>

            <div class="review-date">
              <time>{{ review.reviewDate }}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReviewHeader from "@/components/store/product/ReviewHeader.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  components: {
    ReviewHeader,
  },
  setup() {
    const route = useRoute();

    const productIdx = ref(0);
    const content = ref("");
    const title = ref("");
    const memberImg = ref(
      "https://i.pinimg.com/474x/d7/70/33/d7703333ad8ba85827b60fccf42f9c25.jpg"
    );
    const writer = ref("");
    const reviewDate = ref("");

    const reviewList = ref([
      {
        title: "또 시킬래요..",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat magna ut dui egestas, in varius diam ultricies. Phasellus suscipit magna id arcu auctor, nec vulputate dolor elementum.",
        memberImg:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ1shBdJ7nUA44VMTPv0-ceFSfSHk_L7ViMw&usqp=CAU",
        writer: "개죽이",
        reviewDate: "2023-04-20",
      },
      {
        title: "진짜 잘먹어요!",
        content:
          "Minhas cadeiras chegaram no prazo e super bem embaladas!!! Além das cadeiras serem lindas, os preços são ótimos! Indico, com certeza!",
        memberImg:
          "https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/holapet/20210525081724428qquq.jpg",
        writer: "밍망",
        reviewDate: "2023-04-20",
      },
    ]);

    const checkContentLength = () => {
      if (content.value.length > 65) {
        const newContent =
          content.value.substring(0, 65) + "\n" + content.value.substring(65);
        content.value = newContent;
      }
    };

    const addReview = () => {
      reviewList.value.push({
        title: title.value,
        writer: writer.value,
        memberImg: memberImg.value,
        content: content.value,
        reviewDate: reviewDate.value,
      }),
        (title.value = ""),
        (writer.value = ""),
        (content.value = "");
    };

    productIdx.value = route.params.id;

    return {
      addReview,
      checkContentLength,
      content,
      title,
      memberImg,
      writer,
      reviewList,
      productIdx,
      reviewDate,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.header {
  width: 100%;
  font-size: 2em;
  text-align: center;
  background: #34495e;
  color: #fff;
  padding: 0.5em;
}
body {
  max-width: 1024px;
  margin: 20px auto;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
}
img {
  max-width: 100%;
  display: block;
}
p {
  margin: 0;
}
.fa.fa-star {
  color: #fec902;
}
label {
  width: 15%;
  margin: 10px 1% 0 0;
  display: inline-block;
  float: left;
}
input[type="text"] {
  width: 84%;
  margin: 10px 0;
  height: 40px;
  border: none;
  background: #f6f6f6;
  padding: 1em;
}
textarea {
  width: 84%;
  border: none;
  background: #f6f6f6;
  margin: 10px 0;
  height: 100px;
  padding: 1em;
}
button {
  float: right;
  width: 20%;
  height: 40px;
  border: none;
  background: #2ecc71;
  font-size: 16px;
  color: white;
}
.review {
  width: 100%;
  display: inline-block;
  margin: 10px 0;
}
.review-memberImg {
  height: 80px;
  width: 80px;
  object-fit: cover;
  display: inline-block;
  float: left;
  margin-right: 3em;
}
.review-box {
  float: left;
  display: inline-block;
  width: 87.5%;
  background: #f6f6f6;
  padding: 1.5em;
  position: relative;
}
.review-box:after,
.review-box:before {
  right: 100%;
  top: 10%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.review-box:after {
  border-right-color: #f6f6f6;
  border-width: 25px;
}
.review-comment {
  color: #9a9999;
}
.review-date {
  color: #c7c7c7;
}
.review-author {
  color: #c7c7c7;
}
.review-author strong {
  color: black;
}
</style>
