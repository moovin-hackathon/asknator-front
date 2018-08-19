<template>
   <section class="offset-md-4 col-md-4">
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
                <input type="submit" id="submit" value="Cadastrar">
              </div>
              <a href="/" class="link-register">Logar</a>
            </div>
          </form>
        </section>
</template>
<style scoped>
section{
    margin-top: 160px;
    
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