<template>
    <div>
        <div class="container_title">
            <div class="line_title" :style="{ backgroundColor: line_color }"></div>
            <div class=" title_header_card d-flex justify-content-between me-2 ms-2 ">
                <div class="d-flex">
                    <span style="font-size: 15px; font-weight: 600; margin-right: 10px; margin-top: 10px "
                        :style="{ color: line_color }">
                        {{ title }}
                    </span>
                    <div class="container_length_tasks  text-center justify-content-center"
                        style="margin-top: 8px; margin-bottom: 5px; padding-top: 5px">
                        <span style="padding-top: 50px; font-weight: 600">1</span>
                    </div>
                </div>

                <PlusCircleOutlined style="font-size: 20px;  color: #65dd19; margin-top: 13px" />
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    line_color: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
.container_title {
    width: 300px;
    height: 50px;
    background-color: #cccccc22;
}

.line_title {
    width: 300px;
    height: 5px;
}

.title_header_card {
    /* margin: 10px; */
}

.container_length_tasks {
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 25px;
}
</style>
