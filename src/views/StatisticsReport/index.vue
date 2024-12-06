<template>
    <div class="appointment">
        <!-- 顶部操作区域 -->
        <div class="operation-bar">
            <div class="search-box">
                <el-input v-model="searchQuery" placeholder="请输入搜索内容" prefix-icon="el-icon-search"
                    @input="handleSearch">
                    <template #append>
                        <el-button icon="el-icon-search" @click="handleSearch">搜索</el-button>
                    </template>
                </el-input>
            </div>

            <div class="export-button">
                <el-button type="primary" @click="handleExport">
                    <el-icon>
                        <Download />
                    </el-icon>
                    导出Excel
                </el-button>
            </div>
        </div>

        <!-- 表格 -->
        <el-table :data="filteredTableData" border style="width: 100%" v-loading="loading" :resizable="false">
            <el-table-column type="index" label="序号" width="60" />
            <el-table-column prop="consultationNo" label="会诊编号" min-width="120" />
            <el-table-column prop="pathologyNo" label="病理号" min-width="120" />
            <el-table-column prop="name" label="姓名" min-width="80" />
            <el-table-column prop="gender" label="性别" min-width="60" />
            <el-table-column prop="age" label="年龄" min-width="60" />
            <el-table-column prop="pathologyType" label="病理类型" min-width="100" />
            <el-table-column prop="hospital" label="送检医院" min-width="120" />
            <el-table-column prop="submitTime" label="申请时间" min-width="150" />
            <el-table-column prop="diagnosisResult" label="诊断结果" min-width="150" />
            <el-table-column prop="expertOpinion" label="专家诊断意见" min-width="200" />
            <el-table-column prop="diagnosisDate" label="诊断日期" min-width="150" />
            <el-table-column label="操作" min-width="150">
                <template #default="scope">
                    <el-button size="small" type="primary" @click="handleEdit(scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { ElMessage } from "element-plus";
import { Download } from "@element-plus/icons-vue";

const loading = ref(false);
const searchQuery = ref("");
const tableData = ref([
    // 示例数据，实际使用时应该从API获取
    {
        consultationNo: "C2023001",
        pathologyNo: "P2023001",
        name: "张三",
        gender: "男",
        age: 45,
        pathologyType: "活检",
        hospital: "人民医院",
        submitTime: "2023-10-20 14:30:00",
        diagnosisResult: "良性",
        expertOpinion: "未见明显异常",
        diagnosisDate: "2023-10-21 09:00:00",
    },
    // 可以添加更多示例数据
]);

// 搜索过滤
const filteredTableData = computed(() => {
    if (!searchQuery.value) return tableData.value;
    return tableData.value.filter((data) => {
        return Object.values(data).some((value) =>
            String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    });
});

// 处理搜索
const handleSearch = () => {
    // 实际使用时可能需要调用API进行搜索
    console.log("搜索关键词:", searchQuery.value);
};

// 处理导出Excel
const handleExport = () => {
    // 这里添加实际的导出逻辑
    ElMessage.success("导出成功");
};


// 处理编辑
const handleEdit = (row) => {
    console.log("编辑行:", row);
    // 实现编辑逻辑
};

// 处理删除
const handleDelete = (row) => {
    console.log("删除行:", row);
    // 实现删除逻辑
};


</script>

<style scoped>


.appointment {
    padding: 10px;
}

.operation-bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.search-box {
    width: 300px;
    margin-right: 10px;
}

.operation-bar .el-button {
    margin-right: 10px;
}
</style>