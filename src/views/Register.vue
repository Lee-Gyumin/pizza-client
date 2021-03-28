<template>
  <div class="contents">
    <header>
      <div class="top-left">
        <img src="../assets/img/arrow-left.png" alt="" />
      </div>
      <div class="top-center">회원가입</div>
      <div class="top-right"></div>
    </header>
    <main></main>
    <footer></footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contents {
  height: 100%;
  padding: 0 20px;
}
header {
  font-size: 2.5rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  top: 0;
  display: flex;
  height: 5%;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
}
header .top-left,
.top-right {
  width: 40px;
}
header .top-left img {
  width: 100%;
}
</style>
