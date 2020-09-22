<template>
  <div class="col-3 listComp">
    <div class="rounded" style="width: 25rem;">
      <h4 class="card-header d-flex justify-content-between">{{listProp.title}}</h4>
      <ul class="list-group" id="tasks">
        <!-- //list tasks go here -->
      </ul>
      <form @click="addTask">
        <input type="text" class="form-control" placeholder="Add list item + Enter" required />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "list-component",
  props: ["listProp"],
};
</script>

<style>
</style>