<template>
  <div class="wrap">
    <header>
      <div class="header-l" @click="goBack()">
        <img src="../assets/images/arrow-left.png" alt="" />
      </div>
      <div class="header-title">결제내역 상세</div>
      <div class="header-r"></div>
    </header>
    <div class="contents">
      <main>
        <ul class="info">
          <li class="name">
            <div class="desc">
              <img src="../assets/images/pizza-logo.png" alt="" />
              <div>계림 닭도리탕</div>
              <span>( <span>1000원</span> 적립)</span>
            </div>
          </li>
          <li>
            <div>신한카드 결제 (2021/01/12 12:40)</div>
          </li>
          <li>
            <div>더 스카이밸리1차 2층</div>
          </li>
          <li>메뉴</li>
          <li class="menu">
            <div>1.닭도리탕*2</div>
            <div>24000</div>
          </li>
          <li class="menu">
            <div>2.계란찜</div>
            <div>6000</div>
          </li>
          <li class="menu">
            <div>3.볶음밥</div>
            <div>4000</div>
          </li>
          <li class="total">
            <div>총금액: 34000</div>
          </li>
        </ul>
      </main>
      <footer>
        <div><button>공유하기</button></div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "paymentDetail",
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>
<style scoped>
header div {
  height: 100%;
  width: 30%;
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
  padding: 10px;
}
.contents main ul {
  font-size: 2rem;
  width: 100%;
  background-color: #ffeecb;
  border-radius: 15px;
  box-shadow: 3px 3px 10px gainsboro;
}
.info .name img {
  width: 35px;
  margin-right: 5px;
}
.info .name .desc {
  display: flex;
  align-items: center;
}
.info .name .desc span {
  font-size: 1.5rem;
}
.info .menu {
  display: flex;
  justify-content: space-between;
}
.info .total {
  display: flex;
  justify-content: flex-end;
  font-size: 2.8rem;
}
.info li {
  padding: 10px 20px;
}
footer div {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
}

footer button {
  width: 50%;
  border: 1px solid gray;
  margin: 0;
}
</style>
