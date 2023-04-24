<template>
    <div class="services_section layout_padding">
        <div class="container">
            <OnMeetingHeader :showLocation="false"/>
            <hr>
            <CreateOnMeeting/>
        </div>
    </div>
</template>

<script>
import CreateOnMeeting from '../../../../components/meeting/onMeeting/CreateOnMeeting.vue';
import OnMeetingHeader from '../../../../components/meeting/onMeeting/OnMeetingHeader.vue';
import { onMounted } from 'vue';

export default {
    components: {
        CreateOnMeeting,
        OnMeetingHeader
    },
    setup(){
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
            checkFunc
        }
    }
}
</script>

<style>

</style>