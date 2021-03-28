<template>
  <div id="app">
    <router-view
      @setPageMode="setPageMode"
      @setFullscreen="setFullscreen"
    ></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageMode: "Main",
      fullscreen: true,
    };
  },
  methods: {
    setPageMode: function (mode, query) {
      console.log("App.vue page mode : " + mode);
      if (this.pageMode != mode) {
        if (query) {
          this.$router.push({ name: mode, query: query });
        } else {
          this.$router.push({ name: mode });
        }
        this.pageMode = mode;
        if (this.pageMode == "Main") {
          this.onScroll();
        }
      }
    },
    setFullscreen: function (bool) {
      this.fullscreen = bool;
    },
  },
};
</script>
<style>
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
} /* this targets the default scrollbar (compulsory) */
::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.1);
} /* the new scrollbar will have a flat appearance with the set background color */

::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
} /* this will style the thumb, ignoring the track */

::-webkit-scrollbar-button {
  background-color: #444;
  height: 0px;
} /* optionally, you can style the top and the bottom buttons (left and right for horizontal bars) */

::-webkit-scrollbar-corner {
  background-color: #363636;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html {
  font-size: 8px;
}
li {
  list-style-type: none;
}
img {
  vertical-align: bottom;
}
button {
  height: 40px;
  margin-bottom: 15px;
  border: none;
  border-radius: 10px;
  background-color: white;
  outline: none;
  box-shadow: 3px 6px 3px 0 rgb(0 0 0 / 8%);
}
#app {
  width: 100vw;
  height: 100vh;
}

.bg {
  background-color: #ffeecb;
}
</style>
