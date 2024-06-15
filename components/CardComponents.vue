<template>
    <div>
        <div class="card">
            <div class="card-body">
                <div class="title_length d-flex justify-content-between">
                    <h5 class="card-title">{{ title }}</h5>
                    <div class="container_length">
                        {{ length }}
                    </div>
                </div>
                <div v-for="task in tasks" :key="task.id">
                    <div @dragstart="onDragStart(task)" draggable="true" class="card text-bg-primary mb-3"
                        style="height: 200px;" :class="{ 'dragging': isDragging && taskId === task.id }">
                        <div class="card-header">{{ isDragging }}</div>
                        <div class="card-body">
                            <h5 class="card-title">{{ task.title }}</h5>
                            <p class="card-text">{{ task.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    height: 500px;
    max-height: 700px;
    overflow-y: auto;
}

.container_length {
    width: 10%;
    height: 20%;
    background-color: grey;
}

.title_length {
    width: 100% !important;
    border-bottom: 1px solid red;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.dragging {
    opacity: 0.5;
    /* Giảm độ trong suốt khi đang được kéo */
    transition: opacity 0.2s ease;
    /* Thêm transition cho hiệu ứng mờ */
}
</style>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    tasks: {
        type: Array,
        required: true
    },
    isDragging: {
        type: Boolean,
        required: false
    },
    taskId: {
        type: String,
        require: false
    }
});

const emits = defineEmits(['dragStart']);

const onDragStart = (task) => {
    emits('dragStart', task);
    console.log("task card", task);
};
</script>
