<template>
  <NavbarComponent :links="links"/>
  <main>
    <form method="post" action="#" @submit.prevent="submit">
      <div>
        <label for="name">Name: </label>
        <input type="text" id="name" v-model.lazy.trim="state.name"/>
      </div>
      <div>
        <label for="email">Email: </label>
        <input type="email" id="email" v-model.lazy.trim="state.email"/>
      </div>
      <div>
        <label for="password">Password: </label>
        <input type="password" id="password" v-model.lazy="state.password"/>
      </div>
      <div>
        <label for="confirm">Confirm Password: </label>
        <input type="password" id="confirm" v-model.lazy="state.confirm"/>
      </div>
      <button type="submit">Submit</button>
    </form>
  </main>
</template>

<script setup>
import {reactive} from "vue";
import NavbarComponent from "../components/Navbar/NavbarComponent.vue";
import axios from "axios";
import router from "../router";
import {store} from "../store";

const state = reactive({name: '', password: '', confirm: '', email: ''});
const links = [{url: '/', text: 'Home'}, {url: '/about', text: 'About'}, {url: '/register', text: 'Register'}]

async function submit() {
  if (state.password !== state.confirm) {
    alert("Your passwords don't match");
    return;
  }
  try {
    const response = await axios.post('/api/register', {
      name: state.name,
      email: state.email,
      password: state.password,
      password_confirmation: state.confirm
    })
    if (response.data) {
      store.authenticate(response.data)
      router.push('/').then();
    } else {
      store.nullify();
      alert('Something went wrong');
    }
  } catch (error) {
    console.error(error);
  }
}
</script>

<style scoped>

</style>