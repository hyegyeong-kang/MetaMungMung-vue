<template>
    <div class="services_section layout_padding">
      <div class="container">
        <h1>On 모임 보드리스트 화면입니다.</h1>
        <BoardList/>
      </div>
    </div>
</template>

<script>
import BoardList from '@/components/meeting/onMeeting/board/boardList.vue'
export default {
  name: 'Service',
  components: {
    BoardList
  },
  setup () {
  }
}
</script>
