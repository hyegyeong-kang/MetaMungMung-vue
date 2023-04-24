// 모임 설정 페이지
<template>
    <div class="services_section layout_padding">
      <div class="container">
        <OnMeetingSetting v-if="!withDrawal" @member-withdrawal="memberWithdrawal"/>
        <OnMeetingMemWithdrawal v-else/>
      </div>
    </div>
</template>

<script>
import OnMeetingSetting from '@/components/meeting/onMeeting/OnMeetingSetting.vue';
import OnMeetingMemWithdrawal from '../../../../components/meeting/onMeeting/OnMeetingMemWithdrawal.vue';
import {ref, onMounted} from 'vue';

export default {
    components: {
        OnMeetingSetting,
        OnMeetingMemWithdrawal
    },
    setup () {
      const withDrawal = ref(false);
      const memberWithdrawal = (isClick) => {
        withDrawal.value = isClick;
      }

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

      return{
        withDrawal,
        memberWithdrawal,
        checkFunc
      }
    }
}
</script>
