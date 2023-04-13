<template>
    <div data-viewname="DBandListSubRecommendBandsView" class="discoverBandList">
        <div class="mainWrap">
            <div class="sectionTitleArea gMab19">
                <h2 class="sectionTitle" v-if="isMain">이런 모임은 어때요</h2>
                <h2 class="sectionTitle" v-else>검색 결과 {{ searchResultCnt }}개</h2>
            </div>

            <ul data-viewname="DDiscoverRecommendBandListView" class="cCoverList">
                <li data-viewname="DDiscoverRecommendBandItemView" class="cCoverItem">
                    <div class="bandUri">
                        <div class="cover">
                            <div class="uCoverImage -border -borderR12 -w80">
                                <span class="coverInner">
                                    <img src="https://coresos-phinf.pstatic.net/a/35ahg5/g_1biUd018svcl03cix5xm5dp_p2f6yk.jpg?type=cover_s276" class="coverImg _coverImg" alt="모임 커버">
                                </span>
                            </div>
                        </div>
                        <div class="bandName">
                            <strong class="name">
                                <a href="/band/73052575" class="text _bandLink" target="_blank">
                                    
                                    그려
                                </a>
                            </strong>
                            <p class="pSubTxt">할 거 없는 그림러들끼리 놀아요</p>

                            <a v-if="isMain" href="/discover/search/%EA%B7%B8%EB%A6%BC%EC%9F%81%EC%9D%B4" class="moreBandLink _tagLink" target="_blank"><strong>그림쟁이</strong> 모임 더보기</a>
                            <p v-else class="member">
                                <span class="total">멤버 <strong class="totalNumber">4,815</strong></span>
                                <span class="leader">리더 <strong class="leagerName">윤철종</strong></span>
                            </p>
                            
                        </div>
                        <a href="/band/73052575" class="bandLink _bandLink" target="_blank"><span class="gSrOnly">이 모임으로 이동</span></a>
                    </div>
                </li>
                <li data-viewname="DDiscoverRecommendBandItemView" class="cCoverItem">
                    <div class="bandUri">
                        <div class="cover">
                            <div class="uCoverImage -border -borderR12 -w80">
                                <span class="coverInner">
                                    <img src="https://coresos-phinf.pstatic.net/a/34633g/0_1baUd018svceh3c7t14xqnc_put89o.jpg?type=cover_s276" class="coverImg _coverImg" alt="모임 커버">
                                </span>
                            </div>
                        </div>
                        <div class="bandName">
                            <strong class="name">
                                <a href="/band/79965530" class="text _bandLink" target="_blank">
                                    
                                    삼성라이온즈
                                </a>
                            </strong>
                            <p class="pSubTxt">이 밴드는 삼성라이온즈팬들이 모여활동하는 밴드입니다.
                    많은 가입 부탁드립니다.^^</p>
        
                            <a href="/discover/search/%EC%82%BC%EC%84%B1%20%EB%9D%BC%EC%9D%B4%EC%98%A8%EC%A6%88" class="moreBandLink _tagLink" target="_blank"><strong>삼성 라이온즈</strong> 모임 더보기</a>
                            
                        </div>
                        <a href="/band/79965530" class="bandLink _bandLink" target="_blank"><span class="gSrOnly">이 모임으로 이동</span></a>
                    </div>
                </li>
                <li data-viewname="DDiscoverRecommendBandItemView" class="cCoverItem">
                    <div class="bandUri">
                        <div class="cover">
                            <div class="uCoverImage -border -borderR12 -w80">
                                <span class="coverInner">
                                    <img src="https://coresos-phinf.pstatic.net/a/32jf10/0_7faUd018svc1b2rewvlgxgbi_saup48.jpg?type=cover_s276" class="coverImg _coverImg" alt="모임 커버">
                                </span>
                            </div>
                        </div>
                        <div class="bandName">
                            <strong class="name">
                                <a href="/band/61871471" class="text _bandLink" target="_blank">
                                    
                                    필기구, 샤프, 볼펜 수집가들의 모임 [필사모]
                                </a>
                                
                            </strong>
                            <p class="pSubTxt">필기구에 관심이 많으신 분들을 위한 밴드입니다!
                    들어오셔서 함께 정보도 공유하고 이야기도 나누어요!

                    -필기구를 사랑하는 사람들의 모임-

                    #필기구 #샤프 #볼펜 #만년필 #연필 #색연필</p>
                            
                            
                            <a href="/discover/search/%ED%95%84%EA%B8%B0%EA%B5%AC%20%EC%88%98%EC%A7%91" class="moreBandLink _tagLink" target="_blank"><strong>필기구 수집</strong> 모임 더보기</a>
                            
                        </div>
                        <a href="/band/61871471" class="bandLink _bandLink" target="_blank"><span class="gSrOnly">이 모임으로 이동</span></a>
                    </div>
                </li>
                <li data-viewname="DDiscoverRecommendBandItemView" class="cCoverItem">
                    <div class="bandUri">
                        <div class="cover">
                            <div class="uCoverImage -border -borderR12 -w80">
                                <span class="coverInner">
                                    <img src="https://coresos-phinf.pstatic.net/a/2ha21j_8/115Ud0151c8cuxvto4t3s_nkrbes.jpg?type=cover_s276" class="coverImg _coverImg" alt="모임 커버">
                                </span>
                            </div>
                        </div>
                        <div class="bandName">
                            <strong class="name">
                                <a href="/band/54949202" class="text _bandLink" target="_blank">
                                    
                                    영어 학습(구조이해와 작문)
                                </a>
                                
                            </strong>
                            <p class="pSubTxt">
                    적극 참여할 의지 없으시면 신청 말아주삼~^^</p>
                            
                            
                            <a href="/discover/search/%EC%98%81%EC%96%B4%ED%95%99%EC%8A%B5" class="moreBandLink _tagLink" target="_blank"><strong>영어학습</strong> 모임 더보기</a>
                            
                        </div>
                        <a href="/band/54949202" class="bandLink _bandLink" target="_blank"><span class="gSrOnly">이 모임으로 이동</span></a>
                    </div>
                </li>
                <li data-viewname="DDiscoverRecommendBandItemView" class="cCoverItem">
                    <div class="bandUri">
                        <div class="cover">
                            <div class="uCoverImage -border -borderR12 -w80">
                                <span class="coverInner">
                                    <img src="https://coresos-phinf.pstatic.net/a/346b4c/c_df3Ud018svceyzxckq7sp10_sua973.jpg?type=cover_s276" class="coverImg _coverImg" alt="모임 커버">
                                </span>
                            </div>
                        </div>
                        <div class="bandName">
                            <strong class="name">
                                <a href="/band/86992309" class="text _bandLink" target="_blank">
                                    
                                    고3,N수 수능 모의고사
                                </a>
                                
                            </strong>
                            <p class="pSubTxt"></p>
                            
                            
                            <a href="/discover/search/%EC%88%98%EB%8A%A5" class="moreBandLink _tagLink" target="_blank"><strong>수능</strong> 모임 더보기</a>
                            
                        </div>
                        <a href="/band/86992309" class="bandLink _bandLink" target="_blank"><span class="gSrOnly">이 모임으로 이동</span></a>
                    </div>
                </li>
                <li data-viewname="DDiscoverRecommendBandItemView" class="cCoverItem">
                    <div class="bandUri">
                        <div class="cover">
                            <div class="uCoverImage -border -borderR12 -w80">
                                <span class="coverInner">
                                    <img src="https://coresos-phinf.pstatic.net/a/2ih03i/7_j6hUd018adm39twic80kxbg_pwyuf8.jpg?type=cover_s276" class="coverImg _coverImg" alt="모임 커버">
                                </span>
                            </div>
                        </div>
                        <div class="bandName">
                            <strong class="name">
                                <a href="/band/54832019" class="text _bandLink" target="_blank">
                                    
                                    라틴어 공부방
                                </a>
                                
                            </strong>
                            <p class="pSubTxt">라틴어를 배우기 원하는 사람들이 서로 도우며 배우기 위해 만들었습니다. </p>
                            
                            
                            <a href="/discover/search/%EB%9D%BC%ED%8B%B4%EC%96%B4" class="moreBandLink _tagLink" target="_blank"><strong>라틴어</strong> 모임 더보기</a>
                            
                        </div>
                        <a href="/band/54832019" class="bandLink _bandLink" target="_blank"><span class="gSrOnly">이 모임으로 이동</span></a>
                    </div>
                </li>
                <li data-viewname="DDiscoverRecommendBandItemView" class="cCoverItem">
                    <div class="bandUri">
                        <div class="cover">
                            <div class="uCoverImage -border -borderR12 -w80">
                                <span class="coverInner">
                                    <img src="https://coresos-phinf.pstatic.net/a/2j9b3f/b_6adUd018svc1q3ny48pp8gnc_vnn1ib.jpg?type=cover_s276" class="coverImg _coverImg" alt="모임 커버">
                                </span>
                            </div>
                        </div>
                        <div class="bandName">
                            <strong class="name">
                                <a href="/band/67551351" class="text _bandLink" target="_blank">
                                    
                                    알뜰한 우리들 - 영수증 팬밴드
                                </a>
                                
                            </strong>
                            <p class="pSubTxt">적금 뽐뿌 보장! 프로절약러 대환영! 상품 판매 없는 순수 재테크 비법 공유 밴드입니다. 우리 함께 부자됩시다 ♡ </p>
                            
                            
                            <a href="/discover/search/%EC%A0%95%EB%B3%B4" class="moreBandLink _tagLink" target="_blank"><strong>정보</strong> 모임 더보기</a>
                            
                        </div>
                        <a href="/band/67551351" class="bandLink _bandLink" target="_blank"><span class="gSrOnly">이 모임으로 이동</span></a>
                    </div>
                </li>
                <li data-viewname="DDiscoverRecommendBandItemView" class="cCoverItem">
                    <div class="bandUri">
                        <div class="cover">
                            <div class="uCoverImage -border -borderR12 -w80">
                                <span class="coverInner">
                                    <img src="https://coresos-phinf.pstatic.net/a/34b97f/d_f97Ud018svc1e8k7acxy4vug_tdh3ix.jpg?type=cover_s276" class="coverImg _coverImg" alt="모임 커버">
                                </span>
                            </div>
                        </div>
                        <div class="bandName">
                            <strong class="name">
                                <a href="/band/87722921" class="text _bandLink" target="_blank">
                                    
                                    미션명:매일 항성,행성,블랙홀 이름 올리기
                                </a>
                                
                            </strong>
                            <p class="pSubTxt"></p>
                            
                            
                            <a href="/discover/search/%ED%96%89%EC%84%B1" class="moreBandLink _tagLink" target="_blank"><strong>행성</strong> 모임 더보기</a>
                            
                        </div>
                        <a href="/band/87722921" class="bandLink _bandLink" target="_blank"><span class="gSrOnly">이 모임으로 이동</span></a>
                    </div>
                </li>
                <li data-viewname="DDiscoverRecommendBandItemView" class="cCoverItem">
                    <div class="bandUri">
                        <div class="cover">
                            <div class="uCoverImage -border -borderR12 -w80">
                                <span class="coverInner">
                                    <img src="https://coresos-phinf.pstatic.net/a/357g7i/e_ib5Ud018svcu4phbpamwkgk_so555s.jpg?type=cover_s276" class="coverImg _coverImg" alt="모임 커버">
                                </span>
                            </div>
                        </div>
                        <div class="bandName">
                            <strong class="name">
                                <a href="/band/70372609" class="text _bandLink" target="_blank">
                                    
                                    포켓몬스터&amp; 포켓몬GO 유저모임
                                </a>
                                
                            </strong>
                            <p class="pSubTxt">포켓몬, 포켓몬스터, 포켓몬 고, 포켓몬Go, 레츠고 피카츄, 레츠고 이브이, 울트라 썬, 울트라 문, 포켓몬 카드, 인형, 포켓몬 마스터즈, 포켓몬스터 소드실드등 포켓몬 관련내용이면 뭐든지 환영입니다!</p>
                            
                            
                            <a href="/discover/search/%ED%8F%AC%EC%BC%93%EB%AA%AC%EA%B3%A0%20%EC%9C%A0%EC%A0%80" class="moreBandLink _tagLink" target="_blank"><strong>포켓몬고 유저</strong> 모임 더보기</a>
                            
                        </div>
                        <a href="/band/70372609" class="bandLink _bandLink" target="_blank"><span class="gSrOnly">이 모임으로 이동</span></a>
                    </div>
                </li>
                <li data-viewname="DDiscoverRecommendBandItemView" class="cCoverItem">
                    <div class="bandUri">
                        <div class="cover">
                            <div class="uCoverImage -border -borderR12 -w80">
                                <span class="coverInner">
                                    <img src="https://coresos-phinf.pstatic.net/a/31c44b/8_949Ud018svcrp548hp6px4d_ohb1kt.jpg?type=cover_s276" class="coverImg _coverImg" alt="모임 커버">
                                </span>
                            </div>
                        </div>
                        <div class="bandName">
                            <strong class="name">
                                <a href="/band/72044766" class="text _bandLink" target="_blank">
                                    
                                    존못 존잘 모두 환영 그림밴드
                                </a>
                                
                            </strong>
                            <p class="pSubTxt">그림 그리기를 좋아하는 사람이라면 누구든지 환영합니다~!</p>
                            
                            
                            <a href="/discover/search/10%EB%8C%80%20%EA%B7%B8%EB%A6%BC" class="moreBandLink _tagLink" target="_blank"><strong>10대 그림</strong> 모임 더보기</a>
                            
                        </div>
                        <a href="/band/72044766" class="bandLink _bandLink" target="_blank"><span class="gSrOnly">이 모임으로 이동</span></a>
                    </div>
                </li>
            </ul>

            <div class="sectionOptionBox  -positionBottom" v-if="isShowMore">
                <a href="/discover" class="btnOption  gMat7">
                    <span class="optionText">모두보기 ></span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue';
export default {
    props: {
        isShowMore: Boolean,
        isMain: Boolean
    },
    setup(){
        const searchResultCnt = ref(0);
        
        return{
            searchResultCnt
        }
    }
}
</script>

<style scoped>
button, dd, dl, dt, fieldset, ol, p, ul {
    margin: 0;
    padding: 0;
}
.createBand+.discoverBandList, .createBand+.openBandList {
    background: rgba(0,0,0,0.03);
}
.discoverBandList {
    position: relative;
    padding: 35px 0 20px 0;
}
.mainWrap {
    position: relative;
    margin: 0 auto;
}
.sectionTitleArea {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding-bottom: 15px;
}
.sectionTitleArea .sectionTitle {
    font-size: 20px;
    font-weight: 600;
    color: #222;
    -webkit-box-flex: 0;
    flex: 0 0 auto;
}
.cCoverList {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;
}
.cCoverList .cCoverItem:nth-child(odd), .mainWrap .cCoverList .cCoverItem:nth-child(odd) {
    padding-right: 20px;
}
.cCoverList .cCoverItem, .mainWrap .cCoverList .cCoverItem {
    width: 50%;
}
.cCoverList .cCoverItem {
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    position: relative;
    margin-bottom: 30px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-right: 20px;
}
.cCoverList .cCoverItem .bandUri {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.cCoverList .cCoverItem .cover {
    position: relative;
    margin-right: 12px;
}
.uCoverImage {
    display: inline-block;
    position: relative;
    vertical-align: top;
}
.discoverBandList .uCoverImage.-border .coverInner {
    border-radius: 12px;
}
.uCoverImage.-w80 .coverInner {
    width: 80px;
    height: 80px;
}
.uCoverImage.-borderR12 .coverInner {
    border-radius: 12px;
}
.uCoverImage .coverInner {
    display: block;
    position: relative;
    overflow: hidden;
    border-radius: 2px;
    line-height: 0;
    font-size: 0;
    background-color: #F5F6F8;
}
.cCoverList .cCoverItem .bandName {
    -webkit-box-flex: 1;
    flex: 1 1;
    min-width: 0;
}
.cCoverList .cCoverItem .bandName .name {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
b, strong {
    font-weight: bolder;
}
.cCoverList .cCoverItem .bandName .name .text {
    font-size: 14px;
    font-weight: 600;
    color: #222;
    display: block;
    overflow: hidden;
    max-width: 100%;
    white-space: nowrap;
    word-break: normal;
    overflow-wrap: normal;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    position: relative;
    padding-top: 3px;
    line-height: 1.4;
    z-index: 1;
}
.cCoverList .cCoverItem .bandName .pSubTxt:not(.-multiLine) {
    display: block;
    overflow: hidden;
    max-width: 100%;
    white-space: nowrap;
    word-break: normal;
    overflow-wrap: normal;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
}
.cCoverList .cCoverItem .bandName .pSubTxt {
    margin-top: 5px;
    font-size: 13px;
    font-weight: 400;
    color: #555;
}
.cCoverList .cCoverItem .bandName .moreBandLink {
    font-size: 12px;
    font-weight: 400;
    color: #777;
    display: inline-block;
    position: relative;
    margin-top: 7px;
    height: 26px;
    padding: 0 10px 0 9px;
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 100px;
    line-height: 23px;
    background: #fff;
    z-index: 1;
}
.cCoverList .cCoverItem .bandLink {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.gSrOnly {
    overflow: hidden;
    position: absolute;
    height: 1px;
    width: 1px;
    clip: rect(1px,1px,1px,1px);
}
.sectionOptionBox.-positionBottom {
    position: absolute;
    right: 0;
    top: 4px;
}
.sectionOptionBox {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
}
.btnOption {
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    display: inline-block;
    position: relative;
}
.btnOption .optionText {
    font-size: 13px;
    font-weight: 400;
    color: #444;
    line-height: 20px;
    text-align: left;
}

.uIconAcrossBand, .uIconAppDownload, .uIconBandCreate, .uIconBandGuide, .uIconBandListSetting, .uIconCommentFile, .uIconCommentImage, .uIconCommentPlus, .uIconCommentSecret, .uIconCommentSticker, .uIconComments, .uIconConfirmCheck, .uIconFaceEmotion, .uIconFeedSearch, .uIconGps, .uIconGroupCallShare, .uIconGroupCallVideo, .uIconGroupCallVideoOff, .uIconGroupCallVoice, .uIconGroupCallVoiceOff, .uIconMapFill, .uIconMissionBandSetting, .uIconNormalCheckPersonFill, .uIconNormalCheckSquareFill, .uIconNormalLink, .uIconNormalLockFill, .uIconNormalMailFill, .uIconNormalMailPersonFill, .uIconNormalQr, .uIconNormalQuestion, .uIconNormalSeveralPeopleFill, .uIconOfficialBand, .uIconOption, .uIconPlusSquare, .uIconPostWriteDivision, .uIconPostWriteMap, .uIconPostWriteMarkdown, .uIconPostWriteSurvey, .uIconPrivacyMenu, .uIconQuestionCircleFill, .uIconSettingFill, .uIconShare, .uIconTrash, .uIconWidgetAlbum, .uIconWidgetAttendance, .uIconWidgetDivision, .uIconWidgetFile, .uIconWidgetMarkdown, .uIconWidgetMutiSchedule, .uIconWidgetPayment, .uIconWidgetQuiz, .uIconWidgetSignup, .uIconWidgetSurvey, .uIconWidgetTodo, .uIconWidgetVote {
    display: inline-block;
    vertical-align: top;
}



.cCoverList .cCoverItem .bandName .date, .cCoverList .cCoverItem .bandName .member {
    margin-top: 4px;
    line-height: 1.5;
    font-size: 12px;
    font-weight: 400;
    color: #999;
    display: block;
    overflow: hidden;
    max-width: 100%;
    white-space: nowrap;
    word-break: normal;
    overflow-wrap: normal;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
}
.cCoverList .cCoverItem .bandName .date strong, .cCoverList .cCoverItem .bandName .member strong {
    font-weight: 400;
}
.cCoverList .cCoverItem .bandName .date .leader:before, .cCoverList .cCoverItem .bandName .member .leader:before {
    display: inline-block;
    margin: 7px 6px 0 3px;
    width: 2px;
    height: 2px;
    background-color: #b3b3b3;
    border-radius: 50%;
    vertical-align: top;
    content: "";
}
</style>