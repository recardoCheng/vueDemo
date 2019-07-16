<template>
    <nav>
        <ul>
            <li><router-link to="/"　exact>Blog</router-link></li>
            <li><router-link to="/add" exact>Add a New Blog</router-link></li>
            <li><router-link to="/gmap" exact>Google Map</router-link></li>

        </ul>
    </nav>
</template>

<script>
export default {

    beforeCreate() {
      console.log("header beforeCreate");
    },

    created() {
      console.log("header created");
    },

    beforeMount() {
      console.log("header beforeMount");
    },

    mounted() {
      console.log("header mounted");
    },

    beforeUpdate() {
      console.log("header beforeUpdate");
    },

    updated() {
      console.log("header updated");
    },

    activated() {
      console.log("header activated");
    },

    deactivated() {
      console.log("header deactivated");
    },

    beforeDestroy() {
      console.log("header beforeDestroy");
    },

    destroyed() {
      console.log("header destroyed");
    }
}

</script>

<style scoped>

.router-link-active {
    background: #eee;
    color: #444;
}
</style>