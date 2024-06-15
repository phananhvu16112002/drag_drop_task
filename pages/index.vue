<template>
    <div>
        <div class="container text-center">
            <div class="row align-items-start">
                <div class="col-md-4" @dragover.prevent @drop="onDrop('todoTasks')">
                    <CardComponents title="Todo" :length="todoLength" :tasks="todoTasks" @dragStart="onDragStart"
                        :isDragging="isDragging" :taskId="id" />
                </div>
                <div class="col-md-4" @dragover.prevent @drop="onDrop('progressTasks')">
                    <CardComponents title="In Progress" :length="progressLength" :tasks="progressTasks"
                        @dragStart="onDragStart" :isDragging="isDragging"  :taskId="id"/>
                </div>
                <div class="col-md-4" @dragover.prevent @drop="onDrop('doneTasks')">
                    <CardComponents title="Done" :length="doneLength" :tasks="doneTasks" @dragStart="onDragStart"
                        :isDragging="isDragging" :taskId="id" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import CardComponents from '../components/CardComponents.vue';

const todoTasks = ref([
    { id: 1, title: 'Task 1', description: 'This is task 1.' },
    { id: 2, title: 'Task 2', description: 'This is task 2.' }
]);

const progressTasks = ref([
    { id: 3, title: 'Task 3', description: 'This is task 3.' }
]);

const doneTasks = ref([
    { id: 4, title: 'Task 4', description: 'This is task 4.' }
]);

const todoLength = computed(() => todoTasks.value.length);
const progressLength = computed(() => progressTasks.value.length);
const doneLength = computed(() => doneTasks.value.length);

const draggedTask = ref(null);
const isDragging = ref(false)
const id = ref();

const onDragStart = (task) => {
    isDragging.value = true;
    id.value = task.id
    draggedTask.value = task;
};

const onDrop = (targetList) => {
    if (!draggedTask.value) return;

    if (todoTasks.value.includes(draggedTask.value)) {
        todoTasks.value = todoTasks.value.filter(task => task.id !== draggedTask.value.id);
    } else if (progressTasks.value.includes(draggedTask.value)) {
        progressTasks.value = progressTasks.value.filter(task => task.id !== draggedTask.value.id);
    } else if (doneTasks.value.includes(draggedTask.value)) {
        doneTasks.value = doneTasks.value.filter(task => task.id !== draggedTask.value.id);
    }

    // Add the task to the target list
    if (targetList === 'todoTasks') {
        todoTasks.value.push(draggedTask.value);
    } else if (targetList === 'progressTasks') {
        progressTasks.value.push(draggedTask.value);
    } else if (targetList === 'doneTasks') {
        doneTasks.value.push(draggedTask.value);
    }

    // Clear the dragged task
    isDragging.value = false;
    draggedTask.value = null;
};

useAsyncData(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log('res', response);
})

</script>

<style scoped>
/* Add any styles that are specific to this component here */
</style>
