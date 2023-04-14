<template>
    <div class="services_section layout_padding">
      <div class="container">
        <BoardList/>
      </div>
    </div>
</template>

<script>
import BoardList from '@/components/meeting/onMeeting/board/boardList-codepen.vue'
export default {
  name: 'Service',
  components: {
    BoardList
  },
  setup () {
  }
}
</script>
