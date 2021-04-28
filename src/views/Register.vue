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
              <div>
                <input type="number" placeholder="'-' 없이 입력" /><button>
                  인증
                </button>
              </div>
              <div>
                <input type="number" placeholder="인증번호 입력" /><button>
                  확인
                </button>
              </div>
            </div>
          </li>
        </ul>
      </main>
      <footer>
        <h1>약관동의</h1>
        <div>모두동의</div>
        <div class="terms">
          <ul>
            <li>
              <div><span>[필수]</span> 피자페이 서비스 이용약관 동의</div>
            </li>
            <li>
              <div><span>[필수]</span> 개인정보 수집 및 이용 동의</div>
            </li>
            <li>
              <div><span>[선택]</span> 마케팅 정보 수신에 대한 동의</div>
            </li>
          </ul>
        </div>
        <div class="submit-join">
          <div @click="submitJoin()"><button>회원가입 완료</button></div>
          <div>고객센터 02-1111-1010</div>
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
    submitJoin() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>
<style scoped>
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
  padding: 0 !important;
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
.info .certified div {
  display: flex;
  position: relative;
}
.info .certified div button {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  margin: 0;
  box-shadow: none;
  color: rgb(211, 211, 211);
  border: 1px solid rgb(211, 211, 211);
  border-radius: 5px;
  padding: 5px;
  height: auto;
  background-color: rgb(240, 240, 240);
}
.info .certified input {
  border: none;
}
.info .certified input:first-child {
  border-radius: 0;
  border-bottom: 1px solid rgb(172, 172, 172);
}
.info .certified div:last-child input {
  border-bottom: none;
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
footer h1 {
  font-size: 2rem;
}
footer div {
  font-size: 1.7rem;
  margin: 10px 0;
}
footer .terms {
  border-top: 1px solid rgb(172, 172, 172);
}
footer .terms ul li {
  margin: 20px 0;
}
footer .terms ul li div {
  text-decoration: underline;
}
footer .terms ul li div span {
  font-weight: bold;
  color: #fb892b;
}
footer .submit-join {
  text-align: center;
  margin: 30px 0 10px;
}
footer .submit-join button {
  width: 100%;
  color: gray;
  box-shadow: none;
  padding: 10px;
  background-color: rgb(211, 211, 211);
}
</style>
