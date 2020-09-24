<template>
  <div class="col-10 offset-1" >
    <div class="card bg-light rounded mt-3 " data-toggle="modal" data-target="#exampleModal">
      <p class="card-header d-flex justify-content-between">{{taskProp.title}}
        <i class="fa fa-trash-o text-danger pointer" @click="deleteTask" aria-hidden="true"></i>
      </p>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{taskProp.title}} Comments</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <ul class="list-group">
          <comment-component v-for="comment in comments" :key="comment.id" :commentProp="comment" /> 
        </ul>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    <!-- Add form to modal that toggles when clicking task -->
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
