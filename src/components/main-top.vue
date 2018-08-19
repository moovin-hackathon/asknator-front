<template>
<header id="top">
    <div class="container-fluid">
        <div class="row">
        <div id="logo" class=" col-md-2">
            <img src="../assets/logo-dark.png" alt="Asknator"  title="Asknator"/>
        </div>

        <div class="area-login col-md-10 text-right" v-if="!logado">
            <!-- usuario nao logado -->
            <a href="/cadastro">
            cadastro
            </a>
            <span>/</span>
            <a href="/">
            login
            </a>
        </div>

        <div class="area-login col-md-3 text-center offset-md-7" v-if="logado">
            <!-- usuario logado -->
            <div class="row">
                <div class="info-user points col-md-6" >
                    Pontos: <span>{{pontos}}</span>
                </div>
                <div class="info-user user-name col-md-6">
                    Usuário: <span>{{nomeUsuario}}</span>
                </div>
            </div>
        </div>
        </div>
    </div>
</header>
</template>
<script>
export default {
  data: function() {
      return {
            logado: true,
            pontos: '100',
            nomeUsuario: 'manolo'
      }
  }
}
</script>
<style scoped>
header#top{
  position: relative;
  z-index: 1;
}
header#top.light{
  background-color: #BBDEFB;
}
header#top.dark{
  background-color: #1c1282;
}
header .area-login{
  padding-top: 24px;
  text-transform: uppercase;
  
}
header#top.dark .area-login .info-user, header#top.dark .area-login span{
    color: #FFF;
}
header .area-login .info-user span{
    text-transform: lowercase;
    color: #000;
    font-weight: bold;
    
}

header .area-login a, header .area-login span{
  color: #FFF;
}
</style>