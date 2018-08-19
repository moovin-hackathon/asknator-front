<template>
    <div>
     <div class="main-content">
    <div class="container">
      <div class="row">
        <aside id="welcome-text" class="text-justify col-md-6">
          <article>
            <h1 class="text-center">intro</h1>
            <p>
              {{msg}}
            </p>
          </article>
        </aside>
        <section class="offset-md-1 col-md-5">
          <form action="" method="post">
            <div class="box-login">
              <div class="">
                <label for="field-email">
                  E-mail
                </label>
              </div>
              <div class="">
                <input type="text" name="email" id="field-email">
                <label for="field-email">
                  Senha
                </label>
                <input type="text" name="email" id="field-senha">
                <input type="submit" id="submit" value="logar">
              </div>
              <a href="#" class="link-register">Cadastrar-se</a>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
    };
  },
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
