<template>
  <!-- <div class="list-item">
    <input type="text" readonly :value="task.title">
  </div> -->
  <div :class="classes">
    <label class="checkbox">
      <input type="checkbox" :checked="isChecked" disabled name="checked" />
      <span class="checbox-custom" @click="archiveTask" :aria-label="'archiveTask-' + task.id">
      </span>
    </label>
    <div class="title">
      <input type="text" :value="task.title" readonly placeholder="Input title" />
    </div>
    <div class="actions">
      <a v-if="!isChecked" @click="pinTask">
        <span class="icon-star" :aria-label="'pinTask-' + task.id"></span>
      </a>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
  export default {
    name: 'Task',
    props: {
      task: {
        type: Object,
        required: true,
        default: () => ({ id: '', state: '', title: ''}),
        validator: task => ['id', 'state', 'title'].every(key => key in task),
      },
    },
    emits:['archive-task', 'pin-task'],
    setup(props, { emit }) {
      props = reactive(props);
      return {
        classes: computed(() => ({
          'list-item TASK_INBOX': props.task.state === 'TASK_INBOX',
          'list-item TASK_PINNED': props.task.state === 'TASK_PINNED',
          'list-item TASK_ARCHIVED': props.task.state === 'TASK_ARCHIVED',
        })),
        isChecked: computed(() => props.task.state === 'TASK_ARCHIVED'),
        archiveTask() {
          emit('archive-task', props.task.id);
        },
        pinTask() {
          emit('pin-task', props.task.id);
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
@import '../index.css'
</style>