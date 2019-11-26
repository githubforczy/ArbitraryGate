<template>
  <div class="header">
    <span class="logo">HROSaaS</span>
    <el-dropdown @command="handleCommand">
      <span class="user-info">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <span class="username">admin</span>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="userInfo">个人信息</el-dropdown-item>
        <el-dropdown-item command="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-drawer
      title="个人信息"
      size='15%'
      :visible.sync="drawer"
      :direction="direction">
      <div class="block">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" shape="square" :size="100"></el-avatar>
        <span>{{userInfo.name}}</span>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data (){
    return{
      drawer: false,
      direction: 'rtl',
      userInfo:{
        name: ''
      }
    };
  },
  methods: {
    handleCommand(command) {
      // console.log(command)
      switch (command) {
        case 'logout':
          this.$router.push({ name: 'login' })
          break;
        case 'userInfo':
          this.drawer=true;
          this.getUserInfo()
          break;
        default:
          break;
      }
    },
    getUserInfo() {
      this.$axios({
        url: '/user/info'
      }).then(({ data }) => {
        console.log(data)
        const { name } = data
        this.userInfo.name = name
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: center;

  .logo {
    margin-right: auto;
  }

  .user-info {
    display: flex;
    align-items: center;
    cursor: pointer;

    .username {
      margin-left: 8px;
    }
  }
}
</style>