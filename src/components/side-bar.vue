<template>
    <aside id="left-menu" class=" col-md-2">
        <div id="logo" class=" col-md-12">
            <img src="../assets/logo-light.png" alt="Asknator"  title="Asknator"/>
        </div>
        <img src="../assets/avatar-1.png" class="avatar"/>
        <nav>
            <ul>
                <li>
                    <a class="profile">Menu Perfil</a>
                </li>
                <li>
                    <a class="answering">Histórico</a>
                </li>
                <li>
                    <a class="answering">Respondendo</a>
                </li>
                <li>
                    <a class="asking">Perguntando</a>
                </li>
                <li>
                    <a class="logout">Sair</a>
                </li>
            </ul>
        </nav>
    </aside>
</template>
<script>
export default {
  name: 'ask',
};
</script>
<style scoped>
#left-menu{
    background-color: #1A237E;
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    min-height: 670px;
    box-sizing: border-box;
    padding: 20px 0;
    box-shadow: 3px 2px 19px #1A237E;
    z-index: 1;
}
#left-menu .avatar{
    border: 1px solid #FFF;
    display: block;
    margin: 0 auto;
    border-radius: 20px;
    padding: 5px;
    margin-top: 20px;
}
#left-menu nav ul{
    text-align: center;
    padding: 0;
    margin-top: 20px;
    font-size: 18px;
    text-align: left;
    width: 100%;
}
#left-menu nav ul li{
    padding: 25px;
    position: relative;
    margin-bottom: 5px;
    transition: .5s all;
}
#left-menu nav ul li:hover{
    background: #ccc;
}
#left-menu nav ul li a{
    color: #FFF;
    font-weight: 600;
}
</style>