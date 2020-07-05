<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <v-row justify="center">
          <v-card class="mx-auto" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">About</div>
                <v-list-item-title class="headline mb-5">Stickshift UI</v-list-item-title>
                <!-- TODO - update this to make it more readable, like a blog post -->
                <v-list-item-subtitle>
                  When I started learning to drive manual transmissions, I searched
                  all around the internet searching for somewhere that I could find
                  resources for new drivers that would really explain what was
                  happening under the hood.
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  One of the useful websites I found let me calculate what the
                  relationship is between MPH and RPM based on gearing.
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  One thing that was always missing was a live simulation of
                  a vehicle that took inputs and allowed the user to play around
                  with a virtual car.
                </v-list-item-subtitle>
                <!-- TODO - make strikethroughs of the below ~words~ -->
                <v-list-item-subtitle>
                  This is the ~1st~ ~2nd~ ~3rd~ ~4th~ ~5th~ 6th iteration of this
                  site either because I was learning the component technologies, or
                  was unhappy with how the site looked and/or performed.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "About",

  data: () => ({
    noop: true
  })
});
</script>
