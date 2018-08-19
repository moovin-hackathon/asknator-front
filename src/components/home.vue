<template>
  <div>
    <div class="main-content">
      <div class="container">
        <div class="row">
          <aside id="welcome-text" class="text-justify col-md-6">
            <article>
              <h1 class="text-center">Seja bem vindo!</h1>
              <p>
                {{msg}}
              </p>
            </article>
          </aside>
          <section class="offset-md-1 col-md-5">
            <div class="box-login">
              <div class="">
                <label>
                  E-mail
                </label>
              </div>
              <div class="">
                <input type="text" v-model="email" id="field-email">
                <label for="field-email">
                  Senha
                </label>
                <input type="password" v-model="password" id="field-senha">
                <input type="submit" id="submit" value="logar" @click="doLogin">
              </div>
              <a href="register" class="link-register">Cadastrar-se</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import axios from 'axios';
  import router from 'vue-router';

  export default {
    name: 'Home',
    data: () => ({
      msg: 'Asknator é uma aplicação que busca sanar dúvidas dos usuários de forma rápída e em tempo real através de seu chat. Das questões mais simples sobre linguagem de programação até o funcionamento incorreto no seu código. É permitido apenas duas conversas, para perguntar e outra para responder, assim tornando a conversação mais focada na resolução. O sistema também é constituído de uma pontuação onde os perfis mais relevantes são recompensados conforme seus pontos.',
      email: null,
      password: null
    }),
    methods:{
      doLogin () {
        axios.post('http://localhost:8080/user/login', {
          email: this.email,
          password: this.password
        })
          .then(function (response) {
            window.location = "http://localhost:8081/ask"
          })
          .catch(function (error) {
            window.location = "http://localhost:8081/ask"
          });
      }
    }
  };
</script>
<style scoped>

  .main-content{
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 74.3vh;
  }

  .box-login{
    background-color: #1A237E;
    padding: 40px 20px 25px;
    color: #FFF;
  }
  .box-login h2{
    margin-bottom: 20px;
  }
  .box-login label{
    display: block;
    text-align: left;
    margin: 20px auto 5px;
    width: 80%;
  }
  .box-login [id^="field"]{
    display: block;
    margin: 0 auto;
    width: 80%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 12px;
  }
  .box-login #submit{
    margin-top: 20px;
    border: 0 none;
    background-color: #BBDEFB;
    width: 80%;
    padding: 8px;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
    margin-top: 40px;
  }
  .box-login .link-register{
    color: #FFF;
    margin-top: 15px;
    display: block;
  }
</style>
