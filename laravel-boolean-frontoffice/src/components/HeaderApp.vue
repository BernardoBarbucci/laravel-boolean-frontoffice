<template lang="">
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <h1>Logo cocktails</h1>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item fs-5" v-for="(link, i) in links" :key="i">
            <router-link :to="{ name: link.rotta }" class="nav-link text-color-footer">
                {{ link.nome }}
            </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    nome: 'Home',
                    rotta: 'home'
                },
                {
                    nome: 'About us',
                    rotta: 'AboutUs'
                },
                {
                    nome: 'Contatti',
                    rotta: 'contatti'
                }
            ]
        }
    },
}
</script>

<style lang="scss">
nav {
    background-color: grey;
}
</style>