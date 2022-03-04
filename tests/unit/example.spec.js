import { shallowMount } from "@vue/test-utils";
import Task from "@/components/Task.vue";

describe("Task.vue", () => {
  it("renders props.msg when passed", () => {
    const task = {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
    };
    const wrapper = shallowMount(Task, {
      propsData: { task }
    });
    expect(wrapper.find('div').classes()).toContain('TASK_INBOX');
  });
});
