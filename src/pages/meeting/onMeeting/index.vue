<template>
    <div class="services_section layout_padding">
        <div class="container">
            <MeetingHeader/>
            <hr>
            <MyOnMeetingList/>
            <hr>
            <OnMeetingList/>
        </div>
    </div>
</template>

<script>
import MeetingHeader from '../../../components/meeting/onMeeting/MeetingHeader.vue';
import MyOnMeetingList from '../../../components/meeting/onMeeting/MyOnMeetingList.vue'
import OnMeetingList from '../../../components/meeting/onMeeting/OnMeetingList.vue'

export default {
    components: {
        MyOnMeetingList,
        OnMeetingList,
        MeetingHeader
    }
}
</script>

<style>

</style>