<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script >

export default {
  name: 'app',
}
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
//  justify-content: space-evenly;
  //margin-top: 60px;
}

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.5;
}
</style>
