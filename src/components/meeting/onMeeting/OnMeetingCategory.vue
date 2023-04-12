<template>
    <div data-viewname="DGlobalSearchBandSubTabNavView" class="bandListWrap">
        <div class="wide -w840">
            <div class="searchedSortBand">
                
                <a href="/discover/search/강아지" class="sortButton _btnTabNav active" data-id="1" :class="{active: isActive}" @click="cateToggle">전체</a>
                
                <a href="/discover/band-search/강아지" class="sortButton _btnTabNav " data-id="2" :class="{active: isActive}" @click="cateToggle">밴드</a>
                
                <a href="/discover/band-search/강아지?bandSearchFilter=local_only" class="sortButton _btnTabNav " data-id="3" :class="{active: isActive}" @click="cateToggle">지역 소모임</a>
                
                <a href="/discover/band-search/강아지?bandSearchFilter=mission_only" class="sortButton _btnTabNav " data-id="4" :class="{active: isActive}" @click="cateToggle">미션밴드</a>
                
                <a href="/discover/page-search/강아지" class="sortButton _btnTabNav " data-id="5">페이지</a>
                
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue';

export default {
    setup(){
        const isActive = ref(false);
        const cateToggle = () => {

        }

        return {
            cateToggle
        }
    }
}
</script>

<style scoped>
.bandListWrap {
    position: relative;
    text-align: center;
}
.wide.-w840 {
    width: 840px;
}
.wide {
    width: 1034px;
    margin: 0 auto;
}
.-w840 {
    width: 840px!important;
}
.searchedSortBand {
    text-align: left;
    padding: 16px 0 14px;
}
.searchedSortBand .sortButton.-active {
    font-size: 13px;
    font-weight: 600;
    color: #444;
    background: #e9eaea;
}
.searchedSortBand .sortButton {
    display: inline-block;
    border-radius: 14px;
    padding: 0 12px 0 11px;
    height: 28px;
    line-height: 28px;
    font-size: 13px;
    font-weight: 400;
    color: #888;
}
.searchedSortBand .sortButton {
    display: inline-block;
    border-radius: 14px;
    padding: 0 12px 0 11px;
    height: 28px;
    line-height: 28px;
    font-size: 13px;
    font-weight: 400;
    color: #888;
}
</style>