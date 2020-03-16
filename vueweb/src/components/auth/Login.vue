<!--Panel logowania-->

<template>
  <div class="login-form">
    <h2 class="login-heading">Login</h2>
    <form @submit.prevent="login">

      <div class="form-control">
        <label for="email">Username/Email</label>
        <input type="email" name="username" id="username" class="login-input" v-model="username">
      </div>

      <div class="form-control mb-more">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" class="login-input" v-model="password">
      </div>

      <div class="form-control">
        <button type="submit" class="btn-submit">Login</button>
      </div>

    </form>
  </div>
</template>

<script>

export default {
// jak tu https://scotch.io/tutorials/handling-authentication-in-vue-using-vuex#toc-setting-up-the-application-modules
// trzeba ogarnac vuex i axios (axios juz zainstalowane)
//https://www.youtube.com/watch?v=Vd1YwbHrY1Q&list=PLfdtiltiRHWF1jqLcNO_2jWJXj9RuSDvY&index=1
// i od strony backendu ogarnac php i laravel

    name: 'login',
    data() {
        return {
        username: '',
        password: '',
        }
    },
    methods: {
        /*login() {
        this.$store.dispatch('login', {
            username: this.username,
            password: this.password,
        }).then(()=>this.$router.push('/'))
        .catch(err => console.log(err))
        }*/
    }
}
//example@gmail.com 1234

</script>

<style scoped>

</style>