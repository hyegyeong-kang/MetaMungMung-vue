<template>
  <button @click="modalOpen">Modal</button>

  <div class="modal-wrap" v-show="modalCheck">
    <div class="modal-container">
      ...
      <!--  모달창 content  -->

      <div class="modal-btn">
        <button @click="modalOpen">닫기</button>
        <button @click="modalOpen">확인</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalCheck: false,
    };
  },
  setup() {
    console.log("열렸니?");
  },
  methods: {
    modalOpen() {
      this.modalCheck = !this.modalCheck;
    },
  },
};
</script>

<style scoped>
/* Modal */
.modal,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100000;
}
.overlay {
  opacity: 0.5;
  background-color: black;
}
.modal-card {
  position: relative;
  max-width: 80%;
  margin: auto;
  margin-top: 30px;
  padding: 20px;
  background-color: white;
  min-height: 500px;
  z-index: 10;
  opacity: 1;
}
</style>
