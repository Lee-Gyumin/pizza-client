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
            <div class="certified">
              <input
                type="text"
                placeholder="8자리 이상 영문자, 숫자, 특수문자 포함"
              />
              <input type="text" placeholder="비밀번호 확인" />
            </div>
          </li>
          <li>
            <div>전화번호</div>
            <div class="certified">
              <div><input type="text" placeholder="'-' 없이 입력" /></div>
              <div><input type="text" placeholder="인증번호 입력" /></div>
            </div>
          </li>
        </ul>
      </main>
      <footer>
        <div>약관동의</div>
        <div>모두동의</div>
        <div>
          <ul>
            <li><div>[필수] 피자페이 서비스 이용약관 동의</div></li>
            <li><div>[필수] 개인정보 수집 및 이용 동의</div></li>
            <li><div>[선택] 마케팅 정보 수신에 대한 동의</div></li>
          </ul>
        </div>
      </footer>
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
  padding: 20px;
  border-bottom: 10px solid gray;
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
  padding: 15px;
  border-radius: 5px;
  border: 1px solid rgb(172, 172, 172);
  outline: none;
}
.info .certified {
  border: 1px solid rgb(172, 172, 172);
  border-radius: 5px;
  overflow: hidden;
}
.info .certified input {
  border: none;
}
.info .certified input:first-child {
  border-radius: 0;
  border-bottom: 1px solid rgb(172, 172, 172);
}
input::placeholder {
  color: rgb(172, 172, 172);
}
.info .certified div {
  margin: 0 !important;
  border: none !important;
}
.info .certified div:last-child input:last-child {
  border: none !important;
}
footer {
  padding: 20px;
}
</style>
