<template>
  <div class="home">
    <div class="header">
      <div class="logo">Smart</div>
    </div>
    <div class="body">
      <div class="sidebar">
        <div v-for="m in modules" :key="m.code" class="module" :class="{ active: m.code === activeModule }" @click="moduleChange(m)">
          <i class="iconfont" :class="`icon-${m.icon}`"/>
          <p class="text">{{ m.name }}</p>
        </div>
      </div>
      <div class="menu"/>
      <div class="main">
        <div class="tags"/>
        <router-view class="page"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      activeModule: '',
    }
  },
  computed: {
    ...mapGetters(['modules']),
  },
  watch: {
    // 根据路由动态切换模块样式
    '$route.fullPath': {
      handler (fullPath) {
        this.activeModule = fullPath.split('/')[1]
      },
      immediate: true,
    },
  },
  methods: {
    moduleChange ({ route }) {
      this.$router.push({ name: route })
    },
  },
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
      background-color: #2c3d59;
      .module {
        border-left: 3px solid #2c3d59;
        margin: 30px 0;
        text-align: center;
        color: rgba(255, 255, 255, 0.6);
        cursor: pointer;
        .iconfont {
          font-size: 30px;
        }
        .text {
          margin-top: 5px;
          font-size: 10px;
        }
        &.active {
          color: #fff;
          border-color: #fff;
        }
      }
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
