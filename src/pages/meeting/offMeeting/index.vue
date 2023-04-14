<template>
  <!-- map section start -->
  <div class="services_section layout_padding">
    <div class="container">
      <h1 class="services_taital" style="margin-bottom: 20px">
        <span>Our</span>
        <img
          src="@/assets/images/offMeeting/paw-print.png"
          style="width: 70px"
        />
        <span style="color: #1f1f1f">OffMeeting</span>
      </h1>
      <KakaoMap />
    </div>
  </div>
  <!-- map section start -->
</template>

<script>
import KakaoMap from "@/components/meeting/offMeeting/KakaoMap.vue";
export default {
  name: "Service",
  components: {
    KakaoMap,
  },
  setup() {},
};
</script>

<style scoped>
@import "@/assets/css/meeting/offMeeting/kakaomap.css";
@import "@/assets/css/meeting/offMeeting/off-meeting-modal.css";
</style>
