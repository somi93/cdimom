<template>
  <v-col cols="12" lg="4">
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <div
          v-bind="props"
          class="rounded-lg pa-8 fill-height service-card custom-shadow">
          <v-row no-gutters justify="center" class="mb-8">
            <v-icon
              size="48px"
              :color="isHovering ? 'white' : 'secondary'"
              :icon="service.icon">
            </v-icon>
          </v-row>
          <p
            :class="isHovering ? 'text-white' : 'text-primary'"
            class="text-h5 text-center font-weight-medium">{{ service.title }}</p>
          <p
            :class="isHovering ? 'text-white' : 'text-primary'"
            class="text-center mt-2">
            It is a long fact that a reader will be distracted by the content of a page.
          </p>
          <v-row no-gutters justify="center" class="mt-8">
            <v-btn :color="isHovering ? 'white' : 'secondary'" variant="flat">Detaljnije</v-btn>
          </v-row>
        </div>
      </template>
    </v-hover>
  </v-col>
</template>

<script setup>
const props = defineProps({
  service: {
    type: Object,
    required: true
  }
})
</script>

<style>
.service-card{
  position: relative;
  background-color: white;
}
.service-card * {
  z-index: 1;
  position: relative;
  /*transition: all .2s;*/
  transition: background-color .2s linear, color .2s linear;
}
.service-card::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scaleY(0);
  transform-origin: center;
  /*background: #F14A16;*/
  background: #e31e24;
  z-index: 0;
  transition: transform 0.4s;
  border-radius: 8px;
}
.service-card:hover::after {
  transform: scaleY(1);
}
</style>
