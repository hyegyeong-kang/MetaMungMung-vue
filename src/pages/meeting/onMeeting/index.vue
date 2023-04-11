<template>
    <div class="services_section layout_padding">
        <div class="container">
            <MyOnMeetingList/>
            <OnMeetingList/>
        </div>
    </div>
</template>

<script>
import MyOnMeetingList from '../../../components/meeting/onMeeting/MyOnMeetingList.vue'
import OnMeetingList from '../../../components/meeting/onMeeting/OnMeetingList.vue'

export default {
    components: {
        MyOnMeetingList,
        OnMeetingList
    }
}
</script>

<style>

</style>