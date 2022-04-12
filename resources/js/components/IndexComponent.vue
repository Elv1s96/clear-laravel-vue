<template>
<div>
    <router-link :to="{ name:'home'}">Home</router-link>
    <router-link :to="{ name:'list'}">List</router-link>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: "IndexComponent"
}
</script>

<style scoped>

</style>
