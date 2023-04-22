<template>
  <div class="services_section layout_padding">
      <div class="container">
        <BoardList v-if="isPublic"/>
        <JoinOnMeeting v-if="!isPublic"/>
      </div>
    </div>
</template>

<script>
import BoardList from '@/components/meeting/onMeeting/board/boardList.vue';
import JoinOnMeeting from '../../../components/meeting/onMeeting/JoinOnMeeting.vue';
import {ref, watchEffect} from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

export default {
  components: {
    BoardList,
    JoinOnMeeting
  },
  setup(){
    axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('token');
    const memberIdx = sessionStorage.getItem('memberIdx');

    const route = useRoute();
    const isPublic = ref(false);

    const judgment = async () => {
      try{
          const res = await axios.get('/onMeetings');
          // myOnMeetings.value = {...res.data.myList};
          let myOnMeetings = res.data.myList;
          console.log(res.data.myList);
          for(let i = 0; i < Object.keys(myOnMeetings).length; i++){
            console.log("meet.onMeetingIdx : "+ myOnMeetings[i].onMeetingIdx);
            console.log("route.params.id: "+ route.params.id);
            if(route.params.id == myOnMeetings[i].onMeetingIdx){
              isPublic.value = true;
              break;
            }
          }
      } catch(err){
          console.log(err);
      }
    }
    judgment();


    return{
      isPublic
    }
  }
}
</script>

<style>

</style>