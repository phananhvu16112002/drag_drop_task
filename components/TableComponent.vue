<template>
    <div>
        <a-table :columns="columns" :data-source="data">
            <template #headerCell="{ column }">
                <template v-if="column.key === 'title'">
                    <span>Title</span>
                </template>
            </template>

            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'title'">
                    <a>{{ record.title }}</a>
                </template>
                <template v-else-if="column.key === 'content'">
                    <span class="content">{{ record.content }}</span>
                </template>
                <template v-else-if="column.key === 'type'">
                    <span>{{ record.type }}</span>
                </template>
                <template v-else-if="column.key === 'priority'">
                    <span>{{ record.priority }}</span>
                </template>
                <template v-else-if="column.key === 'startDate'">
                    <span>{{ record.startDate }}</span>
                </template>
                <template v-else-if="column.key === 'endDate'">
                    <span>{{ record.endDate }}</span>
                </template>
                <template v-else-if="column.key === 'action'">
                    <span>
                        <a @click="showRestoreConfirm(record)" class="action-restore">Restore</a>
                        <a-divider type="vertical" />
                        <a @click="showDeleteConfirm(record)" class="action-delete">Delete</a>
                    </span>
                </template>
            </template>
        </a-table>

        <a-modal v-model:visible="isRestoreModalVisible" title="Confirm Restore" @ok="handleRestore"
            @cancel="handleCancel">
            <p>Bạn muốn khôi phục công việc không?</p>
        </a-modal>

        <a-modal v-model:visible="isDeleteModalVisible" title="Confirm Delete" @ok="handleDelete"
            @cancel="handleCancel">
            <p>Bạn muốn xóa công việc không?</p>
        </a-modal>
    </div>
</template>

<script lang="ts" setup>
const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        width: '15%',
    },
    {
        title: 'Content',
        dataIndex: 'content',
        key: 'content',
        width: '30%',
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        width: '10%',
    },
    {
        title: 'Priority',
        dataIndex: 'priority',
        key: 'priority',
        width: '10%',
    },
    {
        title: 'Start Date',
        dataIndex: 'startDate',
        key: 'startDate',
        width: '15%',
    },
    {
        title: 'End Date',
        dataIndex: 'endDate',
        key: 'endDate',
        width: '15%',
    },
    {
        title: 'Action',
        key: 'action',
        width: '5%',
    },
];

const data = [
    {
        key: '1',
        title: 'Task 1',
        content: 'This is the content of task 1. It has multiple lines. Here is another line.',
        type: 'Bug',
        priority: 'High',
        startDate: '2024-06-01',
        endDate: '2024-06-05',
    },
    {
        key: '2',
        title: 'Task 2',
        content: 'This is the content of task 2. It has multiple lines. Here is another line.',
        type: 'Feature',
        priority: 'Medium',
        startDate: '2024-06-02',
        endDate: '2024-06-06',
    },
    {
        key: '3',
        title: 'Task 3',
        content: 'This is the content of task 3. It has multiple lines. Here is another line.',
        type: 'Improvement',
        priority: 'Low',
        startDate: '2024-06-03',
        endDate: '2024-06-07',
    },
];

const isRestoreModalVisible = ref(false);
const isDeleteModalVisible = ref(false);
const currentRecord = ref(null);

const showRestoreConfirm = (record: any) => {
    currentRecord.value = record;
    isRestoreModalVisible.value = true;
};

const showDeleteConfirm = (record: any) => {
    currentRecord.value = record;
    isDeleteModalVisible.value = true;
};

const handleRestore = () => {
    console.log('Restoring record:', currentRecord.value);
    isRestoreModalVisible.value = false;
};

const handleDelete = () => {
    console.log('Deleting record:', currentRecord.value);
    isDeleteModalVisible.value = false;
};

const handleCancel = () => {
    isRestoreModalVisible.value = false;
    isDeleteModalVisible.value = false;
};
</script>

<style scoped>
.action-restore {
    color: blue;
}

.action-delete {
    color: red;
}

.content {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
}
</style>
