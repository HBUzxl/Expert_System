<template>
    <el-header class="header">
      <div class="left-section">
        <div class="logo">
          <el-image :src="logoUrl" alt="远程会诊平台" class="logo-img" />
          <span class="logo-text">远程会诊平台</span>
        </div>
        
        <div class="user-profile">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <span class="username">要红伟</span>
              <el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="$router.push('/user/change-password')">
                  <el-icon><User /></el-icon>
                  个人信息
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-icon><SwitchButton /></el-icon>
                  退出登录
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
  
      <div class="right-section">
        <el-menu
          class="nav-menu"
          mode="horizontal"
          background-color="#4A90E2"
          text-color="#fff"
          active-text-color="#fff"
          :router="true"
          :default-active="activeIndex"
        >
        
          <el-menu-item index="/workbench">
            <div class="menu-item-content">
              <el-icon><Monitor /></el-icon>
              <span>工作台</span>
            </div>
          </el-menu-item>
          
          <el-menu-item index="/waiting">
            <div class="menu-item-content">
              <el-icon><Timer /></el-icon>
              <span>待诊断</span>
              <el-badge :value="0" class="counter" />
            </div>
          </el-menu-item>
  
          <el-menu-item index="/diagnosed">
            <div class="menu-item-content">
              <el-icon><Document /></el-icon>
              <span>已签发</span>
              <el-badge :value="1" class="counter" />
            </div>
          </el-menu-item>
  
          <el-menu-item index="/return">
            <div class="menu-item-content">
              <el-icon><Back /></el-icon>
              <span>退回</span>
              <el-badge :value="0" class="counter" />
            </div>
          </el-menu-item>
  
          <el-menu-item index="/appointment">
            <div class="menu-item-content">
              <el-icon><Calendar /></el-icon>
              <span>预约</span>
              <el-badge :value="0" class="counter" />
            </div>
          </el-menu-item>
  
          <el-menu-item index="/statistics">
            <div class="menu-item-content">
              <el-icon><TrendCharts /></el-icon>
              <span>统计</span>
            </div>
          </el-menu-item>
  
          <el-menu-item index="/favorites">
            <div class="menu-item-content">
              <el-icon><Star /></el-icon>
              <span>收藏</span>
            </div>
          </el-menu-item>
          <el-menu-item index="/withdraw">
            <div class="menu-item-content">
                <el-icon><Remove /></el-icon>
                <span>已撤回</span>
                <el-badge :value="0" class="counter" />
            </div>
          </el-menu-item>

        </el-menu>

        
      </div>
    </el-header>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { 
    ArrowDown, 
    Monitor, 
    Timer, 
    Document, 
    Back, 
    Calendar, 
    TrendCharts, 
    Star, 
    Remove,
    User,
    SwitchButton
  } from '@element-plus/icons-vue'
  import logoImage from '../assets/logo.png'
  import avatarImage from '../assets/logo.png'
  
  export default {
    name: 'Header',
    components: {
      ArrowDown,
      Monitor,
      Timer,
      Document,
      Back,
      Calendar,
      TrendCharts,
      Star,
      Remove,
      User,
      SwitchButton
    },
    setup() {
      const activeIndex = ref('/workbench')
      const logoUrl = ref(logoImage)
      const avatarUrl = ref(avatarImage)
  
      return {
        activeIndex,
        logoUrl,
        avatarUrl
      }
    }
  }
  </script>
  
  <style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px !important;
    height: 60px !important;
    background-color: #4A90E2;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .left-section {
    display: flex;
    align-items: center;
  }
  
  .right-section {
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: flex-end;
    width: auto;
  }
  
  .logo {
    display: flex;
    align-items: center;
    margin-right: 40px;
    white-space: nowrap;
  }
  
  .logo-img {
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }
  
  .logo-text {
    font-size: 16px;
    font-weight: 500;
  }
  
  .user-profile {
    display: flex;
    align-items: center;
    margin-right: 40px;
  }
  
  .el-dropdown-link {
    display: flex;
    align-items: center;
    color: white;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  .el-dropdown-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .el-menu-item {
    padding: 0 15px;
    }
  
  .welcome {
    margin: 0 4px;
    font-size: 14px;
  }
  
  .username {
    margin-right: 4px;
    font-weight: 500;
  }
  
  .nav-menu {
    border: none !important;
    background-color: transparent !important;
    margin-right: 20px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    min-width: 800px;
  }
  
  
  :deep(.el-menu--horizontal) {
    border-bottom: none;
    height: 60px;
  }
  
  :deep(.el-menu-item) {
    height: 60px !important;
    padding: 8px 20px !important;
    display: flex;
    align-items: center;
  }
  
  .menu-item-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 5px;
  }
  
  :deep(.el-menu-item .el-icon) {
    margin-right: 0 !important;
    margin-bottom: 4px;
    font-size: 20px;
  }
  
  :deep(.el-menu-item span) {
    font-size: 14px;
    line-height: 1.2;
    white-space: nowrap;
  }
  
  .counter {
    position: absolute;
    top: 4px;
    right: 4px;
  }
  
  :deep(.el-badge__content) {
    background-color: #FF4081;
    border: none;
    transform: scale(0.8);
  }
  
  :deep(.el-menu-item:hover) {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
  
  :deep(.el-menu-item.is-active) {
    background-color: rgba(255, 255, 255, 0.2) !important;
    font-weight: 500;
  }
  
  </style>