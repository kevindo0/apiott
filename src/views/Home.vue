<template>
<div>
    <el-container style="height: 100vh;">
        <!-- <el-header>
            <Header></Header>
        </el-header> -->
        <el-container style="border: 1px solid #eee">
            <el-aside width="300px">
                <left-aside></left-aside>
            </el-aside>
            <el-main>
                <div class="content">
                    <router-view :key="$route.fullPath"></router-view>
                </div>
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

<script>
import { ref } from 'vue'
import { ElButton, ElContainer, ElHeader, ElAside, ElMain } from 'element-plus'
import Header from '@/components/Header.vue'
import LeftAside from '@/components/LeftAside.vue'

export default {
    components: { ElButton, ElContainer, ElHeader, ElAside, ElMain, Header, LeftAside },
}
</script>
<style>
.el-aside {
  /*color: var(--el-text-color-primary);*/
  background-color:rgb(16, 64, 111);
  color:white;
}
</style>
