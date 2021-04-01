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
          <li class="receipt"><div></div></li>
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
        <div><button @click="showPop()">공유하기</button></div>
      </footer>
      <div class="share-pop" :class="{ active: popActive }">
        <div class="share-main">
          <div class="share-header"><div>더치페이 방법 선택</div></div>
          <div class="share-contents">
            <ul>
              <li class="check">
                <label for="1">
                  <input type="radio" checked name="radio-answer" id="1" />
                  <div>
                    <div>34000원 / 인원수</div>
                    <div>인원수 : <input type="number" /> 명</div>
                  </div>
                </label>
              </li>
              <li class="check">
                <label for="2"
                  ><input type="radio" name="radio-answer" id="2" />
                  <div>메뉴별 송급</div>
                </label>
              </li>
              <li class="check">
                <label for="3"
                  ><input type="radio" name="radio-answer" id="3" />
                  <div>송금액 개별 설정</div>
                </label>
              </li>
            </ul>
          </div>
          <div class="share-button">
            <button @click="showPop()">취소</button>
            <button @click="goShare()">공유하기</button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg" :class="{ active: popActive }"></div>
  </div>
</template>

<script>
export default {
  name: "paymentDetail",
  data() {
    return {
      popActive: false,
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: "home" });
    },
    showPop() {
      this.popActive = !this.popActive;
    },
    goShare() {
      this.$router.push({ name: "share" });
    },
  },
};
</script>
<style scoped>
.wrap {
  font-size: 2rem;
}
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
  padding: 20px 10px;
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
  padding: 20px;
}
.info .receipt {
  position: relative;
}
.info .receipt div {
  width: 100%;
  height: 2px;
  background-color: gray;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.info .receipt div::after {
  content: "주문내역";
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999;
  background-color: #ffeecb;
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
.share-pop {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
  width: 80%;
  border-radius: 15px;
  border: 1px solid gray;
  z-index: 9999;
}
.share-pop.active {
  display: block;
}
.share-pop .share-main {
  height: 100%;
}

.share-pop .share-header {
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid gray;
}
.share-pop .share-contents {
  width: 100%;
  padding: 20px;
}
.share-pop .share-contents ul li {
  margin-bottom: 30px;
}
.share-pop .share-contents li.check {
  display: flex;
  justify-content: end;
  align-items: baseline;
}
.share-pop .share-contents li.check label {
  display: flex;
  align-items: baseline;
}
.share-pop .share-contents li.check input {
  width: 50px;
  text-align: center;
}
.share-button {
  display: flex;
  justify-content: space-evenly;
}
.share-button button {
  width: 40%;
  margin: 0;
  background-color: #ffeecb;
  margin-bottom: 30px;
}
.share-button button:first-child {
  background-color: gainsboro;
}
.bg {
  display: none;
}
.bg.active {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
}
</style>
