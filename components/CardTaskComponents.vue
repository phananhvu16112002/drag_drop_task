<template>
    <div>
        <div class="card_task_components">
            <div class="container_priority text-center mb-2" :style="{ backgroundColor: colorPriority(priority) }">
                <p :style="{ color: textColorPriority(priority) }" style="padding-top: 5px; font-weight: 600">{{
                    priority }}</p>
            </div>

            <p class="title mb-2" style="margin: 0">{{ title }}</p>
            <p class="description mb-2" style="margin: 0">{{ truncatedDescription }}</p>

            <div class="d-flex">
                <ProfileOutlined style="margin-top: 5px; margin-right: 5px" />
                <p class="created_by" style="margin-top: 3px; margin-bottom: 0 !important">CREATED BY:</p>
            </div>

            <p class="name_user" style="margin-left: 30px; margin-bottom: 0 !important">Vu Phan</p>
            <div class="d-flex mt-2">
                <CalendarOutlined style="margin-top: 5px; margin-right: 8px" />
                <div class="container_startTime text-center mb-2 ">
                    <p class="start_time mt-1">
                        Start: Apr, 28 15:30 PM
                    </p>
                </div>

            </div>

            <div class="d-flex mt-2">
                <CalendarOutlined style="margin-top: 5px; margin-right: 8px" />
                <div class="container_startTime text-center mb-2 ">
                    <p class="start_time mt-1">
                        End: Apr, 28 15:30 PM
                    </p>
                </div>

            </div>

        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    priority: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const colorPriority = (priority) => {
    if (priority === 'Low') {
        return '#6d7c87'
    } else if (priority === 'Medium') {
        return '#ffa903'
    } else {
        return '#ff3d0'
    }
}

const textColorPriority = (priority) => {
    if (priority === 'Low') {
        return 'white'
    } else if (priority === 'Medium') {
        return 'black'
    } else {
        return 'white'
    }
}

// Function to truncate description
const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
}

const truncatedDescription = truncateText(props.description, 100);
</script>

<style scoped>
.card_task_components {
    width: 280px;
    height: 100%;
    max-height: 300px;
    background-color: white;
    border-radius: 10px;
    padding: 15px;
    overflow-y: auto;
}

.container_priority {
    width: 80px;
    height: 30px;
    background-color: red;
    border-radius: 20px;
}

.title {
    text-align: start;
    margin-top: 5px;
    font-size: 15px;
    font-weight: 600;
}

.created_by {
    text-align: center;
    margin-left: 10px;
    font-size: 13px;
    font-weight: 700;
    margin-top: 5px;
    color: #8b96b0;
}

.name_user {
    font-size: 15px;
    font-weight: 600;
    text-align: start;
    color: #b7c5cd;
}

.description {
    text-align: start;
    margin-top: 5px;
    font-size: 13px;
    font-weight: 600;
    color: #0d0e0f64;
}

.container_startTime {
    width: 100%;
    height: 30px;
    background-color: #6d7c87;
    border-radius: 20px;
}

.start_time {
    color: white;
    font-size: 12px;
    font-weight: 600;
    margin-top: 5px;
    padding-top: 2px;
}
</style>
