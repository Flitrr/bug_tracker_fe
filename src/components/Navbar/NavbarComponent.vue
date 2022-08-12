<template>
  <nav>
    <ul>
      <template v-for="(link, index) in links" :key="index">
        <li v-if="link.url !== '/logout' && link.url !== '/register' && link.url !== '/login'">
          <router-link :to="link.url">{{ link.text }}</router-link>
        </li>
      </template>
      <li v-if="store.user">
        <a href="#" @click="logout">Logout</a>
      </li>
      <li v-if="!store.user">
        <router-link to="/login">Login</router-link>
      </li>
      <li v-if="!store.user">
        <router-link to="/register">Register</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import {store} from "../../store";
import axios from "axios";
import router from "../../router";

defineProps(['links'])

async function logout() {
  try {
    await axios.post('/api/logout');
    store.nullify();
    router.push('/').then();
  } catch (e) {
    console.error(e);
  }
}

</script>

<style scoped>
nav {
  height: 120px;
  align-items: center;
  display: flex;
}

ul {
  display: flex;
  list-style: none;
  align-items: center;
  margin: auto 0;
  padding: 0;
  gap: 1rem;
  width: 100%;
}

li {
  list-style: none;
  padding: .75rem 1.5rem;
  background-color: #ff8787;
  color: #343a40;
  cursor: pointer;
}

li:hover, li:active {
  background-color: #f03e3e;
  color: white;
}

li:last-child {
  margin-left: auto;
}

a:link, a:visited {
  text-decoration: none;
  color: inherit;
  font-size: 2rem;
}
</style>