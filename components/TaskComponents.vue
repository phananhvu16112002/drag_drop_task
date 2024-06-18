<template>
    <div>
        <div class="body_tasks">
            <CardTaskComponents style="margin-bottom: 10px" priority="Medium" title="Content on new use case"
                description=" Content on new use case Content on new use case Content on new use case Content on new use case Content on new use case Content on new use case ">
            </CardTaskComponents>

            <CardTaskComponents style="margin-bottom: 10px" priority="Medium" title="Content on new use case"
                description=" Content on new use case Content on new use case Content on new use case Content on new use case Content on new use case Content on new use case ">
            </CardTaskComponents>

            <CardTaskComponents style="margin-bottom: 10px" priority="High" title="Content on new use case"
                description=" Content on new use case Content on new use case Content on new use case Content on new use case Content on new use case Content on new use case ">
            </CardTaskComponents>

            <p class="title_type mt-2" style="color: #bac1c6; font-weight: 600; font-size: 15px">{{ title_type }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({

    title_type: {
        type: String,
        required: true
    },

})

</script>

<style scoped>
.body_tasks {
    min-height: 700px;
    max-height: 700px;
    overflow: auto;
    height: 500px;
    width: 300px;
    background-color: #f2f2f2;
    border-radius: 10px;
    padding: 10px;
}
</style>