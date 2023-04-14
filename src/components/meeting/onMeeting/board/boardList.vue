<template>
  <div class="onMeeting">
    <!--  글쓰기 영역 -->
    <div class="writeWrap" data-uiselector="postWriteRegion">
      <div
        data-viewname="DPostFakeEditorView"
        class="cPostWrite gContentCardShadow"
      >
        <h3 class="gSrOnly">글쓰기</h3>
        <button type="button" class="cPostWriteEventWrapper _btnOpenWriteLayer">
          <span class="gSrOnly">글쓰기</span>
        </button>
      </div>
      <div class="postWriteForm -standby">
        <div class="contentEditor">새로운 소식을 남겨보세요.</div>
      </div>
    </div>

    <!--게시글 등록 버튼 -->
    <div>
      <button
        id="register_btn"
        @click="openModal"
        style="background-color: transparent"
      >
        게시글작성버튼
      </button>
    </div>
    <div class="registerModal">
      <RegisterModal @close="closeModal" v-if="modal" />
    </div>
  </div>
</template>

<script>
import RegisterModal from "@/components/meeting/onMeeting/board/registerModal/registerModal.vue";

export default {
  name: "BoardList",
  components: {
    RegisterModal,
  },
  data() {
    return {
      modal: false,
      content: "",
    };
  },
  mounted() {
    // let base = this;
    // base.openIt = this.$refs.registerModal.openDetailModalFunc;
  },
  methods: {
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
  },
};
</script>

<style scoped>
.groupBandSearchWrap {
  position: relative;
  margin-bottom: 12px;
  z-index: 1000;
}
.boardList > .writeWrap {
  margin-bottom: 11px;
}
.cPostWrite {
  position: relative;
  padding-bottom: 46px;
}
.boardList > .writeWrap {
  margin-bottom: 11px;
}
.cPostWrite .cPostWriteEventWrapper {
  z-index: 100;
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  bottom: 46px;
  width: 100%;
  background: var(--tier2SurfaceLayer01);
  opacity: 0;
}

.cPostWrite .postWriteForm {
  position: relative;
  overflow: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.cPostWrite .buttonArea {
  z-index: 200;
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 43px;
  padding: 0 13px 0 15px;
}

.gContentCardShadow {
  background-color: var(--tier2SurfaceLayer01);
  -webkit-box-shadow: var(--gContentCardShadow);
  box-shadow: var(--gContentCardShadow);
}
</style>
