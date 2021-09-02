<template>
  <div id="app">
    <div class="app-router">
      <router-view />
    </div>
    <div class="app-tab">
      <div class="app-tab-item" v-for="(tabName, i) in tabs" :key="i" @click="onToView(tabName)">
        {{ tabName }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      tabs: [
        'viewA',
        'viewB',
        'viewC',
      ]
    }
  },
  methods: {
    onToView (name) {
      this.$router.push({
        name
      })
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  width: 375px;
  height: 200px;
  padding: 15px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .app-router{
    flex: 1;
  }

  .app-tab{
    display: flex;
    align-items: center;
    justify-content: space-between;

    .app-tab-item{
      font-size: 16px;
      color: coral;
      cursor: pointer;
    }
  }
}


</style>
