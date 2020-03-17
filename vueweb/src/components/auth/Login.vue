<!--Panel logowania-->

<template>
  <div class="login-form">
    <span class="login-heading">
      <img src="../../assets/DSA_logo1shad.png" />
    </span>
    <form class="form-login" @submit.prevent="login">
      <div class="form-control">
        <input type="email" name="username" id="username" class="login-input" v-model="form.email" placeholder="Email">
      </div>

      <div class="form-control">
        <input type="password" name="password" id="password" class="login-input" v-model="form.password" placeholder="Hasło">
      </div>

      <div class="form-control-btn">
        <button type="submit" class="btn-submit">Zaloguj</button>
      </div>

    </form>
  </div>
</template>

<script>

export default {
// jak tu https://scotch.io/tutorials/handling-authentication-in-vue-using-vuex#toc-setting-up-the-application-modules
// zobaczyc jak handling dla przeterminowanego tokenu
//https://www.youtube.com/watch?v=Vd1YwbHrY1Q&list=PLfdtiltiRHWF1jqLcNO_2jWJXj9RuSDvY&index=1
// i od strony backendu ogarnac php i laravel

    name: 'login',
    data() {
        return {
          form:{
            email: '',
            password: '',
          }
        }
    },
    methods: {
      //pobiera dane z formularzy i przesyla na vuex
      async login() {
        this.$store.dispatch('login', {
            email: this.form.email,
            password: this.form.password,
        }).then(()=>this.$router.push('/'))
        .catch(err => console.log(err))
      }
    }
}
//example@gmail.com 1234

</script>

<style scoped>

.login-form{
  position: absolute;
  width: 360px;
  background: #C4C4C4;
  height: 70%;
  padding: 20px 20px;
  border: 3px solid #F2545B;
  box-shadow: 0px 4px 15px #D63131;
  border-radius: 25px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(top, #7F8A94, #7F8A94 37%, transparent 37%, transparent 100%);
}
.login-heading{
  display: block;
  text-align:center;
}
.login-heading img{
  width: 330px;
  height: 160px;
  opacity: 0.4;
}
.form-control{
  border-bottom: 2px solid #adadad;
  position: relative;
  margin: 30px 0;
}
.form-control input{
  font-size: 15px;
  border: none;
  width: 100%;
  outline: none;
  background: none;
  padding: 5px;
}
::-webkit-input-placeholder {
   text-align: center;
}
.form-control-btn{
  padding-top: 20px;
}
.btn-submit{
  display: block;
  width: 100%;
  height: 50px;
  border: none;
  background: #F2545B;
  color: #fff;
  outline: none;
  cursor: pointer;
  font-size: 20px;
}

</style>