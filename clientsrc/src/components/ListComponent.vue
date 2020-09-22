<template>
  <div class="col-3 listComp">
    <div class="rounded" style="width: 25rem;">
      <h4 class="card-header d-flex justify-content-between">3 things on your agenda </h4>
      <ul class="list-group" id="tasks">
        <!-- //list tasks go here -->
      </ul>
      <form @click="addTask">
        <input type="text" class="form-control" placeholder="Add list item + Enter" required>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>