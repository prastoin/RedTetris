<template>
  <div class="root">
    <div class="tetriContainer">
        <tetriDisplay class="rotating-l" :currTetri="1" :currRota="0" :tetrimino="tetrimino" style="bottom: 17%; right: 75%;"/>
        <tetriDisplay class="rotating-r"  :currTetri="2" :currRota="0" :tetrimino="tetrimino" style="bottom: 60%; left: 40%"/>
        <tetriDisplay class="rotating-l" :currTetri="0" :currRota="0" :tetrimino="tetrimino" style="top: 10%; left: 27%"/>
        <tetriDisplay class="rotating-r" :currTetri="3" :currRota="0" :tetrimino="tetrimino" style="top: 10%; right: 7%;"/>
        <tetriDisplay class="rotating-l" :currTetri="4" :currRota="0" :tetrimino="tetrimino" style="bottom: 50%; right: 18%;"/>
        <tetriDisplay class="rotating-r" :currTetri="5" :currRota="0" :tetrimino="tetrimino" style="bottom: 40%; left: 23%;"/>
        <tetriDisplay class="rotating-l" :currTetri="6" :currRota="0" :tetrimino="tetrimino" style="top: 9%; left: 10%;"/>
        <tetriDisplay class="rotating-r" :currTetri="0" :currRota="0" :tetrimino="tetrimino" style="bottom: 4%; right: 10%;"/>
        <tetriDisplay class="rotating-l" :currTetri="3" :currRota="0" :tetrimino="tetrimino" style="bottom: 33%; right: 37%;"/>
        <tetriDisplay class="rotating-r"  :currTetri="5" :currRota="0" :tetrimino="tetrimino" style="bottom: 6%; left: 4%;"/>
    </div>
    <div class="layer">
        <div class="buttonbox">
          <p id="menu">Menu</p>
          <router-link to="RedTetris" style="text-decoration: none;">
            <p id="play">Play</p>
          </router-link>
          <p id="settings">Settings</p>
          <p id="credits">Credits</p>
        </div>
    </div>
  </div>
</template>

<script>
import tetriDisplay from "./dev.vue";
import { tetrimino } from "../data.js";

export default {
    name: "menu",
    data () {
      return {
        tetrimino,
      }
    },
    components: {
      tetriDisplay
    }
}
</script>

<style lang="stylus" scoped>

.root{
  width: 100%;
  height: 100%;
  position: relative;
}

.layer {
//  height: 70vh;
 // width: 60vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.tetriContainer {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}

.container {
  margin: auto;
}

.buttonbox {
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  p {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center; 

      width: 210px;
      height: 80px;
      margin: 32px;
      margin-left: auto;
      margin-right: auto;

      cursor: pointer;
      font-size: 2rem;
      font-weight: bold;
      text-shadow: 0 2px 0 rgba(0,0,0,0.3);
      color: white;
      border: 0;
      background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1fa0f80-33c1-4516-8baa-90fb67ed2269/d82j2kd-4bd6de45-7b91-462a-890a-c99485b163dd.jpg/v1/fill/w_1024,h_576,q_75,strp/minecraft_stone_brick_simple_texture_wallpaper_by_elbarnzo_d82j2kd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZDFmYTBmODAtMzNjMS00NTE2LThiYWEtOTBmYjY3ZWQyMjY5XC9kODJqMmtkLTRiZDZkZTQ1LTdiOTEtNDYyYS04OTBhLWM5OTQ4NWIxNjNkZC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._DX46Z-fJNwSOoDK3d50K2pnMiBlgbHvqptlkSJQHw4);
  }
  #menu {
      margin-bottom: 64px;
      width: 440px;
      height: 165px;
      font-size: 6rem;
      font-font-family: verdana;
  }
}

@-webkit-keyframes rotating-r /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating-r {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating-r {
  transform-origin: center center;
  -webkit-animation: rotating-r 4s linear infinite;
  -moz-animation: rotating-r 4s linear infinite;
  -ms-animation: rotating-r 4s linear infinite;
  -o-animation: rotating-r 4s linear infinite;
  animation: rotating-r 4s linear infinite;
}

@-webkit-keyframes rotating-l /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(-360deg);
    -o-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
@keyframes rotating-l {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(-360deg);
    -moz-transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
    -o-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
.rotating-l {
  transform-origin: center center;
  -webkit-animation: rotating-l 4s linear infinite;
  -moz-animation: rotating-l 4s linear infinite;
  -ms-animation: rotating-l 4s linear infinite;
  -o-animation: rotating-l 4s linear infinite;
  animation: rotating-l 4s linear infinite;
}
</style>
