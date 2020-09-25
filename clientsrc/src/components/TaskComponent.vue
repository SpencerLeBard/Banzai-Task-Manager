<template>
  <div class="col-10 offset-1" >
    <div class="card bg-white rounded mt-3 interactive " data-toggle="modal" :data-target="'#modal'+taskProp.id">
      <p class="card-header d-flex justify-content-between">{{taskProp.title}}
        <!-- MOVING DELETE BUTTON TO ELLIPSIS IN MODAL -->
        <!-- <i class="fa fa-trash-o text-danger pointer" @click="deleteTask" aria-hidden="true"></i> -->
      </p>
    </div>
    <div
      class="modal fade"
      :id="'modal'+taskProp.id"
      tabindex="-1"
      aria-labelledby="taskProp.idLabel"
      aria-hidden="true"
      >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="d-flex justify-content-between p-2">
            <h5 class="modal-title" :id="taskProp.id + 'Label'">{{taskProp.title}} Comments</h5>
            <div class="btn-group dropright">
              <i
                class="fa fa-ellipsis-v btn"
                aria-hidden="true"
                role="button"
                data-toggle="dropdown"
              ></i>
              <div class="dropdown-menu ml-2">
                <p class="btn" @click="addCommentToggle = !addCommentToggle; newComment.title = ''">Add Comment</p>
                <p class="btn" @click="deleteTask">Delete Task</p>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <ul class="list-group">
              <comment-component
                v-for="comment in comments"
                :key="comment.id"
                :commentProp="comment"
              />
              <li class="list-group-item" v-if="addCommentToggle">
                <form @submit.prevent="addComment">
                  <input
                    type="text"
                    class="form-control mb-2"
                    placeholder="Comment title + Enter"
                    v-model="newComment.title"
                    required
                  />
                </form>
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Add form to modal that toggles when clicking task -->
    <!-- <form @submit.prevent="addComment">
      <input type="text" class="form-control" placeholder="Add comment title + Enter" v-model="newComment.title" required />
    </form>-->
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
      addCommentToggle: false,
    };
  },
  methods: {
    addComment() {
      this.$store.dispatch("addComment", this.newComment);
      this.addCommentToggle = !this.addCommentToggle;
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

.interactive{
  cursor: pointer;
  transition: transform .2s;

}
  .interactive:hover {
    transform: scale(1.1);
    box-shadow: 5px 5px 8px 2px #888888;
  }


</style>
