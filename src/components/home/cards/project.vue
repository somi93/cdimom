<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-img
        v-bind="props"
        :src="project.image"
        cover
        class="project-card custom-shadow"
        :height="project.height">
        <v-row align="end" class="fill-height project-card-details" no-gutters v-if="isHovering">
          <div class="bg-accent" style="width: 100%;" :style="`height:${infoHeight}`">
            <v-row
              no-gutters
              :justify="infoHeight === '50%' ? 'center' : 'space-between'"
              :align="infoHeight === '50%' ? 'start' : 'center'"
              :class="infoHeight === '50%' && 'flex-column'"
              class="fill-height px-4">
              <div :class="infoHeight === '50%' && 'mb-4'">
                <span>Projekat</span><br/>
                <span class="text-h5 font-weight-medium text-primary">{{ project.title }}</span>
              </div>
              <v-btn color="secondary" fab icon>
                <v-icon :icon="mdiChevronRight"></v-icon>
              </v-btn>
            </v-row>
          </div>
        </v-row>
      </v-img>
    </template>
  </v-hover>
</template>

<script setup>
import {mdiChevronRight} from '@mdi/js'

const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  infoHeight: {
    type: String,
    required: false,
    default: '100px'
  }
})
</script>

<style>
.project-card-details {
  animation-name: example;
  animation-duration: .4s;
  position: relative;
}
@keyframes example {
  0%   {left:0px; bottom:-100px;}
  100% {left:0px; bottom:0px;}
}
</style>
