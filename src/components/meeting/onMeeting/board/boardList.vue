<template>
    <div class="onMeeting">
        <div>
            <button id="register_btn" @click="modalOpen = true" style="background-color: transparent;">게시글작성버튼</button>
        </div>
        <div class="registerModal" v-if="modalOpen == true">
            <RegisterModal/>
        </div>
    </div>
</template>

<script>
import RegisterModal from '@/components/meeting/onMeeting/board/registerModal/registerModal.vue';


export default {
    name: 'BoardList',
    components: {
        RegisterModal
    },
    data() {

        return {
            modalOpen: false,
            content: ''
        }
    },
    mounted() {

    },
    methods: {

    }

}
</script>

<style>

</style>