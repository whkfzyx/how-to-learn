<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import './util.js'
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';

body {
  background-color: #fbf9fe;
}

html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

#app {
  height: 100%;
}
</style>
