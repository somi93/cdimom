<template>
  <div
    ref="item">
    <v-row
      justify="center"
      align="center"
      v-touch="{
      left: () => $emit('previousImage'),
      right: () => $emit('nextImage')
    }"
      v-if="image"
      style="height: 90vh">
      <img :src="image.url + extension"/>
      <p className="mt-2">{{ image.description }}</p>
    </v-row>
  </div>
</template>

<script setup>
import {ref, computed, onMounted} from 'vue';

const props = defineProps({
  image: {
    type: Object,
    required: true
  }
})

const item = ref(null);
const elWidth = ref(0);
const elHeight = ref(0);

onMounted(() => {
  console.log(item.value)
  const bounding = item.value.getBoundingClientRect();
  elWidth.value = bounding.width;
  elHeight.value = bounding.height;
})

const extension = computed(() => {
  let width = maxWidth.value;
  let height = Math.floor(aspectRatio.value * width);
  if (height > maxHeight.value) {
    height = maxHeight.value;
    width = Math.floor(height / aspectRatio.value);
  }
  return `=w${width}-h${height}-c`;
});
const dimensions = computed(() => {
  return props.image.params.dimensions;
})
const height = computed(() => {
  return dimensions.value.height;
});
const width = computed(() => {
  return dimensions.value.width;
})
const maxWidth = computed(() => {
  return Math.floor(Math.min(elWidth.value, width.value))
})
const maxHeight = computed(() => {
  return Math.floor(Math.min(elHeight.value, height.value))
})
const aspectRatio = computed(() => {
  return height.value / width.value;
})
</script>
