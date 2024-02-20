<template>
  <div ref="el" @click="$emit('openGallery')">
    <img :src="image.url + extension"/>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true
    },
    width: {
      type: Number,
      required: false,
      default: 425
    }
  },
  computed: {
    height() {
      const dimensions = this.image.params.dimensions;
      const height = dimensions.height;
      const width = dimensions.width;
      const aspect = height / width;
      return Math.floor(this.width * aspect);
    },
    extension() {
      return `=w${this.width}-h${this.height}-c`;
    }
  }
}
</script>
