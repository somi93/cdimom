<template>
  <v-col cols="12" lg="4" class="client-card">
    <v-row no-gutters class="fill-height" justify="center" align="center">
      <img :style="`width: ${client.width}`" :src="client.image"/>
    </v-row>
  </v-col>
</template>

<script setup>
const props = defineProps({
  client: {
    type: Object,
    required: true
  }
})
</script>

<style>
.client-card {
  border-left: 1px solid #2e2e36;
  border-bottom: 1px solid #2e2e36;
}

.client-card img {
  filter: grayscale(.5);
  transition: all .7s;
  cursor: pointer;
}
.client-card:hover img{
  filter: grayscale(0);
  transform: scale(1.2);
}
</style>
