<template>
  <div id="app">
    <!-- <img
      id="tu1"
      src="http://5b0988e595225.cdn.sohucs.com/images/20190214/f25953ec264446888d00a42c6a0fde62.jpeg"
    > -->
    <h1>APEX英雄榜</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  display: -webkit-flex;
  color: #2c3e50;
  margin-top: 60px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

/* #tu {
  width: 100%;
  height: 50%;
  display: flex;
} */

#tu1 {
  width: auto;
  height: auto;
  max-width: 10%;
  max-height: 10%;
  /* text-align: center; */
}
</style>
