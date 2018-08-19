<template>
    <section>
        <div id="box-ask" class="offset-md-2  col-md-10">
            <form action="" method="get">
                <h1>
                    Sobre o que você quer saber?
                </h1>
                <input type="text" name="ask-me" class="ask-me"> 
            </form>
        </div>
    </section>
</template>
<script>
export default {
  name: 'ask',
};
</script>

<style scoped>
#box-ask{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-itens: center;
    height: 92vh;
}
#box-ask h1{
    margin: 0 auto;
    margin-bottom: 30px;
}

#box-ask input{
    display: block;
    margin: 0 auto;
    width: 60%;
    padding: 15px;
}
</style>