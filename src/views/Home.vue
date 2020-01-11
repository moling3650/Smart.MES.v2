<template>
  <div class="home">
    <div class="header">
      <div class="logo">Smart</div>
    </div>
    <div class="body">
      <div class="sidebar"/>
      <div class="menu"/>
      <div class="main">
        <div class="tags"/>
        <router-view class="page"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .header {
    flex-basis: 40px;
    display: flex;
    .logo {
      flex-basis: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #eee;
      background-color: #4b7efe;
    }
  }
  .body {
    flex-grow: 1;
    display: flex;
    .sidebar {
      flex-basis: 70px;
      background: #2c3d59;
    }
    .menu {
      flex-basis: 230px;
      background-color: #f2f6fa;
    }
    .main {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      background-color: #f7f8fa;
      .tags {
        flex-basis: 24px;
        margin: 3px 0;
        background-color: #fff;
      }
      .page {
        flex-grow: 1;
        margin: 3px;
        background-color: #fff;
      }
    }
  }
}
</style>
