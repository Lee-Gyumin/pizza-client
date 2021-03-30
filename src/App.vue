<template>
  <div id="app">
    <div class="container">
      <router-view
        @setPageMode="setPageMode"
        @setFullscreen="setFullscreen"
      ></router-view>
    </div>
  </div>
</template>
<script>
// import * as api from "./api/index";
// import { mapMutations, mapState } from "vuex";
export default {
  name: "App",
  components: {},
  data() {
    return {
      pageMode: "Main",
      fullscreen: false,
    };
  },
  computed: {
    // ...mapState(["token"]),
  },
  methods: {
    findId() {},
    findPwd() {},
    setPageMode: function (mode, query) {
      console.log("App.vue page mode : " + mode);
      if (this.pageMode != mode) {
        if (query) {
          this.$router.push({ name: mode, query: query });
        } else {
          this.$router.push({ name: mode });
        }
        this.pageMode = mode;
        if (this.pageMode == "Main") {
          this.onScroll();
        }
      }
    },
    setFullscreen: function (bool) {
      this.fullscreen = bool;
    },
  },
};
</script>
<style>
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
} /* this targets the default scrollbar (compulsory) */
::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.1);
} /* the new scrollbar will have a flat appearance with the set background color */

::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
} /* this will style the thumb, ignoring the track */

::-webkit-scrollbar-button {
  background-color: #444;
  height: 0px;
} /* optionally, you can style the top and the bottom buttons (left and right for horizontal bars) */

::-webkit-scrollbar-corner {
  background-color: #363636;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html {
  font-size: 8px;
}
li {
  list-style-type: none;
}
img {
  vertical-align: bottom;
}
button {
  height: 40px;
  margin-bottom: 15px;
  border: none;
  border-radius: 10px;
  background-color: white;
  outline: none;
  box-shadow: 3px 6px 3px 0 rgb(0 0 0 / 8%);
}
#app {
  width: 100vw;
  height: 100vh;
}
.container {
  height: 100%;
  overflow-y: auto;
  position: relative;
  margin: 0;
  padding: 0;
  height: 100vh;
  color: #888;
  background-color: white;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
}
.contents {
  height: 100%;
  padding: 0px 40px;
  background-color: #ffeecb;
}

header .logo {
  width: 60%;
  height: 20%;
  padding: 5% 0 10%;
  margin: 0 auto;
  text-align: center;
}
header .logo img {
  width: 100%;
}
main .login {
  text-align: center;
}
main .login input {
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  outline: none;
  border-radius: 10px;
}
.auto-login {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}
.auto-login input {
  margin-right: 5px;
}
.submit-login {
  display: flex;
  flex-direction: column;
}

.submit-login button:first-child {
  color: gray;
  background-color: #fbc65d;
}
.help-login {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
.help-login div {
  margin: 0 5px;
  cursor: pointer;
}
footer .sns-login button {
  width: 100%;
  text-align: center;
  font-size: 2rem;
  padding: 10px;
  border-radius: 10px;
}
footer .sns-login .kakao-login {
  color: #391b1b;
  background-color: #fae301;
}
</style>
