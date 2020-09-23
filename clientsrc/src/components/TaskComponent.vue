<template>
  <div class="col-12 taskComp">
    <div class="rounded">
      <p class="card-header d-flex justify-content-between">{{taskProp.title}}</p>
    </div>
    <comment-component v-for="comment in comments" :key="comment.id" :commentProp="comment" />
  </div>
</template>

<script>
import CommentComponent from "../components/CommentComponent";
export default {
  name: "task-component",
  mounted() {
    this.$store.dispatch("getComments", this.taskProp.id);
  },
  computed: {
    comments() {
      return this.$store.state.comments[this.taskProp.id];
    },
  },
  data() {
    return {
      newComment: {
        title: "",
        listId: this.$route.params.commentId,
      },
    };
  },
  methods: {
    addComment() {
      this.$store.dispatch("addComment", this.newComment);
    },
  },
  props: ["taskProp"],
  components: {
    CommentComponent,
  },
};
</script>

<style>
</style>
