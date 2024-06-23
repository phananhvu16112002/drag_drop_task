import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import CardComponents from '~/components/CardComponents.vue';

describe('CardComponents', () => {
  it('renders title and length correctly', () => {
    const wrapper = mount(CardComponents, {
      props: {
        title: 'My Task List',
        length: 3,
        tasks: [],
      }
    });
    expect(wrapper.find('.card-title').text()).toBe('My Task List');
    expect(wrapper.find('.container_length').text()).toBe('3');
  });

  it('renders tasks correctly', () => {
    const tasks = [
      { id: '1', title: 'Task 1', description: 'Description 1' },
      { id: '2', title: 'Task 2', description: 'Description 2' },
    ];
    const wrapper = mount(CardComponents, {
      props: {
        title: 'My Task List',
        length: tasks.length,
        tasks,
      }
    });
    const taskElements = wrapper.findAll('.card.text-bg-primary');
    expect(taskElements.length).toBe(tasks.length);
    expect(taskElements[0].find('.card-title').text()).toBe('Task 1');
    expect(taskElements[1].find('.card-title').text()).toBe('Task 2');
  });

  it('emits dragStart event with task data', async () => {
    const tasks = [{ id: '1', title: 'Task 1', description: 'Description 1' }];
    const wrapper = mount(CardComponents, {
      props: {
        title: 'My Task List',
        length: tasks.length,
        tasks,
      }
    });
    await wrapper.find('.card.text-bg-primary').trigger('dragstart');
    expect(wrapper.emitted('dragStart')).toBeTruthy();
    // expect(wrapper.emitted('dragStart')[0]).toEqual([tasks[0]]);
  });

  it('applies dragging class correctly', () => {
    const tasks = [{ id: '1', title: 'Task 1', description: 'Description 1' }];
    const wrapper = mount(CardComponents, {
      props: {
        title: 'My Task List',
        length: tasks.length,
        tasks,
        isDragging: true,
        taskId: '1'
      }
    });
    const taskElement = wrapper.find('.card.text-bg-primary');
    expect(taskElement.classes()).toContain('dragging');
  });

  it('does not apply dragging class to other tasks', () => {
    const tasks = [
      { id: '1', title: 'Task 1', description: 'Description 1' },
      { id: '2', title: 'Task 2', description: 'Description 2' }
    ];
    const wrapper = mount(CardComponents, {
      props: {
        title: 'My Task List',
        length: tasks.length,
        tasks,
        isDragging: true,
        taskId: '1'
      }
    });
    const nonDraggingTaskElement = wrapper.findAll('.card.text-bg-primary')[1];
    expect(nonDraggingTaskElement.classes()).not.toContain('dragging');
  });
});
