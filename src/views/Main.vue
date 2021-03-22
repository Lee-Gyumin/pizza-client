<template>
  <div class="contents bg">
    <header>
      <div class="logo">
        <img src="../assets/img/pizza-logo.png" alt="" />
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
        <button @click="register">회원가입</button>
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
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "Main",
  components: {},
  data() {
    return {
      pageMode: "main",
      fullscreen: false,
    };
  },
  computed: {
    ...mapState(["token"]),
  },
  methods: {
    ...mapMutations(["LOGIN", "LOGOUT"]),
    findId() {},
    findPwd() {},
    register() {
      this.$router.push({ name: "register" });
    },
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

<style scoped>
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
  margin: 0;
}
</style>