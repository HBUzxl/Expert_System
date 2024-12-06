<template>
    <div class="workbench-container">
      <div class="button-grid">
        <div class="button-row">
          <el-button class="menu-button" @click="$router.push('/waiting')">
            <el-icon><Timer /></el-icon>
            <span>待诊断</span>
            <el-badge :value="0" class="counter" />
          </el-button>
          
          <el-button class="menu-button" @click="$router.push('/diagnosed')">
            <el-icon><Document /></el-icon>
            <span>已签发</span>
            <el-badge :value="1" class="counter" />
          </el-button>
  
          <el-button class="menu-button" @click="$router.push('/return')">
            <el-icon><Back /></el-icon>
            <span>退回</span>
            <el-badge :value="0" class="counter" />
          </el-button>
  
          <el-button class="menu-button" @click="$router.push('/appointment')">
            <el-icon><Calendar /></el-icon>
            <span>预约</span>
            <el-badge :value="0" class="counter" />
          </el-button>
        </div>
  
        <div class="button-row">
          <el-button class="menu-button" @click="$router.push('/statistics')">
            <el-icon><TrendCharts /></el-icon>
            <span>统计</span>
          </el-button>
  
          <el-button class="menu-button" @click="$router.push('/favorites')">
            <el-icon><Star /></el-icon>
            <span>收藏</span>
          </el-button>
  
          <el-button class="menu-button" @click="$router.push('/withdraw')">
            <el-icon><Remove /></el-icon>
            <span>已撤回</span>
            <el-badge :value="0" class="counter" />
          </el-button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Timer, Document, Back, Calendar, TrendCharts, Star, Remove } from '@element-plus/icons-vue'
  
  export default {
    name: 'WorkBench',
    components: {
      Timer,
      Document,
      Back,
      Calendar,
      TrendCharts,
      Star,
      Remove
    }
  }
  </script>
  
  <style scoped>
  .workbench-container {
    padding: 20px;
    height: 100%;
  }
  
  .button-grid {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 20px;
  }
  
  .button-row {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .menu-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    width: 200px;
    height: 200px;
    border-radius: 8px;
    background-color: #fff;
    transition: all 0.3s;
  }
  
  .menu-button:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .menu-button .el-icon {
    font-size: 48px;
    margin-bottom: 16px;
    color: #4A90E2;
  }
  
  .menu-button span {
    font-size: 18px;
    color: #333;
  }
  
  .counter {
    margin-top: 8px;
  }
  </style>