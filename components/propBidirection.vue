<template>
  <v-container>
    <div>
      <v-row>
        <v-col cols="12" sm="12">
          <v-text-field dense label="Units" outlined></v-text-field>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1"
          text
          @click="propBidirection = false"
        >
          Close
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="propBidirection = false"
        >
          Save
        </v-btn>
      </v-card-actions>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    propBidirection: false,
  })
}
</script>

<style>

</style>