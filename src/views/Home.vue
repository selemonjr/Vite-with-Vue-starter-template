<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
    name:"Home",
    components: {
        HelloWorld
    }

}
</script>
<template>
    <div>
        <img alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite + Vue-router +Typescript + TailwindCss + Pinia" />
    </div>
</template>