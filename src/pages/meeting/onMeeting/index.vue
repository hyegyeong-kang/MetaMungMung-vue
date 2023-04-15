<template>
    <div class="services_section layout_padding">
        <div class="container">
            <MeetingHeader @send-type="sendType" :isMain="isMain" :showLocation="true"/>
            <hr>
            <MyOnMeetingList v-if="isMain"/>
            <OnMeetingCategory v-else :key="categoryKey"/>
            <hr>
            <OnMeetingList @send-type="sendType" :isMain="isMain" :isSearch="isSearch" />
        </div>
    </div>
</template>

<script>
import {ref, watchEffect} from 'vue';
import {useRoute} from 'vue-router';
import MeetingHeader from '../../../components/meeting/onMeeting/OnMeetingHeader.vue';
import MyOnMeetingList from '../../../components/meeting/onMeeting/MyOnMeetingList.vue'
import OnMeetingList from '../../../components/meeting/onMeeting/OnMeetingList.vue'
import OnMeetingCategory from '../../../components/meeting/onMeeting/OnMeetingCategory.vue';

export default {
    components: {
        MyOnMeetingList,
        OnMeetingList,
        OnMeetingCategory,
        MeetingHeader
    },
    setup(){
        const route = useRoute();
        const isMain = ref(true);
        const isSearch = ref(false);
        const categoryKey = ref(0);

        watchEffect(() => {
            if(route.query.keywords != null){
                isMain.value = false;
                isSearch.value = true;
            }
        });

        const sendType = (type) => {
            console.log("부모가 받았어!");
            console.log(type);
            if(type === 'viewAll'){
                isMain.value = false;
                isSearch.value = false;
            } else if(type === 'search'){
                isMain.value = false;
                isSearch.value = true;
            } else{
                isMain.value = true;
                isSearch.value = false;
            }
            forceRender();
        }

        const forceRender = () => {
            categoryKey.value += 1;
        }

        return{
            isMain,
            isSearch,
            categoryKey,
            sendType,
            forceRender
        }
    }
}
</script>

<style>

</style>