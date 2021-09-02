<template>
  <div class="view-a">我是A页面

    <button @click="onGetCUstomUa">获取自定义ua</button>
  </div>
</template>

<script>
export default {
  name: 'viewA',
  methods: {
    onGetCUstomUa () {
      chrome.runtime.sendMessage({type: 'getCustomUserAgent'}, function(response) {
        alert(JSON.stringify(response))
      })
    }
  }
}
</script>

<style lang="less">
.view-a{
  background-color: cadetblue;
  height: 100%;
  font-size: 60px;
}
</style>