<template>
  <div class="contents">
    <header>
      <div class="hamburgur">
        <img src="../assets/images/hamburgur.png" alt="" />
      </div>
      <div class="profile">
        <div class="profile-img">
          <img src="../assets/images/profile.png" alt="" />
        </div>
        <div class="desc">
          이규민님 <br />
          사용가능한 적립금<br />
          <span>0</span><br />
          입니다.
        </div>
      </div>
      <ul class="menu">
        <li :class="{ active: isActive }" @click="toggleActive()">결제내역</li>
        <li>모임통장</li>
      </ul>
    </header>
    <main>
      <ul class="pizza-list">
        <li v-for="(data, idx) in pizzaList" :key="idx">
          <div class="name">
            <div>
              <img
                src="../assets/images/pizza-logo.png"
                alt=""
                class="logo"
              />{{ data.name }} <span>({{ data.paymentDate }})</span>
            </div>
            <img src="../assets/images/share.png" alt="" />
          </div>
          <div class="pizza-desc">
            <div>
              금액: <span class="price">{{ data.price }}</span>
              <span
                >( <span class="point"> {{ data.point }}</span> 적립)</span
              >
            </div>
            <div><button @click="goDetail()">자세히보기</button></div>
          </div>
        </li>
      </ul>
    </main>
    <footer class="float-btn">
      <div
        class="button"
        :class="{ active: showFloat }"
        @click="showFloatMenu"
      ></div>
      <div class="filter" :class="{ active: showFloat }">
        <ul>
          <li>정렬</li>
          <li>전체보기</li>
          <li>최신순</li>
          <li>미완료</li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      isActive: true,
      showFloat: false,
      pizzaList: [
        {
          name: "계림 닭도리탕",
          point: 2500,
          price: 25000,
          menu: [],
          paymentDate: "21-01-02",
        },
        {
          name: "서울 쭈꾸미",
          point: 1000,
          price: 10000,
          menu: [],
          paymentDate: "21-01-12",
        },
        {
          name: "홍콩반점",
          point: 500,
          price: 15000,
          menu: [],
          paymentDate: "21-01-15",
        },
        {
          name: "엉터리 생고기 - 가산점",
          point: 2500,
          price: 125000,
          menu: [],
          paymentDate: "21-01-25",
        },
      ],
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
    showFloatMenu() {
      this.showFloat = !this.showFloat;
    },
    goDetail() {
      this.$router.push({ name: "paymentdetail" });
    },
  },
};
</script>

<style scoped>
.contents {
  background: white;
  padding: 0;
}
.contents header,
.contents main {
  padding: 10px;
}
header {
  position: unset;
  width: 100%;
  display: block;
  border: none;
  height: auto;
  text-align: center;
}
header .hamburgur {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50px;
  text-align: right;
}
header .hamburgur img {
  width: 40px;
  height: 40px;
}
header .profile-img {
  position: relative;
  background-color: gainsboro;
  width: 130px;
  height: 130px;
  margin: 10px auto 20px;
  border: 1px solid gray;
  border-radius: 50%;
}
header .profile-img img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
}
header .profile .desc {
  font-size: 1.5rem;
  width: 50%;
  margin: 0 auto;
  line-height: initial;
}
header .profile .desc span {
  font-weight: bold;
  font-size: 2rem;
  color: orange;
}
header .profile .desc span::after,
.pizza-list .price::after,
.pizza-list .point::after {
  content: "원";
  color: #888888;
}
.menu {
  font-size: 1.5rem;
  display: flex;
  padding: 0 20px;
}
.menu li {
  font-size: 2rem;
  width: 50%;
}
.menu li.active {
  text-decoration: underline;
  text-decoration-color: orange;
  text-decoration-thickness: 3px;
}
main {
  padding: 0 10px 10px !important;
  width: 100%;
}
main .pizza-list li {
  padding: 20px;
  border-radius: 15px;
  box-shadow: 1px 3px 3px gainsboro;
  background: #ffeecb;
  margin-bottom: 20px;
}
main .pizza-list .name {
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 35px;
  margin-bottom: 20px;
}
main .pizza-list .name .logo {
  width: 35px;
  margin-right: 5px;
}
main .pizza-list .name img {
  width: 30px;
}
main .pizza-list .name span {
  font-weight: normal;
}
main .pizza-list span {
  font-size: 1.5rem;
}
main .pizza-list .point {
  font-size: 1.8rem;
  color: orange;
}
main .pizza-list .price {
  font-size: 2rem;
}
main .pizza-list .pizza-desc {
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
main .pizza-list .pizza-desc button {
  padding: 10px;
  height: auto;
  margin: 0;
  border-radius: 20px;
}
footer.float-btn {
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  background-color: #ff8800;
  border-radius: 50%;
  transition: 0.2s;
}

footer.float-btn .button {
  width: 50px;
  height: 50px;
  transition: 0.3s;
}
footer.float-btn .button.active {
  transform: rotate(225deg);
}

footer.float-btn .button::before,
footer.float-btn .button::after {
  content: "";
  position: absolute;
  top: 23px;
  left: 10px;
  border-radius: 10px;
  width: 30px;
  height: 4px;
  background-color: white;
}

footer.float-btn .button::after {
  transform: rotate(90deg);
}
footer .filter {
  position: absolute;
  width: 120px;
  bottom: -340%;
  right: 5px;
  background-color: white;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 10px;
  font-size: 1.7rem;
  transition: 0.4s;
  opacity: 0;
}
footer .filter.active {
  bottom: 110%;
  opacity: 1;
}
footer .filter li {
  padding: 5px;
  margin-bottom: 10px;
}
footer .filter li:first-child {
  text-align: center;
}
</style>
