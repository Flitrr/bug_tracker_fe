<template>
  <NavbarComponent :links="links"/>
</template>

<style>

</style>
<script setup>
import NavbarComponent from "../components/Navbar/NavbarComponent.vue";
const links = [{url: '/', text: 'Home'}, {url: '/about', text:'About'}, {url: '/register', text: 'Register'}]
</script>