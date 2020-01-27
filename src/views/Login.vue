<template>
  <div id="login">
    <el-form ref="loginForm" :model="loginForm" :rules="formRules" class="login-form" label-position="left">
      <h3 class="title">Smart.MES</h3>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" name="username" placeholder="请输入账户">
          <i slot="prefix" class="iconfont icon-user"/>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" name="password" placeholder="请输入密码" @keyup.enter.native="handleLogin">
          <i slot="prefix" class="iconfont icon-key"/>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="submit-btn" :loading="loading" type="primary" @click="handleLogin">
          Sign in
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    const validatePass = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      loginForm: {
        username: '',
        password: '',
      },
      formRules: {
        username: { required: true, trigger: 'blur', message: '请输入用户名' },
        password: { required: true, trigger: 'blur', validator: validatePass },
      },
    }
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
#login {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: #eee;
  background-color: #2d3a4b;

  .login-form {
    width: 400px;
    margin-top: -150px;

    .title {
      font-size: 26px;
      font-weight: bold;
      text-align: center;
    }

    .iconfont {
      font-size: 24px;
    }

    .submit-btn {
      width: 100%;
    }
  }
}
</style>
