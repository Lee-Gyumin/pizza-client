<template>
  <div class="menu-container">
    <div class="hamburgur">
      <img src="../assets/images/hamburgur.png" @click="showToggle()" alt="" />
    </div>
    <div class="menu-contents" :class="{ active: showActive }">
      <div class="ham-menu">
        <ul class="nav">
          <li><div>이규민</div></li>
          <li>
            <div>적립금 <span class="point">4000</span>원</div>
          </li>
          <li class="flex">
            <div>알림설정</div>
            <div
              class="toggle-btn"
              :class="{ active: toggleActive }"
              @click="alarmToggle"
            >
              <div><span> ON</span></div>
              <div><span>OFF</span></div>
            </div>
          </li>
        </ul>
        <ul class="nav-footer">
          <li><div>피자페이 사용방법</div></li>
          <li><div>이용약관</div></li>
          <li><div>개인정보 처리방침</div></li>
          <li><div>회사소개</div></li>
          <li><div>로그아웃</div></li>
        </ul>
      </div>

      <div class="close" @click="showToggle()">
        <img src="../assets/images/close.png" alt="" />
      </div>
    </div>
    <div class="bg" @click="showToggle()" :class="{ active: showActive }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showActive: false,
      toggleActive: false,
    };
  },
  methods: {
    showToggle() {
      this.showActive = !this.showActive;
    },
    alarmToggle() {
      this.toggleActive = !this.toggleActive;
    },
  },
};
</script>

<style scoped>
.menu-container {
  position: absolute;
  top: 0;
  right: 0;
}
.hamburgur {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50px;
  text-align: right;
}
.hamburgur img {
  width: 40px;
  height: 40px;
}

.menu-contents {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  z-index: 99999;
  background-color: white;
  font-size: 2rem;
}
.menu-contents.active {
  display: block;
}
.ham-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 100px 20px;
}
.ham-menu li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-bottom: 20px;
}
.ham-menu .nav li.flex {
  font-size: 1.8rem;
}
.ham-menu li.info div {
  padding: 0 5px;
}
.ham-menu li.info div:first-child {
  border-right: 1px solid gray;
}
.toggle-btn {
  position: relative;
  display: flex;
  width: 80px;
  height: 80%;
  color: orange;
  border: 1px solid orange;
  padding: 5px;
  border-radius: 15px;
  transition: 0.5s;
}
.toggle-btn.active {
  color: gray;
  border: 1px solid gray;
}
.toggle-btn::before {
  content: "";
  position: absolute;
  top: 50%;
  right: 1%;
  width: 50%;
  height: 90%;
  transform: translateY(-50%);
  border-radius: 15px;
  background-color: gray;
  transition: 0.4s ease;
  background-color: orange;
}
.toggle-btn.active::before {
  right: 49%;
  background-color: gray;
}

.toggle-btn div {
  width: 50%;
  text-align: center;
}
.point {
  font-weight: bold;
  color: orange;
  font-size: 3rem;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
}
.close img {
  width: 100%;
}
.bg {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: gray;
  opacity: 0.5;
}
.bg.active {
  display: block;
}
</style>
