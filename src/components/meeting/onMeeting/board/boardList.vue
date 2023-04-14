<template>
    <div class="onMeeting">
        <div>
            <button id="register_btn" @click="openModal" style="background-color: transparent;">게시글작성버튼</button>
        </div>
        <div class="registerModal">
            <RegisterModal
                @close="closeModal" v-if="modal"
            />
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
            modal: false,
            content: ''
        }
    },
    mounted() {

        // let base = this;
        // base.openIt = this.$refs.registerModal.openDetailModalFunc;

    },
    methods: {
        openModal() {
            this.modal = true
        },
        closeModal() {
            this.modal = false
        }
    }

}
</script>

<style>
.groupBandSearchWrap {
    position: relative;
    margin-bottom: 12px;
    z-index: 1000;
}
.boardList>.writeWrap {
    margin-bottom: 11px;
}
.cPostWrite {
    position: relative;
    padding-bottom: 46px;
}
</style>