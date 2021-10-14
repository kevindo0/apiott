<!--
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(78)
let a = 876
const pptest = (num) => {
  console.log(a)
  a += num
}
</script>
 -->

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="increment(10)">count is: {{ a }} {{ count1 }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
import {ref, onMounted} from 'vue'
export default {
  props:  {
    msg: String
  },
  setup(props) {
    console.log(props)
    const a = 35

    const count1 = ref(4)
    const increment = (num) => {
      console.log(count1)
      count1.value += num
    }
    onMounted(() => {
      console.log('Component is mounted!')
    })

    return {
      a,
      count1,
      increment
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
