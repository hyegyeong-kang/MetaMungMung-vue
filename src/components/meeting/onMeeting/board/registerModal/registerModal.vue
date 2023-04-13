<template>
  <div class="post-form">
    <h2>글쓰기</h2>
    <form @submit.prevent="submitPost">
      <div class="form-group">
        <label for="content">내용</label>
        <textarea class="form-control" id="content" v-model="post.content" required></textarea>
      </div>
      <button type="submit" class="btn-file btn-primary">파일업로드</button>
      <button type="submit" class="btn-map btn-primary" @click="modalOpen = true">지도</button>
      <button type="submit" class="btn btn-primary">게시</button>

      <div class="mapModal" v-if="modalOpen == true">
        <MapModal/>
      </div>
    </form>
  </div>
</template>

<script>
import MapModal from '@/components/meeting/onMeeting/board/registerModal/mapModal.vue';

export default {
  components: {
    MapModal
  },
  data() {
    return {
      modalOpen: false,
      post: {
        title: '',
        content: '',
        author: ''
      }
    }
  },
  methods: {
    submitPost() {
      // 게시판 글쓰기 로직
      // this.post 객체를 서버로 전송하는 코드 작성
    }
  }
}
</script>

<style>
textarea{
	width:500px; 
	height:100px; 
    resize:none;/* 크기고정 */ 
/*   resize: horizontal; // 가로크기만 조절가능 
	resize: vertical;  세로크기만 조절가능  */
}
</style>