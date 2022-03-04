<template>
  <div class="list-items">
    <template v-if="loading">
      loading
    </template>
    <template v-else-if="isEmpty">
      empty
    </template>
    <template v-else>
      <Task 
        v-for="task in taks"
        :key="task.id"
        :task="task"
        @archive-task="onArchiveTask"
        @pin-task="onPinTask"
      />
    </template>
  </div>
</template>

<script>
import Task from './Task.vue'
  export default {
    name: 'task-list'
  }
</script>

<style lang="scss" scoped>

</style>