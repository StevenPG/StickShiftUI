<template>
  <v-bottom-navigation v-model="bottomNav" grow>
      <!-- TODO - change the CSS to remove underlines -->
    <router-link to="/">
      <v-btn value="home">
        <span>Calculator</span>
        <v-icon>mdi-calculator</v-icon>
      </v-btn>
    </router-link>
    <router-link to="/about">
      <v-btn value="about">
        <span>About</span>
        <v-icon>mdi-information</v-icon>
      </v-btn>
    </router-link>
    <router-link to="/resources">
      <v-btn value="resources">
        <span>Resources</span>
        <v-icon>mdi-book-open</v-icon>
      </v-btn>
    </router-link>
  </v-bottom-navigation>
</template>
<script>
export default {
  data() {
    return {
      bottomNav: "home"
    };
  }
};
</script>
