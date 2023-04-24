<template>
    <div class="services_section layout_padding">
        <div class="container">
            <OnMeetingHeader :showLocation="false"/>
            <hr>
            <CreateOnMeeting :status="status"/>
        </div>
    </div>
</template>

<script>
import CreateOnMeeting from '../../../../components/meeting/onMeeting/CreateOnMeeting.vue';
import OnMeetingHeader from '../../../../components/meeting/onMeeting/OnMeetingHeader.vue';
import {ref, onMounted} from 'vue';

export default {
    components: {
        CreateOnMeeting,
        OnMeetingHeader
    },
    setup(){
        const status = ref('modify');

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
            status,
            checkFunc
        }
    }
}
</script>

<style>

</style>