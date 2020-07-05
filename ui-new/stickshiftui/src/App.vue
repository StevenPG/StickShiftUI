<template>
  <v-app>
    <header-component/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <footer-component/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

// Main structure
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default Vue.extend({
  name: 'App',

  components: {
    HeaderComponent,
    FooterComponent,
  },

  data: () => ({
    //
  }),
});
</script>
