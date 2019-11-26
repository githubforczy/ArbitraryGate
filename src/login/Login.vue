<template>
  <div class="login">
    <div class="form-wrapper">
      <el-form>
        <el-form-item>
          <el-input size="medium" placeholder="用户名" v-model="username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input size="medium" placeholder="密码" type="password" v-model="password"></el-input>
        </el-form-item>
      </el-form>
      <div class="btn-wrapper">
        <el-button class="btn" type="primary" size="medium" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginAdmin',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods:{
    login:function(){
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss">
.login {
  height: 100vh;
  background: #545c64;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-wrapper {
    box-sizing: border-box;
    width: 400px;
    height: 200px;
    padding: 24px;
    border-radius: 5px;
    background: #545c64
  }
  .btn-wrapper {
    text-align: center;
    .btn {
      width: 100%;
    }
  }
}
</style>