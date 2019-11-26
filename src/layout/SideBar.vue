<template>
  <div class="sidebar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>功能</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2" @click="openDate">
        <i class="el-icon-date"></i>
        <span slot="title" >日历</span>
      </el-menu-item>
      <el-menu-item index="3" @click="openData">
        <i class="el-icon-s-data"></i>
        <span slot="title" >分析</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      
    }
  },
  methods: {
    handleOpen() {

    },
    handleClose() {

    },
    openDate() {
      this.$router.push({name: 'calendar'})
    },
    openData() {
      this.$router.push({name: 'echarts'})
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  .el-menu {
    height: 100%;
  }
}
</style>