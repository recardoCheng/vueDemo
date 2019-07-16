<template>
    <div id="wrapper">
        <div id="left" ref="left">
            <h1>gmap1</h1>
        </div>
        <div id="right" ref="right">
            <h1>gmap2</h1>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    google: {
      type: Object,
      required: true
    }
  },

    beforeCreate() {
      console.log("gmap beforeCreate");
    },

    created() {
      console.log("gmap created");
    },

    beforeMount() {
      console.log("gmap beforeMount");
    },

    mounted() {
      console.log("gmap mounted");
      const geocoder = new google.maps.Geocoder();

      const mapLeft = new google.maps.Map(this.$refs.left);
      geocoder.geocode({ address: 'Austria' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status);
        }
        mapLeft.setCenter(results[0].geometry.location);
        mapLeft.fitBounds(results[0].geometry.viewport);
      });
      

      const mapRight = new google.maps.Map(this.$refs.right);
      geocoder.geocode({ address: 'Taiwan' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status);
        }
        mapRight.setCenter(results[0].geometry.location);
        mapRight.fitBounds(results[0].geometry.viewport);
      });
      
    },

    beforeUpdate() {
      console.log("gmap beforeUpdate");
    },

    updated() {
      console.log("gmap updated");
    },

    activated() {
      console.log("gmap activated");
    },

    deactivated() {
      console.log("gmap deactivated");
    },

    beforeDestroy() {
      console.log("gmap beforeDestroy");
    },

    destroyed() {
      console.log("gmap destroyed");
    }
}

</script>

<style scoped>
    #wrapper {
        display: flex;
    }

    #left {
        flex: 0 0 50%;
        height: 300px;
        margin: 10px;
    }

    #right {
        flex: 1;
        height: 300px;
        margin: 10px;
    }
</style>