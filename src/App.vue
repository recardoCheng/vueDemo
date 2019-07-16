<template>
    <div class="app">
      <app-header></app-header>
      <router-view :google="google"></router-view>
      <app-footer></app-footer>
    </div>
</template>

<script>

import gmapsInit from './utils/gmaps';
import header from './components/header.vue';
import footer from './components/footer.vue';


export default {
    components: {
      'app-header': header,
      'app-footer': footer,
    },

    data () {
        return {
          google: {
          }
        }
    },

    watch: {
        '$route' (to, from) {
            console.log('app route watch, ', 'to:', to, 'from:', from);
        }
    },

    methods: {
    },

    beforeCreate() {
      console.log("app beforeCreate");
    },

    created() {
      console.log("app created");
    },

    async beforeMount() {
      console.log("app beforeMount");  
    },

    async mounted() {
      console.log("app mounted");
      let map = await gmapsInit();
      this.google.map=map;
      console.log("init done:", this.google);  
    },

    beforeUpdate() {
      console.log("app beforeUpdate");
    },

    updated() {
      console.log("app updated");
    },

    activated() {
      console.log("app activated");
    },

    deactivated() {
      console.log("app deactivated");
    },

    beforeDestroy() {
      console.log("app beforeDestroy");
    },

    destroyed() {
      console.log("app destroyed");
    },

    computed: {
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
