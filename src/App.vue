<template>
  <div id="app">
    <div class="folder-items" v-for="(item, index) in items" :key="index">
    <folder-box outlined rounded>
      <folder>
        <img src="./assets/icons/folder.svg"/>
      </folder>
      <folder-label>{{ item }}</folder-label>
    </folder-box>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      items:  ['Musics', 'Document', 'Projects', 'Pictures', 'JavaScript', 'Albums']
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  justify-content: center;
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1f;
  grid-template-rows: 1px auto;
}
.folder-items {
  padding: 10px;
  grid-row-start: 1; 
}
</style>
