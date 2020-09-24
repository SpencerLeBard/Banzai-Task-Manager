<template>
  
    <li class="list-group-item d-flex justify-content-between">
      <p class="text-center">{{commentProp.title}}</p>
      <i class="fa fa-trash btn text-danger" aria-hidden="true" @click="deleteComment"></i>
      
    </li>
  

<!--   
  <div class="col-12 comment-comp">
    <div class="rounded bg-dark text-light">
      <p class="card-header d-flex justify-content-between">{{commentProp.title}}
        <button @click="deleteComment">delete comment</button>
      </p>
      
    </div>
  </div> -->
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