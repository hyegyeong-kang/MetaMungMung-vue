<template>
<!--header section start -->
  <div class="header_section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <div class="logo"><router-link :to="{name: 'Home'}"><img src="@/assets/images/logo.png"></router-link></div>
        </div>
        <div class="col-md-9">
          <div class="menu_text">
            <ul>
              <div class="togle_3">
                <div class="menu_main">
                  <div class="padding_left0"><a href="#">Register</a>
                  <span class="padding_left0"><a href="#">Login</a></span></div>
                </div>
                <div class="shoping_bag"><img src="@/assets/images/search-icon.png"></div>
              </div>
              <div id="myNav" class="overlay">
              <a href="javascript:void(0)" class="closebtn" @click="closeNav" >&times;</a>
              <div class="overlay-content">
                <router-link :to="{name: 'Home'}" @click="moveToMain">Home</router-link>
                <router-link :to="{name: 'Map'}" @click="moveToMap">Map</router-link>
                <a href="about.html">About</a>
                <a href="choose.html">Choose</a>
                <a href="team.html">Team</a>
                <a href="contact.html">Contact Us</a>
              </div>
              </div>
              <span class="navbar-toggler-icon"></span>
              <span @click="openNav"><img src="@/assets/images/toggle-icon.png" class="toggle_menu"></span>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- banner section start -->
    <div id="bannerDiv" class="banner_section layout_padding">
      <div class="container">
        <div class="row">
          <div class="col-sm-5">
            <h1 class="banner_taital_1">메타멍멍 ☺︎</h1>
            <p class="banner_text">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
            <div class="contact_bt"><a href="contact.html">CONTACT US<span class="contact_padding"><img src="@/assets/images/contact-icon.png"></span></a></div>
          </div>
          <div class="col-sm-2">
            <div class="play_icon"><a href="#"><img src="@/assets/images/play-icon.png"></a></div>
          </div>
          <div class="col-sm-5">
            <div><img src="@/assets/images/img-1.png" class="image_1"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- banner section end -->
  </div>
  <!-- header section end -->
</template>

<script>
export default ({
  name: 'MainHeader',
  setup () {
    let overlay = null
    let headerSection = null

    const openNav = () => {
      overlay = document.getElementsByClassName('overlay')
      overlay[0].style.width = '100%'
    }
    const closeNav = () => {
      overlay = document.getElementsByClassName('overlay')
      overlay.style.width = '0%'
    }
    const moveToMain = () => {
      headerSection = document.getElementsByClassName('header_section')[0]
      headerSection.classList.remove('background_bg')
      document.getElementById('bannerDiv').style.display = 'block'
      overlay[0].style.width = '0%'
    }
    const moveToMap = () => {
      headerSection = document.getElementsByClassName('header_section')[0]
      headerSection.classList.add('background_bg')
      document.getElementById('bannerDiv').style.display = 'none'
      overlay[0].style.width = '0%'
    }
    return {
      openNav,
      closeNav,
      moveToMain,
      moveToMap
    }
  }
})
</script>
