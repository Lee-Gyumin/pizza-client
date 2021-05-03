<template>
  <div class="contents">
    <div class="header">
      <div class="logo">
        <img src="../assets/images/pizza-logo.png" alt="" />
      </div>
    </div>
    <main>
      <div class="login">
        <input
          v-model="userEmail"
          type="text"
          placeholder="아이디(이메일주소)"
        />
        <input v-model="password" type="password" placeholder="비밀번호" />
      </div>
      <div class="auto-login">
        <input type="checkbox" />
        <label for="">자동 로그인</label>
      </div>
      <div class="submit-login">
        <button @click="submitLogin()">로그인</button>
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
</template>

<script>
import * as api from "../api/index";
import { mapMutations } from "vuex";
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      userEmail: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations(["LOGIN"]),
    register() {
      this.$router.push({ name: "register" });
    },
    async submitLogin() {
      if (!this.userEmail) {
        alert("이메일을 입력하세요");
      }
      if (!this.password) {
        alert("비밀번호를 입력하세요");
      }
      try {
        const { data } = await api.auth.login({
          userEmail: this.userEmail,
          password: this.password,
        });
        if (data.result) {
          this.LOGIN(data.data);
          this.$router.push({ name: "home" });
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.log(error);
        alert(error);
      }
    },
  },
};
</script>
