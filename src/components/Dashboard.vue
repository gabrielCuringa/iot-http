<template>
  <div id="dashboard"></div>
</template>

<script>
import sensorServices from "../services/sensorServices.js";
export default {
  data() {
    return {};
  },
  mounted() {
    this.test();
  },
  methods: {
    test() {
      new sensorServices().getAllSensors();
    }
  }
};
</script>

<style></style>
