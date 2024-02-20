<template>
  <v-col cols="12" lg="3">
    <div class="bg-white rounded-lg pa-4 fill-height custom-shadow">
      <div class="bg-secondary rounded-lg pa-2 mb-4" style="height: 52px;aspect-ratio: 1">
        <v-icon size="36px" color="white" :icon="item.icon"></v-icon>
      </div>
      <p class="text-h5 font-weight-bold text-primary">{{ item.title }}</p>
      <p class="mt-2" v-html="item.text"></p>
    </div>
  </v-col>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>
