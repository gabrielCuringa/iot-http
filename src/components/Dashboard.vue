<template>
  <div id="dashboard">
    <ul>
      <li v-for="(sensor, idx) in sensors" v-bind:key="idx">
        <p>{{ sensor.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { sensorRef } from "../services/firebase.js";
export default {
  data() {
    return {};
  },
  firebase: {
    sensors: sensorRef
  },
  mounted() {
    this.test();
  },
  methods: {
    test() {
      console.log(sensorRef);
    }
  }
};
</script>

<style></style>
