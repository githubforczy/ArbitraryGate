<template>
  <div class="layout">
    <el-container>
      <el-aside width="150px">
        <!-- 侧边导航栏 -->
        <SideBar></SideBar>
      </el-aside>
      <el-container>
        <el-header>
          <!-- 顶部导航栏 -->
          <Header></Header>
        </el-header>
        <el-main>
          <!-- 路由渲染出口 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from './Header'
import SideBar from './SideBar'

export default {
  name: 'Layout',
  components: {
    Header,
    SideBar
  }
}
</script>

<style lang="scss">
.layout {
  & > .el-container {
    height: 100vh;
  }

  .el-aside {
    height: 100%;
  }

  .el-header {
    padding: 0;
  }
}
</style>