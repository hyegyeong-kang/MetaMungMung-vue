<template>
  <div class="post-form">
    <div class="lyPostShareWrite _lyContent" style="margin-top: 77px;">
        <header class="header">
            <h1 class="title">글쓰기</h1>
            
        </header>
        <div class="main _editorRegion">
            <div data-viewname="DPostEditorView" class="cPostWrite">
                <h3 class="gSrOnly">글쓰기</h3>

                
<div class="postWriteForm _postWriteForm -standby" style="max-height: 466px;">
    <p class="gSrOnly" id="postWriteFormPlaceholderText">새로운 소식을 남겨보세요.</p>
    <div class="contentEditor _richEditor skin6 cke_editable cke_editable_inline cke_contents_ltr" contenteditable="true" aria-labelledby="postWriteFormPlaceholderText" tabindex="0" spellcheck="true" role="textbox" aria-label="false" style="position: relative;"><p>&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;<br></p></div>
</div>


<div class="buttonArea _bottomToolbar">
    <ul class="toolbarList">
        
        <li class="toolbarListItem">
            <label class="photo _btnAttachPhoto _attachWidgetBtn js-fileapi-wrapper" for="postPhotoInput_view1002">
                <input type="file" id="postPhotoInput_view1002" multiple="" aria-labelledby="photoLabel_view1002" title=" " accept="image/*" name="attachment">
                <span class="tooltip" id="photoLabel_view1002">사진</span>
                <svg class="svgIcon" aria-hidden="true">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ico-p-photo"></use>
                </svg>
            </label>
        </li>
        
        <li class="toolbarListItem">
            <label class="file _btnAttachFile _attachWidgetBtn js-fileapi-wrapper" for="postFileInput_view1002">
                <input type="file" id="postFileInput_view1002" multiple="" aria-labelledby="fileLabel_view1002" title=" " accept="*/*" name="attachment">
                <span class="tooltip" id="fileLabel_view1002">파일</span>
                <svg class="svgIcon" aria-hidden="true">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ico-p-file"></use>
                </svg>
            </label>
        </li>
 
        <li class="toolbarListItem">
            <button type="button" class="map _btnAttachLocation _attachWidgetBtn">
                <span class="tooltip ">지도</span>
                <svg class="svgIcon" aria-hidden="true">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ico-p-map"></use>
                </svg>
            </button>
        </li>
    </ul>

    <div class="writeSettingBox">
        <div class="buttonSubmit">
            <button type="submit" class="uButton -sizeM -disabled _btnSubmitPost">게시</button>    
        </div>
    </div>
</div>
</div></div>
        <footer class="footer">
            

            <button type="button" class="btnLyClose _btnCancel"><span class="gSrOnly">취소</span></button>
        </footer>
    </div>
  </div>
</template>

<script>
import MapModal from '@/components/meeting/onMeeting/board/registerModal/mapModal.vue';
import {ref} from 'vue';

export default {
  name: "RegisterModal",
  props: [

  ],
  components: {
    MapModal
  },
  data() {
    return {
      modalOpen: false,
      post: {
        title: '',
        content: '',
        author: ''
      }
    }
  },
  methods: {
    submitPost() {
      // 게시판 글쓰기 로직
      // this.post 객체를 서버로 전송하는 코드 작성
    }
  }
}
</script>

<style>
textarea{
	width:500px; 
	height:100px; 
    resize:none;/* 크기고정 */ 
/*   resize: horizontal; // 가로크기만 조절가능 
	resize: vertical;  세로크기만 조절가능  */
}
</style>