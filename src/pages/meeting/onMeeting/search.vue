<template>
    <div class="services_section layout_padding">
        <div class="container">
            <MeetingHeader/>
            <hr>
            <OnMeetingCategory/>
            <hr>
            <OnMeetingList @send-type="sendType" :isMain="false" :isShowMore="false" />
        </div>
    </div>
</template>

<script>
import {useRoute} from 'vue-router';
import {ref} from 'vue';
import MeetingHeader from '../../../components/meeting/onMeeting/OnMeetingHeader.vue';
import OnMeetingList from '../../../components/meeting/onMeeting/OnMeetingList.vue';
import OnMeetingCategory from '../../../components/meeting/onMeeting/OnMeetingCategory.vue';

export default {
    components: {
        MeetingHeader,
        OnMeetingList,
        OnMeetingCategory
    },
    setup(){
        const route = useRoute();
        const type = ref('');

        const sendType = () => {
            // type.value = pageType;
            // console.log("ㅇ " + type.value);
            console.log("아");
        }

        // const print = () => {
        //     console.log(route.query.keyword);
        // }
        // print();
        
        return {
            sendType
        }
    }
}
</script>

<style>

</style>