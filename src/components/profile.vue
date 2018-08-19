<template>
    <section>
        <div id="box-profile" class="offset-md-2  col-md-10">
            <form action="" method="get" class="col-md-7">
                <div class="row ">
                    <p class="col-md-1">
                        Nome
                    </p>
                    <input type="text" name="nome" class="nome col-md-9"> 
                </div>
                <div class="row">
                    <h2>Quero responder sobre: </h2>
                </div>
                <div class="row">
                    <label class="col-md-4">
                        <input type="checkbox" name="theme-hmtl" class="theme"> 
                        <span>HTML</span>
                    </label>
                    <label class="col-md-4">
                        <input type="checkbox" name="theme-php" class="theme"> 
                        <span>PHP</span>
                    </label>
                    <label class="col-md-4"> 
                        <input type="checkbox" name="theme-c" class="theme"> 
                        <span>C/C++</span>
                    </label>
                </div>
                <div class="row">
                    <label class="col-md-4">
                        <input type="checkbox" name="theme-css" class="theme"> 
                        <span>CSS</span>
                    </label>
                    <label class="col-md-4">
                        <input type="checkbox" name="theme-java" class="theme"> 
                        <span>JAVA</span>
                    </label>
                    <label class="col-md-4">
                        <input type="checkbox" name="theme-android" class="theme"> 
                        <span>ANDROID</span>
                    </label>
                </div>
                <div class="row">
                    
                    <label class="col-md-4">
                        <input type="checkbox" name="theme-javascript" class="theme"> 
                        <span>JAVASCRIPT</span>
                    </label>
                    <label class="col-md-4">
                        <input type="checkbox" name="theme-python" class="theme"> 
                        <span>PYTHON</span>
                    </label>
                    <label>
                        <input type="checkbox" name="theme-ios" class="theme"> 
                        <span>IOS</span>
                    </label>
                </div>
                <input type="submit" value="salvar" class="col-md-3 "/>
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
#box-profile{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-itens: center;
    height: 92vh;
}
#box-profile p{
    margin: 0 auto;
    margin-bottom: 30px;
    font-size: 31px;
    padding: 5px;
    margin-top: 10px;
        line-height: 82%;
}
#box-profile h2{
    margin: 15px auto 40px;
}
#box-profile label{
    display: inline-block;
    width: 33%;
    text-align: center;
}
#box-profile .nome{
    padding: 0px;
    margin-top: 10px;
    font-size: 12px
}
#box-profile label span{
    width: 130px;
    display: inline-block;
}
#box-profile form{
    margin: 0 auto;
}
#box-profile input:not([type=submit]){
    display: block;
    margin: 0 auto;
    width: 60%;
    padding: 15px;
    margin-bottom: 40px;
}

#box-profile input[type="submit"]{
    padding: 15px;
}
#box-profile input[type="checkbox"]{
    width: 33%;
    display: inline-block;
    margin-bottom: 20px;
}
</style>