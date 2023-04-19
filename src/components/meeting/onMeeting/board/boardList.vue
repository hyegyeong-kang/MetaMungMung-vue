<template>
  <div id="modal">
    <header>
      <h2>Customize your view</h2>
    </header>
    <main>
      <p>Background</p>
      <div class="radio-buttons">
        <label class="light">
          <input
            type="radio"
            checked
            name="background-option"
            data-theme="light"
          />
          <span>Light</span>
          <span class="border"></span>
        </label>
        <label class="dim">
          <input type="radio" name="background-option" data-theme="dim" />
          <span>Dim</span>
          <span class="border"></span>
        </label>
        <label class="dark">
          <input type="radio" name="background-option" data-theme="dark" />
          <span>Dark</span>
          <span class="border"></span>
        </label>
      </div>
      <p>Navigation style</p>
      <div class="radio-buttons">
        <label class="nav-style">
          <input type="radio" name="nav-style" data-nav="opened" />
          <span>Opened</span>
          <span class="border"></span>
        </label>
        <label class="nav-style">
          <input type="radio" checked name="nav-style" data-nav="closed" />
          <span>Closed</span>
          <span class="border"></span>
        </label>
      </div>
    </main>
  </div>
  <div id="modal-overlay"></div>

  <div id="more-popout-overlay"></div>
  <div id="more-popout" class="nav-closed">
    <div class="nav-item">
      <div class="icon-container">

      </div>
      <div class="nav-text">
        <p>Ian | Gibbu</p>
        <span>@Gibbu_</span>
      </div>
    </div>
    <div class="nav-item">
      <div class="icon-container">
        <i class="fas fa-bolt"></i>
      </div>
      <div class="nav-text">
        <p>Moments</p>
      </div>
    </div>
    <div class="nav-item">
      <div class="icon-container">
        <i class="fas fa-chart-bar"></i>
      </div>
      <div class="nav-text">
        <p>Twitter ADS</p>
      </div>
    </div>
    <div class="nav-item">
      <div class="icon-container">
        <i class="fas fa-cog"></i>
      </div>
      <div class="nav-text">
        <p>Settings & privacy</p>
      </div>
    </div>
    <div class="nav-item">
      <div class="icon-container">
        <i class="fas fa-question-circle"></i>
      </div>
      <div class="nav-text">
        <p>Help Center</p>
      </div>
    </div>
    <div class="nav-item display">
      <div class="icon-container">
        <i class="fas fa-palette"></i>
      </div>
      <div class="nav-text">
        <p>Display</p>
      </div>
    </div>
    <div class="nav-item logout">
      <div class="icon-container">
        <i class="fas fa-sign-out-alt"></i>
      </div>
      <div class="nav-text">
        <p>Logout</p>
      </div>
    </div>
  </div>

  <!-- <nav class="nav-closed">
	<div class="nav-item home" aria-label="Home" data-balloon-pos="right" data-balloon-blunt>
		<div class="icon-container">
			<i class="fab fa-twitter"></i>
		</div>
		<div class="nav-text">
			<p>Home</p>
		</div>
	</div>
	<div class="nav-item" aria-label="Explore" data-balloon-pos="right" data-balloon-blunt>
		<div class="icon-container">
			<i class="fas fa-hashtag"></i>
		</div>
		<div class="nav-text">
			<p>Explore</p>
		</div>
	</div>
	<div class="nav-item" aria-label="Notifications" data-balloon-pos="right" data-balloon-blunt>
		<div class="icon-container">
			<i class="fas fa-bell"></i>
		</div>
		<div class="nav-text">
			<p>Notifications</p>
		</div>
	</div>
	<div class="nav-item" aria-label="Messages" data-balloon-pos="right" data-balloon-blunt>
		<div class="icon-container">
			<i class="fas fa-envelope"></i>
		</div>
		<div class="nav-text">
			<p>Messages</p>
		</div>
	</div>
	<div class="nav-item" aria-label="Bookmarks" data-balloon-pos="right" data-balloon-blunt>
		<div class="icon-container">
			<i class="fas fa-bookmark"></i>
		</div>
		<div class="nav-text">
			<p>Bookmarks</p>
		</div>
	</div>
	<div class="nav-item" aria-label="Profile" data-balloon-pos="right" data-balloon-blunt>
		<div class="icon-container">
			<img src="https://pbs.twimg.com/profile_images/1153329245248053248/xONN2R7u_400x400.png">
		</div>
		<div class="nav-text">
			<p>Profile</p>
		</div>
	</div>
	<button class="nav-item" aria-label="More" data-balloon-pos="right" data-balloon-blunt>
		<span class="icon-container">
			<i class="fas fa-ellipsis-h"></i>
		</span>
		<p>More</p>
	</button>
</nav> -->

  <header class="nav-closed" style="background:#afd9ee">
    <div class="wrapper" style="margin-left: 20px">
      <div class="top">
        <img
          :src=onMeetingInfo.thumbnail
        />
        <div class="user">
          <h2 style="color: white">{{ onMeetingInfo.onMeetName }}</h2>
        </div>
      </div>
      <div class="bottom">
        <a href="#">
          <p>총 게시글</p>
          <h3 style="color: white;text-align:center;">{{ boardCnt }}</h3>
        </a>
        <a href="#">
          <p>멤버</p>
          <h3 style="color: white;text-align:center;">{{ registerMemsCnt }}</h3>
        </a>
      </div>
    </div>
  </header>

  <div id="container" class="wrapper nav-closed">
    <div id="timeline">
      <!-- 게시물 글 작성하는 곳  -->
      <div class="new-tweet" style="border: 1px solid;border-radius: 2em;color:	#C0C0C0">
        <textarea placeholder="새로운 소식을 남겨보세요." v-model="inputText"></textarea>
        <div class="registerModal">
          <!-- <RegisterModal @close="closeRegisterModal" v-if="registerModal" /> -->
        </div>
        <div class="btns">
          <div class="btn">
            <button>
              <img
                src="@/assets/images/onMeeting/upload-file-icon.png"
                alt=""
              />
            </button>
          </div>
          <div class="btn">
            <button @click="toggleMap">
              <img
                src="@/assets/images/onMeeting/map-icon2.png"
                alt=""
                width="25"
                height="25"
              />
            </button>
            <!-- <MapModal ref="map" @close="closeMapModal" /> -->
            <MapModal v-if="isOpen" @close-req="toggleMap" @send-addr="sendAddr" />
          </div>
          <div class="btn">
            <button @click="postData">게시</button>
          </div>
        </div>
      </div>


        


      <!--게시물 올라오는 곳 --> <!--이게 반복되면 되는 것임!! -->
      <!-- 이거 클릭하면 해당 게시물 디테일 나오면 됨..--> 
      <div class="tweet" v-for="(board, index) in boards" :key="index">
        <div class="left">
          <img
            src=board.onMeetingMember.memberImg
          />
        </div>
        <div class="right">
          <div class="info">
            <p><strong>{{ board.writer }}</strong></p>
            <time>11m</time>
          </div>
          <div class="message" @click="openBoardModal">
            <p>{{ board.contents }}</p>
            <img
              src="https://img.dogpre.com/web/dogpre/event/popular_keyword_theme/43_pc_main_page_banner_0036.jpg"
            />
          </div>
          <div class="btns">
            <button class="blue" type="button">
              <img
                src="@/assets/images/onMeeting/reply-icon.png"
                height="20"
                width="20"
                style="margin-right: 10px"
              />2(댓글 갯수)
            </button>
          </div>
                <div>
                    <ReplyList/>
                </div>
                <div>
                    <CreateReply/>  
                </div>
         </div>
          <BoardDetail ref="boardDetail" @close="closeBoardModal" />
        </div>
        <!-- 하나의 트윗이 끝나는 곳-->

        

        <footer>
            <!-- <i class="fab fa-twitter"></i>
            <button>Load More!!!</button> -->
        </footer>
    </div>
    <div id="right">
      <div class="search-container" style="border: 1px solid;border-radius: 2em;color:	#C0C0C0">
        <div class="search-input">
                <img src="@/assets/images/onMeeting/search-icon.png">
				<input id="search" type="search" placeholder="글 내용 검색" autocomplete="off">
				<!-- <i class="fas fa-search"></i> -->
		</div>
        <div class="search-results">
          <div class="result">
            <p>youtube</p>
          </div>
          <div class="result">
            <p>youtuber dog</p>
          </div>
          <div class="result">
            <p>youtube music</p>
          </div>
          <hr />
          <div class="result">

            <div class="right">
              <p>YouTube Gaming</p>
              <span>@YouTubeGaming</span>
            </div>
          </div>
          <div class="result">

            <div class="right">
              <p>YouTube</p>
              <span>@YouTube</span>
            </div>
          </div>
          <div class="result">

            <div class="right">
              <p>YouTube Creators</p>
              <span>@YTCreators</span>
            </div>
          </div>
          <div class="result">

            <div class="right">
              <p>YouTube TV</p>
              <span>@youtubemusic</span>
            </div>
          </div>
          <div class="result">
 
            <div class="right">
              <p>YouTube Music</p>
              <span>@youtubemusic</span>
            </div>
          </div>
          <hr />
          <div class="result">
            <p>Go to @YouTube</p>
          </div>
        </div>
      </div>
      <section>
        <header>
          <h3>{{ onMeetingInfo.onMeetName }}</h3>
        </header>
        <main>
          <a href="#" class="trend">
            <div class="trend">
              <p>{{ onMeetingInfo.introduction }}</p>
            </div>
          </a>
          <hr>
          <p align="right" style="font-size:13px"><img src="@/assets/images/onMeeting/setting.png" style="width:15px;height:15px;margin-right:10px;">모임 설정</p>
        </main>
      </section>
      <section>
        <header>
          <h3>모임 멤버</h3>
          <a href="#">View All</a>
        </header>
        <main>
          <a href="#" v-for="(member, index) in registerMems" :key="index">
            <!--여기서 카페 멤버 반복으로 돌려주면 됨 -->
            <img
              src=member.memberList[0].memberImg
            />
            <div class="user">
              <p>{{ member.memberList[0].memberName }}</p>
              <!-- <span>강아지를 사랑합니다.</span> -->
            </div>
          </a>
        </main>
      </section>
    </div>
  </div>
</template>

<script>
//import RegisterModal from '@/components/meeting/onMeeting/board/registerModal/registerModal.vue';
import MapModal from "@/components/meeting/onMeeting/board/modal/mapModal.vue";
import ReplyList from "@/components/meeting/onMeeting/board/reply/replyList.vue";
import CreateReply from "@/components/meeting/onMeeting/board/reply/createReply.vue";
import BoardDetail from "@/components/meeting/onMeeting/board/boardDetailModal.vue";
import { ref } from 'vue';
import axios from 'axios';


export default {
  name: "BoardList",
  components: {
    //RegisterModal,
    MapModal,
    ReplyList,
    CreateReply,
    BoardDetail,
  },
  data() {
    return {
      mapModal: false,
      boardModal: false,
      registerModal: false,
      openBoardModal: null,
    };
  },
  methods: {
    openMapModal() {
      this.mapModal = true;
    },
    closeMapModal() {
      this.mapModal = false;
    },
    openBoardModal() {
        base.openBoardModal();
    //     console.log("###")
    //   this.boardModal = true;
    },
    closeBoardModal() {
      this.boardModal = false;
    },
    openRegisterModal() {
      this.registerModal = true;
    },
    closeRegisterModal() {
      this.registerModal = false;
    },
  },
  mounted() {
      let base = this;
     // base.openBoardModal = this.$refs.boardDetail.openBoardModalFunc;
     // base.openMapModal = this.$refs.map.openMapModalFunc;

     // console.log(`!!! ${base.openMapModal}`);

  },
  setup() {
    const isOpen = ref(false);
    const onMeetingInfo = ref([]);

    const toggleMap = () => {
      console.log("KANG!!!")
            isOpen.value = !isOpen.value;
            // emit('toggle-modal', isOpen.value);
        }

    const sendAddr = (addr) => {
            address.value = addr;
        }


    const boards = ref([]);
    const boardCnt = ref(0);
    // 게시물 출력
    const getBoardList = async() => {

      await axios.get('/onMeetings/1/board', {})
        .then((response) => {

          boards.value = {...response.data[0].boardList};
          onMeetingInfo.value = {...response.data[0]};

          boardCnt.value = Object.keys(boards.value).length;

        })
        .catch ((error) => {
          console.log(`BOARD ERR ${error}`);
        });

    };

    getBoardList();



    const registerMems = ref([]);
    const registerMemsCnt = ref(0); 
    // 전체 가입멤버 출력
    const getOnMeetingMembers = async() => {

      await axios.get('/onMeetings/1/board/members', {})
        .then((response) => {
          console.log(`REGISTER MEM: ${JSON.stringify(response.data, null, 2)}`);
          //console.log(`REGISTER MEM222222: ${JSON.stringify(response.data[0], null, 2)}`);
          registerMems.value = {...response.data}
          
          registerMemsCnt.value = Object.keys(registerMems.value).length;

        })
        .catch ((error) => {
          console.log(`getOnMeetingMembers ERR ${error}`)
        })
    };
    getOnMeetingMembers();


    // 게시물 등록 버튼 눌렀을 떄
    const inputText = ref(''); 
    console.log(`+++++ ${JSON.stringify(registerMems.value, null, 2)}`);
  
    const postData = async() => {

      console.log(`asasdsads ${inputText.value}`);

      const data = {

        contents: inputText.value
      };

      await axios.post('/onMeetings/1/board', data)
        .then((response) => {
          console.log(`POST RESPONSE: ${response}`);

        })
        .catch((error) => {
          console.log(`POST DATE ERR: ${error}`);
        })
    };



    return {
      isOpen,
      toggleMap,
      sendAddr,
      getBoardList,
      boards,
      boardCnt,
      onMeetingInfo,
      getOnMeetingMembers,
      registerMems,
      registerMemsCnt,
      inputText,
      postData,
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800|Roboto:300,400,500,700");
* {
  outline-width: 0 !important;
  font-family: "Roboto";
}
body,
html {
  padding: 0;
  margin: 0;
}

body > header.nav-closed {
  margin-left: 64px;
}
body > header {
  background: url(https://source.unsplash.com/2560x1440/daily) center/cover;
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 250px;
}

$nav: 64px;
$blue: #03a9f4;
$green: #4caf50;
$red: #ff2f20;
$bgImage: "https://app-storage-edge-003.cafe24.com/bannermanage2/woohua/2020/01/03/9ef96bbacc205f6a2b825e7fa0025b2d.jpg";

:root {
  --bg1: #e5e5e5;
  --bg2: #eee;
  --bg3: #fff;

  --color: #000;
}

#modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 12;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s ease;
  background: var(--bg3);
  width: 550px;
  overflow: hidden;
  border-radius: 5px;
  header {
    border-bottom: 1px solid var(--bg2);
    padding: 15px;
    box-sizing: border-box;
    h2 {
      margin: 0;
      font-weight: 400;
      color: var(--color);
    }
  }
  main {
    padding: 15px;
    box-sizing: border-box;
    overflow-y: auto;
    > p {
      margin: 0 0 5px 0;
      color: var(--color);
    }
    .radio-buttons {
      display: flex;
      grid-gap: 15px;
      background: rgb(31, 39, 48);
      padding: 15px;
      box-sizing: border-box;
      label {
        flex: 1;
        display: flex;
        justify-content: center;
        cursor: pointer;
        position: relative;
        padding: 20px 0;
        span {
          color: #fff;
          display: block;
        }
        input {
          display: none;
          &:checked ~ .border {
            box-shadow: inset 0 0 0 2px $blue;
          }
        }
        .border {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          user-select: none;
          pointer-events: none;
        }
        &.light {
          background: #fff;
          span {
            color: #000;
          }
        }
        &.dim {
          background: #15202b;
        }
        &.dark {
          background: #111;
        }
        &.nav-style {
          background: var(--bg3);
          span {
            color: var(--color);
          }
        }
      }
    }
  }
  &.toggle {
    opacity: 1;
    visibility: visible;
  }
}
#modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  visibility: hidden;
  transition: 0.2s ease;
  z-index: 11;
  &.toggle {
    opacity: 1;
    visibility: visible;
  }
}

#more-popout-overlay {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  visibility: hidden;
  opacity: 0;
  transition: 0.2s ease;
  &.toggle {
    opacity: 1;
    visibility: visible;
  }
}
#more-popout {
  position: fixed;
  width: 250px;
  left: -1px;
  background: var(--bg3);
  height: 100%;
  z-index: 10;
  border-left: 1px solid var(--bg2);
  transition: 0.2s ease;
  .nav-item:first-of-type {
    border-bottom: 1px solid var(--bg2);
    .nav-text span {
      opacity: 0.5;
      font-size: 12px;
      display: block;
    }
  }
  &.nav-closed {
    left: -187px;
    &.toggle {
      left: 64px;
    }
  }
  &.toggle {
    left: 250px;
    &.nav-closed {
      left: 64px;
    }
  }
}

.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
  padding-left: 250px;
  &.nav-closed {
    padding-left: $nav;
  }
}

body {
  background: var(--bg1);
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: $nav;
  background: var(--bg3);
  height: 100vh;
  z-index: 10;
  &.nav-closed {
    width: $nav;
    .nav-item p {
      display: none;
    }
  }
}

.nav-item {
  width: 100%;
  height: $nav;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: var(--color);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  user-select: none;
  &.home {
    border-bottom: 1px solid var(--bg2);
    color: $blue;
  }
  .icon-container {
    width: $nav;
    height: $nav;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  i {
    font-size: 18px;
  }
  img {
    width: 32px;
    height: 32px;
    display: block;
    border-radius: 50%;
  }
  p {
    margin: 0;
    font-size: 16px;
  }
  &:hover {
    background: var(--bg2);
  }
  &.logout {
    color: $red !important;
  }
}

header.nav-closed {
  background: url($bgImage) center/cover;
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 250px;
  .wrapper {
    position: relative;
    padding-left: 0;
  }
  .top {
    display: flex;
    align-items: center;
    margin: 30px 0;
    img {
      width: 72px;
      height: 72px;
      display: block;
      border-radius: 50%;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
    .user {
      margin-left: 15px;
      color: #fff;
      text-shadow: 0 2px 5px rgba(0, 0, 0, 1);
      h2 {
        margin: 0;
        font-weight: 400;
      }
      p {
        margin: 0;
        opacity: 0.5;
      }
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      color: #fff;
      padding: 0 5px 10px;
      margin-right: 15px;
      text-shadow: 0 2px 5px rgba(0, 0, 0, 1);
      p {
        margin: 0;
        font-size: 14px;
        opacity: 0.5;
      }
      h3 {
        margin: 0;
        font-weight: 400;
      }
      &:hover {
        box-shadow: inset 0 -4px 0 #fff;
      }
    }
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 125px;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.6) 90%);
  }
  &.nav-closed {
    margin-left: $nav;
  }
}

#container {
  display: grid;
  grid-template-columns: 650px auto;
  grid-gap: 20px;
  align-items: flex-start;
  margin: 20px auto 50px;
}
#timeline {
  background: var(--bg3);
  border-radius: 5px;
  overflow: hidden;
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 0;
    border-top: 1px solid var(--bg2);
    i {
      margin-bottom: 10px;
      color: var(--color);
    }
    button {
      background: transparent;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      font-weight: 600;
      border-radius: 5px;
      color: var(--color);
      &:hover {
        background: var(--bg2);
      }
    }
  }
}
.new-tweet {
  textarea {
    border: none;
    width: 100%;
    resize: none;
    padding: 15px;
    height: auto;
    box-sizing: border-box;
    height: 200px;
    cursor: pointer;
    color: var(--color);
    background: var(--bg3);
    &:focus,
    &:not(:placeholder-shown) {
      height: 200px;
      cursor: text;
    //   ~ .btns {
    //     height: 100%;
    //     padding: 0 15px 15px;
    //   }
    }
  }
  .btns {
    padding: 0 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    overflow: visible;
    height: 0;
    .btn {
      margin-right: 10px;
      button {
        margin-bottom: 50px;
        padding: 0;
        padding: 0;
        display: block;
        width: 32px;
        height: 32px;
        background: transparent;
        border: none;
        cursor: pointer;
        border-radius: 50%;
        color: var(--color);
        &:hover {
          background: var(--bg2);
        }
      }
      &:last-child {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        margin-right: 0;
        button {
          width: auto;
          border-radius: 3px;
          padding: 0 10px;
          background: #87cefa;
          color: #fff;
          &:hover {
            background: darken($blue, 3%);
          }
          i {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
.tweet {
  border-top: 1px solid var(--bg2);
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  .left {
    margin-right: 15px;
    img {
      width: 42px;
      height: 42px;
      display: block;
      object-fit: cover;
      border-radius: 50%;
      user-select: none;
    }
  }
  .right {
    width: 100%;
    .info {
      display: flex;
      align-items: center;
      color: var(--color);
      margin-bottom: 5px;
      p {
        margin: 0;
        display: flex;
        align-items: center;
        span {
          margin: 0 10px;
          font-size: 12px;
          opacity: 0.5;
        }
      }
      time {
        display: flex;
        align-items: center;
        font-size: 12px;
        opacity: 0.5;
        &:before {
          content: "";
          height: 2px;
          width: 2px;
          margin-right: 10px;
          border-radius: 50%;
          background: var(--color);
        }
      }
    }
    .message {
      p {
        margin: 0;
        color: var(--color);
        line-height: 20px;
      }
      img {
        display: block;
        width: 100%;
        border-radius: 5px;
        margin-top: 10px;
      }
    }
    .btns {
      margin-top: 15px;
      display: flex;
      align-items: center;
      button {
        background: transparent;
        border: none;
        padding: 0;
        display: flex;
        align-items: center;
        margin-right: 15px;
        cursor: pointer;
        color: var(--color);
        font-size: 12px;
        i {
          width: 32px;
          height: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          margin-right: 5px;
          font-size: 16px;
        }
        &.blue:hover {
          i {
            background: rgba($blue, 0.1);
          }
          color: $blue;
        }
        &.green:hover {
          i {
            background: rgba($green, 0.1);
          }
          color: $green;
        }
        &.red:hover {
          i {
            background: rgba($red, 0.1);
          }
          color: $red;
        }
      }
    }
  }
  &:hover {
    background: var(--bg2);
  }
}
.iframe-container {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  border-radius: 5px;
  display: block;
  margin-top: 10px;
  iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}

.search-container {
  margin-bottom: 20px;
  .search-input {
    width: 100%;
    position: relative;
    input {
      background: var(--bg3);
      position: relative;
      border: none;
      box-sizing: border-box;
      width: 100%;
      color: var(--color);
      padding: 15px 15px 15px 55px;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 500;
      &:not(:placeholder-shown) ~ i {
        opacity: 1;
      }
    }
    i {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.4;
      pointer-events: none;
      user-select: none;
      color: var(--color);
    }
    img {
        position: absolute;
        display: flex;
        width: 20px;
        height: 20px;
        margin-top: 17px;
        margin-left: 20px;
    }
  }
  .search-results {
    border-top: 1px solid var(--bg2);
    background: var(--bg3);
    border-radius: 0 0 5px 5px;
    overflow: hidden;
    display: none;
    .result {
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      color: var(--color);
      p {
        margin: 0;
      }
      img {
        width: 42px;
        height: 42px;
        display: block;
        margin-right: 15px;
        object-fit: cover;
        border-radius: 50%;
      }
      span {
        display: block;
        opacity: 0.5;
        font-size: 12px;
      }
      &:hover {
        background: var(--bg2);
        cursor: pointer;
      }
      &:last-child p {
        font-size: 12px;
      }
    }
    hr {
      border: none;
      height: 1px;
      background: var(--bg2);
      margin: 0;
    }
  }
}

#right {
  section {
    padding: 15px;
    box-sizing: border-box;
    border-bottom: 1px solid var(--bg2);
    background: var(--bg3);
    overflow: hidden;
    header {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      h3 {
        flex: 1;
        font-weight: 400;
        margin: 0;
        color: var(--color);
      }
      button {
        padding: 0;
        border-radius: 50%;
        background: transparent;
        border: none;
        cursor: pointer;
        width: 24px;
        height: 24px;
        color: var(--color);
        &:hover {
          background: var(--bg2);
        }
      }
      a {
        text-decoration: none;
        font-size: 12px;
        color: $blue;
      }
    }
    &:first-of-type {
      border-radius: 3px 3px;
    }
    &:last-of-type {
      border-bottom: none;
      border-radius: 0 0 3px 3px;
    }
  }
  main {
    a {
      text-decoration: none;
      color: var(--color);
      margin-bottom: 15px;
      display: block;
      &:not(.trend) {
        display: flex;
        align-items: center;
      }
      img {
        width: 42px;
        height: 42px;
        display: block;
        object-fit: cover;
        border-radius: 50%;
      }
      .trend-num {
        font-size: 12px;
        opacity: 0.5;
      }
      .trend {
        p {
          margin: 2px 0;
        }
        span {
          display: block;
          opacity: 0.5;
          font-size: 12px;
        }
        .quote {
          border-radius: 5px;
          overflow: hidden;
          display: flex;
          align-items: center;
          border: 1px solid var(--bg2);
          margin-top: 5px;
          .info {
            flex: 1;
            padding: 10px;
            box-sizing: border-box;
            border-right: 1px solid var(--bg2);
          }
          img {
            border-radius: 0;
            width: 61px;
            height: 61px;
          }
          &:hover {
            background: var(--bg2);
            .info > p {
              color: $blue;
            }
          }
        }
      }
      .user {
        margin-left: 15px;
        p {
          margin: 0;
          display: flex;
          align-items: center;
          small {
            margin-left: 5px;
          }
        }
        span {
          font-size: 12px;
          opacity: 0.5;
          display: block;
        }
      }
      &:hover > .user p,
      &:hover > .trend > p {
        color: $blue;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
