<template>
  <div class="wrap">
    <header>
      <div class="header-l" @click="goBack()">
        <img src="../assets/images/arrow-left.png" alt="" />
      </div>
      <div class="header-title">회원가입</div>
      <div class="header-r"></div>
    </header>
    <div class="contents">
      <main>
        <ul class="info">
          <li>
            <div>이름</div>
            <input type="text" placeholder="한글 또는 영문만 입력가능" />
          </li>
          <li>
            <div>이메일</div>
            <input type="text" placeholder="pizza@pizzapay.com" />
          </li>
          <li>
            <div>비밀번호</div>
            <input
              type="text"
              placeholder="8자리 이상 영문자, 숫자, 특수문자 포함"
            />
            <input type="text" placeholder="비밀번호 확인" />
          </li>
          <li>
            <div>전화번호</div>
            <input type="text" placeholder="'-' 없이 입력" />
            <input type="text" placeholder="인증번호 입력" />
          </li>
        </ul>
      </main>
      <footer></footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.push({ name: "main" });
    },
  },
};
</script>
<style scoped>
header {
  height: 50px;
  line-height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
}
header div {
  height: 100%;
  width: 25%;
}
.header-l img {
  height: 100%;
}
.header-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}
.contents {
  height: calc(100vh - 50px);
  margin-top: 50px;
  background-color: white !important;
}
.contents main {
  padding: 20px 0;
}
.info li {
  margin-bottom: 20px;
}
.info li div:first-child {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
}
.info li input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid gray;
  outline: none;
}
</style>