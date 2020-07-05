<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-icon>mdi-speedometer</v-icon>
      <!-- TODO - Add some spacing around these components -->
      <h2>Stickshift</h2>
      <p>UI</p>
    </div>

    <v-spacer></v-spacer>

    <a href="http://www.css3.info/">
      <img src="https://cdn.worldvectorlogo.com/logos/css3.svg" style="width:3em; height:3em;" />
    </a>
    <!-- TODO - Find one with white text, or put white circles -->
    <a href="https://vuejs.org/">
      <img
        src="https://cdn.iconscout.com/icon/free/png-512/vuejs-1175052.png"
        style="width:3em; height:3em;"
      />
    </a>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      noop: true
    };
  }
};
</script>