<template>
    <div class="sidebar">
        <!-- <p class="title" :class="{'title-select': index==module.id}" v-for="module of modules" @click="select(module)">{{ module.name }}</p>
        <el-button type='info' size='mini' @click="add">
            <el-icon style="vertical-align: middle;">
                <plus />
            </el-icon>
        </el-button> -->
        <el-menu
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <el-menu-item :index="'/module/' + module.id" :key="module.id" v-for="module of modules">
              <i class="el-icon-menu"></i>
              <span>{{ module.name }}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import { ElButton, ElIcon } from 'element-plus'
import { Plus } from '@element-plus/icons'
import { ref } from 'vue'
export default {
    components: { ElIcon, Plus },
    setup() {
        const index = ref(1)
        var select = (item) => {
            console.log(item)
            index.value = item.id
        }
        var add = () => {
            console.log('add')
        }
        return {
            index,
            currentColor: "#6ff",
            modules: [{
                id: 1,
                name:"resource"
            }, {
                id: 2,
                name: "fileUpload"
            }],
            select,
            add
        }
    }
}
</script>
<style>
.title-select {
    color: #6ff;
}
.title:hover{
    color: #999;
}
</style>