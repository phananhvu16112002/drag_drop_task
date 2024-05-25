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
                <div @dragstart="onDragStart(task)" draggable="true" v-for="task in tasks" :key="task.id"
                    class="card text-bg-primary mb-3" style="height: 200px;">
                    <div class="card-header">{{ isDragging }}</div>
                    <div class="card-body">
                        <h5 class="card-title">{{ task.title }}</h5>
                        <p class="card-text">{{ task.description }}</p>
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
</style>
<script setup>

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
    }
})

const isDragging = ref(false)

const emits = defineEmits(['dragStart'])

const onDragStart = (task) => {
    emits('dragStart', task);
    console.log("task card", task)
};
</script>