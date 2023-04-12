<template>
    <div class="pageHeader">
        <div class="pageTitle">모임</div>
        <SearchLocationBtn/>
        <OnMeetingSearchBar/>
    </div>
</template>

<script>
import SearchLocationBtn from './SearchLocationBtn.vue'
import OnMeetingSearchBar from './OnMeetingSearchBar.vue'

export default {
    components: {
        SearchLocationBtn,
        OnMeetingSearchBar
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
    height: 50px;
    margin: 0 0 35px 0;
}
</style>