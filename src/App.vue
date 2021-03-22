<template>
  <div id="app">
    <div class="contents" v-if="!token">
      <header>
        <div class="logo">
          <img src="./assets/images/pizza-logo.png" alt="" />
        </div>
      </header>
      <main>
        <div class="login">
          <input type="text" placeholder="아이디(이메일주소)" />
          <input type="password" placeholder="비밀번호" />
        </div>
        <div class="auto-login">
          <input type="checkbox" />
          <label for="">자동 로그인</label>
        </div>
        <div class="submit-login">
          <button>로그인</button>
          <button @click="register()">
            <router-link to="/register"></router-link> 회원가입
          </button>
        </div>
        <div class="help-login">
          <div @click="findId()">아이디 찾기</div>
          |
          <div @click="findPwd()">비밀번호 찾기</div>
        </div>
      </main>
      <footer>
        <div class="sns-login">
          <button class="kakao-login">카카오톡으로 시작</button>
        </div>
      </footer>
    </div>
    <div class="main-frame" v-else>
      <div class="navi">
        <main-navi
          v-show="fullscreen == false"
          :pageMode="pageMode"
          @setPageMode="setPageMode"
        ></main-navi>
      </div>
      <div class="content">
        <router-view
          @setPageMode="setPageMode"
          @setFullscreen="setFullscreen"
        ></router-view>
      </div>
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
    return {};
  },
  computed: {
    // ...mapState(["token"]),
  },
  methods: {
    findId() {},
    findPwd() {},
    register() {
      this.$router.push({ name: "register" });
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
  background-color: #ffeecb;
}
.contents {
  height: 100%;
  padding: 20px 40px;
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
