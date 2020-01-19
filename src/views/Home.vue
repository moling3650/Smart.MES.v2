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
      <div class="menu">
        <div class="menu-filter">
          <el-input v-model.trim="filterText" size="mini" prefix-icon="el-icon-search" placeholder="搜索菜单"/>
        </div>
        <div class="menu-tree">
          <el-scrollbar wrap-class="scrollbar-wrap" view-class="scrollbar-view" :native="false">
            <el-tree ref="tree" class="tree" :data="menuTree" :indent="24" :render-after-expand="false" :filter-node-method="filterMenu" @node-click="menuClick">
              <span :id="`tree-node__${data.code}`" slot-scope="{ data }" class="tree-node">
                <i class="iconfont" :class="`icon-${data.icon}`"/>
                <span class="node-label">{{ data.name }}</span>
              </span>
            </el-tree>
          </el-scrollbar>
        </div>
      </div>
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
      filterText: '',
    }
  },
  computed: {
    ...mapGetters(['modules']),

    // 根据激活的模块生成菜单树
    menuTree () {
      const m = this.modules.find(m => m.code === this.activeModule)
      if (!m) {
        console.error(`找不到编号为${this.activeModule}的模块`)
        return []
      }
      return m.children || []
    },
  },
  watch: {
    // 根据路由动态切换模块样式
    '$route.fullPath': {
      handler (fullPath) {
        this.activeModule = fullPath.split('/')[1]
      },
      immediate: true,
    },
    // 根据输入筛选菜单
    filterText (value) {
      this.$refs.tree.filter(value)
    },
  },
  mounted () {
    if (this.$route.name === 'home' && this.modules.length) {
      this.moduleChange(this.modules[0])
    }
  },
  methods: {
    // 改变模块
    moduleChange ({ route, children }) {
      this.$router.push({ name: route })
    },

    // 筛选菜单的方法
    filterMenu (value, data) {
      return !value || ~data.name.indexOf(value)
    },

    // 点击菜单
    menuClick (data) {
      if (!data.route) {
        return
      }
    },
  },
}
</script>

<style lang="scss">
.menu-tree{
  .el-tree-node__expand-icon {
    font-size: 16px;
    color: #2c3d59;

    &.is-leaf {
      color: transparent;
    }
  }

  .el-tree-node__content:hover {
    background-color: rgba(75, 126, 254, .1);
  }

  .el-tree-node__content.is-selected {
    border-radius: 3px;
    color: #fff;
    background-color: rgb(75, 126, 254);
  }

}
</style>

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

        &.active {
          color: #fff;
          border-color: #fff;
        }

        &:hover {
          color: #fff;
        }

        .iconfont {
          font-size: 30px;
        }

        .text {
          margin-top: 5px;
          font-size: 10px;
        }
      }
    }

    .menu {
      position: relative;
      flex-basis: 230px;
      background-color: #f2f6fa;

      &-filter {
        margin: 15px 40px;
      }

      &-tree {
        position: absolute;
        top: 58px;
        left: 0;
        bottom: 0;
        right: 0;

        .tree {
          margin: 0 20px;
          background: inherit;

          .iconfont {
            margin-right: 5px;
            font-size: 18px;
            vertical-align: bottom;
          }
        }
      }
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
