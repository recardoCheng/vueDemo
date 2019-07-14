<template>
    <div>
      <app-header></app-header>
      <router-view></router-view>
    </div>
</template>

<script>

import header from './components/header.vue'

export default {
    components: {
      'app-header': header
    },

    data () {
        return {
        }
    },

    methods: {
    },

    created() {
      console.log("app created");
    },

    beforeMount() {
      console.log("app beforeMount");
    },

    mounted() {
      console.log("app mounted");
    },

    beforeDestroy() {
      console.log("app beforeDestroy");
    },

    destroyed() {
      console.log("app destroyed");
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
