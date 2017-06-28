<template>
  <div class="login">
    <div class="login-flex">
      <div class="login-logo">
        <h1>Axios</h1>
      </div>
  
      <div class="login-form">
        <div class="login-input vux-1px-b">
          <label for="user">账号</label>
          <input id="user"
                 v-model="user"
                 placeholder="用户名"></input>
        </div>
  
        <div class="login-input vux-1px-b">
          <label for="pass">密码</label>
          <input id="pass"
                 v-model="pass"
                 type="password"
                 placeholder="密码"></input>
        </div>
  
        <div class="login-submit">
          <x-button type="primary"
                    @click.native="loginSubmit">登录</x-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Loading, Toast, XButton } from 'vux'

export default {
  name: 'Login',
  components: {
    Loading,
    Toast,
    XButton
  },
  data () {
    return {
      msg: 'Hello World!',
      user: '',
      pass: '',
      LoginData: {}
    }
  },
  methods: {
    loginSubmit () {
      this.$vux.loading.show({
        text: '登录中...'
      })
      this.$axios({
        method: 'post',
        url: '/login',
        data: {
          username: this.user,
          password: this.pass
        }
      }).then((res) => {
        this.$vux.loading.hide()
        console.log(res)
        if (res.data.success) {
          this.$vux.toast.show({
            text: '登录成功！'
          })
          this.$router.push({ path: '/' })
        } else {
          this.$vux.toast.show({
            text: res.data.errorMsg,
            type: 'cancel',
            width: '180px'
          })
        }
      }).catch((err) => {
        console.log(err)
        this.$vux.loading.hide()
        this.$vux.toast.show({
          text: '网络错误！',
          type: 'cancel',
          width: '180px'
        })
      })
    }
  }
}
</script>

<style scoped>
.login {
  box-sizing: border-box;
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.login-flex {
  width: 100%;
}

.login-logo {
  text-align: center;
  margin-bottom: 100px;
  font-size: 16px;
}

.login-form {
  padding: 0 50px;
}

.login-input {
  box-sizing: border-box;
  margin: 25px auto 0;
  padding: 5px 10px;
}

.login-input input {
  background-color: inherit;
  border: 0;
  font-size: 14px;
  vertical-align: top;
  line-height: 24px;
}

.login-input .icon {
  display: inline-block;
  min-width: 17px;
  font-size: 20px;
  line-height: 24px;
  margin-right: 18px;
  color: #B2B2B2;
}

.login-submit {
  margin-top: 30px;
  text-align: center;
}

.login-submit button {
  border: 0;
  border-radius: 44px;
}

.login-links {
  text-align: center;
  margin-top: 20px;
  font-size: 0;
}

.login-links a {
  font-size: 12px;
  padding: 0 10px;
  color: #0076FF
}
</style>
