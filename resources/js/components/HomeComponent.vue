<template>
    <div>
        <h1>Home :)</h1>
        <button @click.prevent="testPush">Push</button>
        <button @click.prevent="testVuex">Vuex Test</button>
        {{someData}}
    </div>

</template>

<script>
import router from "../router";
import {mapGetters} from 'vuex'
export default {
    name: "HomeComponent",
    methods: {
        testPush() {
            router.push({name: 'list'})
        },
        testVuex() {
            this.$store.dispatch('showText','Текстик для Vuex')
        }
    },
    mounted() {
        //this.testVuex()
    },
    computed: {
        ...mapGetters({
            someData: 'someData'
        })
        // someData() {
        //     return this.$store.getters.someData
        // }
    }
}
</script>

<style scoped>

</style>
