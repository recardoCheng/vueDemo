<template>
    <div>
        <p class="center"> footer </p>
    </div>
</template>

<script>
export default {

    beforeCreate() {
      console.log("footer beforeCreate");
    },

    created() {
      console.log("footer created");
    },

    beforeMount() {
      console.log("footer beforeMount");
    },

    mounted() {
      console.log("footer mounted");
    },

    beforeUpdate() {
      console.log("footer beforeUpdate");
    },

    updated() {
      console.log("footer updated");
    },

    activated() {
      console.log("footer activated");
    },

    deactivated() {
      console.log("footer deactivated");
    },

    beforeDestroy() {
      console.log("footer beforeDestroy");
    },

    destroyed() {
      console.log("footer destroyed");
    }
}

</script>

<style scoped>

.router-link-active {
    background: #eee;
    color: #444;
}

.center {
  text-align: center;
}
</style>