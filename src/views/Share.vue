<template>
  <div class="wrap">
    <header>
      <div class="header-l" @click="goBack()">
        <img src="../assets/images/arrow-left.png" alt="" />
      </div>
      <div class="header-title">공유하기</div>
      <div class="header-r"></div>
    </header>
    <div class="contents">
      <main>
        <div class="header">
          <input type="text" placeholder="이름 또는 전화번호 검색" />
        </div>
        <div class="filter-list">
          <div :class="{ active: isActive === 1 }" @click="toggleActive(1)">
            카카오친구
          </div>

          <div :class="{ active: isActive === 2 }" @click="toggleActive(2)">
            연락처
          </div>
        </div>
        <ul class="share-user">
          <li class="user-list">
            <div class="profile">
              <img src="../assets/images/share-profile.png" alt="" />
            </div>
            <div>
              <div>이규민</div>
              <div>010-7469-1022</div>
            </div>
            <div class="select">
              <img src="../assets/images/pizza-uncheck.svg" alt="" />
            </div>
          </li>
        </ul>
      </main>
      <footer>
        <div><button>선택완료</button></div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "share",
  data() {
    return {
      isActive: 1,
      kakaoList: [
        { seq: "", name: "이규민", phone: "010-7469-1022" },
        { seq: "", name: "윤원식", phone: "010-3459-1122" },
        { seq: "", name: "오하진", phone: "010-7469-1322" },
        { seq: "", name: "이규영", phone: "010-7139-5522" },
        { seq: "", name: "이규민", phone: "010-7469-1022" },
        { seq: "", name: "윤원식", phone: "010-3459-1122" },
        { seq: "", name: "오하진", phone: "010-7469-1322" },
        { seq: "", name: "이규영", phone: "010-7139-5522" },
      ],
      phoneList: [
        { seq: "", name: "윤원식", phone: "010-3459-1122" },
        { seq: "", name: "오하진", phone: "010-7469-1322" },
        { seq: "", name: "이규영", phone: "010-7139-5522" },
        { seq: "", name: "이규민", phone: "010-7469-1022" },
        { seq: "", name: "윤원식", phone: "010-3459-1122" },
        { seq: "", name: "오하진", phone: "010-7469-1322" },
        { seq: "", name: "윤원식", phone: "010-3459-1122" },
        { seq: "", name: "오하진", phone: "010-7469-1322" },
        { seq: "", name: "이규영", phone: "010-7139-5522" },
        { seq: "", name: "이규민", phone: "010-7469-1022" },
        { seq: "", name: "윤원식", phone: "010-3459-1122" },
        { seq: "", name: "오하진", phone: "010-7469-1322" },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: "paymentdetail" });
    },
    toggleActive(val) {
      this.isActive = val;
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
}
.contents .header,
.filter-list {
  margin-bottom: 30px;
}
.contents .header input {
  width: 100%;
  border: none;
  padding: 20px;
  border-radius: 10px;
}
.filter-list {
  display: flex;
}
.filter-list div {
  text-align: center;
  width: 50%;
  padding: 10px;
}
.filter-list div.active {
  text-decoration: underline;
  text-decoration-color: orange;
  text-decoration-thickness: 3px;
}
.filter-list div:first-child {
  border-right: 1px solid gray;
}
.contents main {
  padding: 20px 10px;
}
.share-user .user-list {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 100px;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  padding: 0 10px 0 30px;
}
.share-user .user-list .profile {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
}
.share-user .user-list img {
  width: 100%;
}
.share-user .user-list .select {
  width: 50px;
  height: 50px;
}
.info li {
  padding: 10px 20px;
}
footer div {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

footer button {
  width: 100%;
  box-shadow: none;
  margin: 0;
  border-radius: 0;
  background-color: gray;
  color: white;
}
</style>
