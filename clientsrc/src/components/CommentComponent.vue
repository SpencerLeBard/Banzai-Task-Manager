<template>
  <div class="col-12 comment-comp">
    <div class="rounded bg-dark text-light">
      <p class="card-header d-flex justify-content-between">{{commentProp.title}}</p>
      <button @click="deleteComment">delete comment</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment-component",
  mounted() {},
  computed: {},
  props: ["commentProp"],
  components: {},
  methods: {
    deleteComment() {
      this.$store.dispatch("deleteComment", this.commentProp);
    },
  },
};
</script>

<style>
</style>