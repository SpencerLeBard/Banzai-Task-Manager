<template>
  <div class="home container-fluid japanese-home-picture">
    <div class="row"></div>
    <div class="col"></div>
    <h1
      class="banzai-text text-white google-fonts"
    >Welcome to Banzai! Please login to view your boards!</h1>
  </div>
</template>


<script>
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>


<style>
.japanese-home-picture {
  background: url(https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1849&q=80);
  height: 100vh;
}
.google-fonts {
  font-family: "Montserrat", sans-serif;
}
</style>