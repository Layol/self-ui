<template>
  <task :task="{
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  }" />
  <task :task="{
    id: '1',
    title: 'Test Task',
    state: 'TASK_PINNED',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  }" />
  <task :task="{
    id: '1',
    title: 'Test Task',
    state: 'TASK_ARCHIVED',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  }" />
</template>

<script>
import Task from "./components/Task.vue";

export default {
  name: "App",
  components: {
    Task
  }
};
</script>

<style>
@import "./index.css";
</style>
