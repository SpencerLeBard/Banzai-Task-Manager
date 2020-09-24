<template>
  <nav class="navbar navbar-expand-lg bg-danger">
    <div class="container-fluid">
      <div class="row justify-content-center w-100">
        <div class="col-2">
          <div class="collapse navbar-collapse text-white" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item" :class="{ active: $route.name == 'home' }">
                <router-link :to="{ name: 'home' }" class="nav-link text-white">Home</router-link>
              </li>
              <li
                class="nav-item"
                v-if="$auth.isAuthenticated"
                :class="{ active: $route.name == 'boards' }"
              >
                <router-link
                  class="nav-link text-white my-boards"
                  :to="{ name: 'boards' }"
                >My Boards</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-8 d-flex justify-content-center">
          <router-link class="navbar-brand text-white" :to="{ name: 'home' }">BANZAI | バンザイ</router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="col d-flex justify-content-end">
          <span class="navbar-text">
            <button class="btn btn-sm bg-white" @click="login" v-if="!$auth.isAuthenticated">Login</button>
            <button class="btn btn-sm bg-white" @click="logout" v-else>logout</button>
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

let _api = axios.create({
  baseURL: "https://localhost:3000",
  withCredentials: true,
});
export default {
  name: "Navbar",
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      this.$store.dispatch("getProfile");
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
    },
    async logout() {
      await this.$auth.logout({ returnTo: window.location.origin });
    },
  },
};
</script>

<style>
.navbar {
  background-color: 931a25;
  color: white;
}
.a {
  color: white;
}
</style>
