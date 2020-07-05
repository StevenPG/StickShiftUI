<template>
  <v-container fluid class="grey lighten-5">
    <v-row align="center"
      justify="center">
        <!-- TODO - make this responsive, side by side but stacked on mobile -->
      <v-col cols="6">
        <v-card class="ma-8 pa-2" outlined tile>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Reddit</div>
              <v-list-item-title class="headline mb-1">/r/stickshift</v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn text>Visit</v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="ma-8 pa-2" outlined tile>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Reddit</div>
              <v-list-item-title class="headline mb-1">/r/ThreePedals</v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn text>Visit</v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="ma-8 pa-2" outlined tile>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Reddit</div>
              <v-list-item-title class="headline mb-1">/r/cars</v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn text>Visit</v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="ma-8 pa-2" outlined tile>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Reddit</div>
              <v-list-item-title class="headline mb-1">/r/manualmasterrace</v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn text>Visit</v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="ma-8 pa-2" outlined tile>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Crawlpedia</div>
              <v-list-item-title class="headline mb-1">Crawlpedia Calculator</v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn text>Visit</v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="ma-8 pa-2" outlined tile>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">Youtube</div>
              <v-list-item-title class="headline mb-1">Smoking Tire Manual Tutorial</v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn text>Part 1</v-btn>
            <v-btn text>Part 2</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Resources",

  data: () => ({
    noop: true
  })
});
</script>
