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
        <div class="tags-wrap">
          <ul ref="tags" class="tags">
            <li v-for="t in visiableTags" :key="t.code" class="tag" :class="{ active: t.code === activeTag }" @click="clickTag(t)">
              <i v-if="!t.parentCode" class="iconfont" :class="`icon-${t.icon}`"/>
              <span v-if="t.parentCode">{{ t.name }}</span>
              <i v-if="t.parentCode" class="iconfont icon-close-circle" style="font-size: 16px;" @click.stop="closeTag(t)"/>
            </li>
          </ul>
          <div class="tags-more">
            <el-dropdown size="mini">
              <span class="el-dropdown-link">
                <i class="iconfont icon-gengduo"/>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="closeAllTags">关闭全部</el-dropdown-item>
                <el-dropdown-item @click.native="closeOtherTags">关闭其他标签</el-dropdown-item>
                <el-dropdown-item v-for="(t, i) in hideTags" :key="t.code" :divided="!i" @click.native="clickTag(t)">{{ t.name }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>

        <router-view class="page"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { selectMenuByKey } from '@/utils/dom'

export default {
  name: 'Home',
  data () {
    return {
      activeModule: '',
      filterText: '',
      activeTag: '',
      tags: [],
      maxVisiableTag: 3,
    }
  },
  computed: {
    ...mapGetters(['menuMap', 'modules']),

    // 根据激活的模块生成菜单树
    menuTree () {
      if (!this.activeModule) {
        return []
      }
      const m = this.menuMap[this.activeModule]
      if (!m) {
        console.error(`找不到编号为${this.activeModule}的模块`)
        return []
      }
      return m.children || []
    },

    visiableTags () {
      return this.tags.slice(0, this.maxVisiableTag)
    },

    hideTags () {
      return this.tags.slice(this.maxVisiableTag)
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

    // 根据激活标签页面跳转路由
    activeTag (value) {
      const route = this.menuMap[value]
      if (this.$route.name !== route.code) {
        selectMenuByKey(route.code)
        this.$router.push({ name: route.code })
      }
    },
  },

  mounted () {
    if (this.$route.name === 'home' && this.modules.length) {
      this.moduleChange(this.modules[0])
    }
  },

  methods: {
    // 筛选菜单的方法
    filterMenu (value, data) {
      return !value || ~data.name.indexOf(value)
    },

    // 改变模块
    moduleChange (m) {
      this.tags = [m]
      this.activeTag = m.code
    },

    // 激活标签
    _setActiveTag (tag) {
      // 查找当前标签在标签列表的下标
      const index = this.tags.findIndex(t => t.code === tag.code)
      const maxVisiableTagIndex = this.maxVisiableTag - 1
      if (!~index) { // 如果菜单页面没在标签列表
        this.tags.splice(maxVisiableTagIndex, 0, tag)
      } else if (index > maxVisiableTagIndex) { // 如果菜单页面在标签列表但已折叠
        this.tags.splice(index, 1)
        this.tags.splice(maxVisiableTagIndex, 0, tag)
      }
      this.activeTag = tag.code
    },

    // 点击菜单
    menuClick (data) {
      if (!data.route) {
        return
      }
      this._setActiveTag(data)
    },

    // 点击标签
    clickTag (tag) {
      this._setActiveTag(tag)
    },

    // 关闭标签
    closeTag (tag) {
      const index = this.tags.findIndex(t => t.code === tag.code)
      this.tags.splice(index, 1)
      if (this.activeTag === tag.code) {
        this.activeTag = this.tags[index] ? this.tags[index].code : this.tags[index - 1].code
      }
    },

    // 关闭所有菜单页面激活模块页面
    closeAllTags () {
      this.tags = [this.tags[0]]
      this.activeTag = this.tags[0].code
    },

    // 关闭所有非激活菜单页面
    closeOtherTags () {
      this.tags = this.tags.filter(tag => !tag.parentCode || tag.code === this.activeTag)
    },
  },
}
</script>

<style lang="scss">
.menu {

  .menu-tree {

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

      .tags-wrap {
        flex-basis: 24px;
        margin: 3px 0;
        background-color: #fff;
        display: flex;

        .tags {
          flex-grow: 1;
          display: flex;
          align-items: center;

          .iconfont {
            font-size: 18px;

            &.icon-close-circle {
              font-size: 16px;
            }
          }

          .tag {
            position: relative;
            height: 18px;
            padding: 0 20px 0 10px;
            border: 1px solid rgba(61, 77, 102, 0.2);
            margin: 0 3px;
            font-size: 10px;
            line-height: 18px;
            cursor: pointer;

            &:first-child {
              width: 50px;
              padding: 0;
              text-align: center;
            }

            &:hover {
              background-color: rgba(61, 77, 102, 0.1);

              .icon-close-circle {
                display: block;
                position: absolute;
                top: 0;
                right: 2px;
              }
            }

            &.active {
              color: #fff;
              background-color: #4b7efe;
            }

            .icon-close-circle {
              display: none;
            }
          }
        }

        .tags-more {
          flex-basis: 30px;
          text-align: center;

          .iconfont {
            cursor: pointer;
          }
        }
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
