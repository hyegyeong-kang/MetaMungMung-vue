<template>
    <div class="services_section layout_padding">
        <div class="container">
            <OnMeetingHeader @send-type="sendType" :isMain="isMain" :showLocation="true" @send-location="sendLocation"/>
            <hr>
            <MyOnMeetingList v-if="isMain" />
            <OnMeetingCategory v-else :key="categoryKey" :isViewAll="isViewAll"  @select-cate="selectCate"/>
            <hr>
            <OnMeetingList @send-type="sendType" :isMain="isMain" :isSearch="isSearch" :addr="addr" :cate="cate"/>
        </div>
    </div>
</template>

<script>
import {ref, onMounted} from 'vue';
import OnMeetingHeader from '../../../components/meeting/onMeeting/OnMeetingHeader.vue';
import MyOnMeetingList from '../../../components/meeting/onMeeting/MyOnMeetingList.vue'
import OnMeetingList from '../../../components/meeting/onMeeting/OnMeetingList.vue'
import OnMeetingCategory from '../../../components/meeting/onMeeting/OnMeetingCategory.vue';

export default {
    components: {
        MyOnMeetingList,
        OnMeetingList,
        OnMeetingCategory,
        OnMeetingHeader
    },
    setup(){
        const isMain = ref(true);
        const isSearch = ref(false);
        const isViewAll = ref(false);
        const categoryKey = ref(0);
        const addr = ref('');
        const cate = ref('전체');

        const sendLocation = (location) => {
            addr.value = location;
        }

        const selectCate = (category) => {

            cate.value = category;
        }

        const sendType = (type) => {
            console.log("부모가 받았어!");
            console.log(type);
            if(type === 'viewAll'){
                isMain.value = false;
                isSearch.value = false;
                isViewAll.value = true;
            } else if(type === 'search'){
                isMain.value = false;
                isSearch.value = true;
                isViewAll.value = false;
            // }
            } else{
                isMain.value = true;
                isSearch.value = false;
                isViewAll.value = false;
            }
            forceRender();
        }

        const forceRender = () => {
            categoryKey.value += 1;
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
            isMain,
            isSearch,
            isViewAll,
            categoryKey,
            addr,
            cate,
            sendLocation,
            selectCate,
            sendType,
            forceRender,
            checkFunc
        }
    }
}
</script>

<style>

</style>