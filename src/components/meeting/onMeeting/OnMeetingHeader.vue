<template>
    <div class="pageHeader">
        <router-link :to="{name: 'OnMeeting'}" @click="moveToPage"><div class="pageTitle">모임</div></router-link>
        <SearchLocationBtn/>
        <OnMeetingSearchBar @send-type="sendType"/>
    </div>
</template>

<script>
import SearchLocationBtn from './SearchLocationBtn.vue'
import OnMeetingSearchBar from './OnMeetingSearchBar.vue'
import {useRouter} from 'vue-router'
import {ref} from 'vue';

export default {
    components: {
        SearchLocationBtn,
        OnMeetingSearchBar
    },
    setup(props, {emit}){
        const router = useRouter();

        const sendType = () => {
            emit('send-type', 'search');
        }

        const moveToPage = () => {
            emit('send-type');
        }

        return{
            sendType,
            moveToPage
        }
    }
}
</script>

<style>
.pageTitle{
    font-weight: 900;
    font-size: 40px;
    margin: 0;
    float: left;
    color: black;
}
.pageHeader {
    position: relative;
    /* display: -webkit-box; */
    /* display: flex; */
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    max-width: 1034px;
    height: 70px;
    margin: 0 0 35px 0;
}
</style>