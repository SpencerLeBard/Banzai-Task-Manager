<template>
  <div class="home container-fluid japanese-home-picture">
    <div class="row">
      <div class="col">
        <h1
          class="banzai-text text-white google-fonts mt-4"
        >Welcome to Banzai Task Manager, Please Login To View Your Boards!</h1>
      </div>
    </div>
    <div class="row">
      <div class="col card-center">
        <div class="card banzai-card google-fonts shadow-lg">
          <div class="card-body">
            <h1 class="card-title">
              ban·zai
              /ˈbanzī/
            </h1>
            <br />
            <div class="card-text">
              <h5>The word banzai in Japanese literally means ten thousand years</h5>

              <br />
              <br />
              <h5>
                Banzai is considered an interjection and related to words like "hurrah!" and "yippee!"
                <br />Perhaps the best equivalent is the British shout “Long Live the King/Queen!”
              </h5>
              <br />
              <br />
              <h2>
                Today, banzai is just a shout of elation...
                <b>like when you finish a task!</b>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  /* object-fit: cover; */
}
.google-fonts {
  font-family: "Montserrat", sans-serif;
  color: black;
}
.banzai-card {
  width: 25vw;
  margin-top: 10vh;
  margin-left: 35vw;
}
</style>