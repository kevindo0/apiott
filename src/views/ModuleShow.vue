<template>
    <p>{{$route.params.id}}</p>
</template>

<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
    setup() {
        const $route = useRoute()
        console.log($route.params.id)
    }
})
</script>
