<template>
    <div class="pending-diagnosis">
      <el-container>
        <!-- 左侧面板 -->
        <el-aside width="300px" class="left-panel">
          <!-- 搜索框 -->
          <div class="search-box">
            <el-input
              v-model="searchQuery"
              placeholder="搜索病例"
              prefix-icon="Search"
              clearable
              @input="handleSearch"
            />
          </div>
          <!-- 树形结构 -->
          <div class="tree-container">
            <el-tree
              :data="treeData"
              :props="defaultProps"
              @node-click="handleNodeClick"
              :filter-node-method="filterNode"
              ref="treeRef"
            />
          </div>
        </el-aside>
        <!-- 右侧面板 -->
        <el-main class="right-panel">
            <div class="image-container">
                <img src="../../assets/system.png" alt="系统图标" class="system-image">
            </div>
        </el-main>
      </el-container>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  // 搜索关键词
  const searchQuery = ref('')
  const treeRef = ref(null)
  
  // 树形数据（示例数据）
  const treeData = ref([
    {
      label: '第一人民医院',
      children: [
        {
          label: '张三',
          children: [
            {
              label: '发热病例 - 2023/10/01'
            },
            {
              label: '头痛病例 - 2023/10/05'
            }
          ]
        },
        {
          label: '李四',
          children: [
            {
              label: '腹痛病例 - 2023/10/02'
            }
          ]
        }
      ]
    },
    {
      label: '第二人民医院',
      children: [
        {
          label: '王五',
          children: [
            {
              label: '骨折病例 - 2023/10/03'
            }
          ]
        }
      ]
    }
  ])
  
  // 树形配置
  const defaultProps = {
    children: 'children',
    label: 'label'
  }
  
  // 节点点击事件
  const handleNodeClick = (data) => {
    console.log(data)
  }
  
  // 搜索过滤方法
  const filterNode = (value, data) => {
    if (!value) return true
    return data.label.toLowerCase().includes(value.toLowerCase())
  }
  
  // 监听搜索输入
  watch(searchQuery, (val) => {
    treeRef.value?.filter(val)
  })
  
  // 搜索处理
  const handleSearch = (value) => {
    treeRef.value?.filter(value)
  }
  </script>
  



  <style scoped>
  .pending-diagnosis {
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }
  
  .el-container {
    height: 100%;
    width: 100%;
  }
  
  .left-panel {
    border-right: 1px solid #dcdfe6;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .search-box {
    padding: 16px;
    flex-shrink: 0;
  }
  
  .tree-container {
    flex: 1;
    overflow-y: auto;
    padding: 0 16px 16px;
  }
  
  .right-panel {
    background-color: #ffffff;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .system-image {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
  }


  .image-container {
    display: flex;
    justify-content: center; 
    align-items: center; 
    height: 100%; 
    width: 100%;
  }
  </style>