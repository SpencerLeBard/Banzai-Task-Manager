<template>
  <div class="col-10 offset-1 ">
    <div class="card bg-light rounded mt-3 ">
      <p class="card-header d-flex justify-content-between">{{taskProp.title}}
        <i class="fa fa-trash-o text-danger pointer" @click="deleteTask" aria-hidden="true"></i>
      </p>
    </div>
    <comment-component v-for="comment in comments" :key="comment.id" :commentProp="comment" />
    <form @submit.prevent="addComment">
      <input type="text" class="form-control" placeholder="add comment" v-model="newComment.title" required />
    </form>
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
        taskId: this.taskProp.id,
      },
    };
  },
  methods: {
    addComment() {
      this.$store.dispatch("addComment", this.newComment);
    },
    deleteTask() {
      console.log(this.taskProp);
      this.$store.dispatch("deleteTask", this.taskProp);
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
