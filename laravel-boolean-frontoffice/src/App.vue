<script>
import HeaderApp from './components/HeaderApp.vue';
import FooterApp from './components/FooterApp.vue';



  export default{
    components: {HeaderApp, FooterApp }
}
</script>
<template>
    <HeaderApp/>
    <!-- # questo e' illuogo dove tutto puo' cambiare in base alle rotte -->
    <router-view></router-view>
    <FooterApp/>
</template>



<style lang="scss">
  @use './styles/general.scss' as *;

</style>