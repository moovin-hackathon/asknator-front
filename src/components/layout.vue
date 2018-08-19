<template>
    <div class="layout">
        <main-top v-bind:class="{ dark: !isHome, light: isHome }" v-if="!isRegister"/>
        <side-bar v-if="isHome &&  !isRegister" />
        <router-view />
    </div>
</template>
<script>
    import MainTop from '@/components/main-top';
    import SideBar from '@/components/side-bar';
    
    export default { 
        computed: {
            isHome () {
                return this.$router.currentRoute.name !== 'home'
            },
            isRegister () {
                return this.$router.currentRoute.name === 'register'
            }
        },
        components: {
            MainTop,
            SideBar,
        }
     }
</script>
<style scoped>
    body{
        background-color: #e3effb;
    }
</style>