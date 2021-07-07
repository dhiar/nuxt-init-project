<template>
  <v-container>
    <div>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field dense label="Input Dim" outlined></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field dense label="Input Len" outlined></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field dense label="Output Dim" outlined></v-text-field>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue darken-1"
          text
          @click="propEmbedding = false"
        >
          Close
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="propEmbedding = false"
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
    propEmbedding: false,
  })
}
</script>

<style>

</style>