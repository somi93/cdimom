<template>
  <div class="c-progress" ref="progress" v-scroll="onScroll">
    <div style="position: relative;height: 100%">
      <div
        class="c-progress-current"
        @mousedown="mouseDown"
        :style="`top: ${currentScroll}%`">
      </div>
    </div>
  </div>
  <v-btn
    v-if="currentScroll > 20"
    @click="scrollToTop"
    position="fixed"
    fab
    color="white"
    icon
    class="btn-scroll-top">
    <v-icon color="secondary" :icon="mdiChevronUp"></v-icon>
  </v-btn>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {mdiChevronUp} from '@mdi/js'

const currentScroll = ref(0);
const isMoving = ref(false);
const progress = ref(null);


const mouseUp = (event) => {
  isMoving.value = false;
  document.body.style.userSelect = "auto";
  const docEl = document.documentElement;
  docEl.style.scrollBehavior = "smooth";
}

const mouseMove = (event) => {
  if (isMoving.value) {
    const box = progress.value.getBoundingClientRect();
    const body = document.body;
    body.style.userSelect = "none";
    const docEl = document.documentElement;
    docEl.style.scrollBehavior = "initial";
    const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    const clientTop = docEl.clientTop || body.clientTop || 0;
    const top = box.top + scrollTop - clientTop;

    const fromTop = Math.min(progress.value.getBoundingClientRect().height, Math.max(event.pageY - top, 0));
    const percentage = (fromTop * 100) / progress.value.getBoundingClientRect().height;

    const viewportHeight = window.innerHeight;
    const scrollPosition = (body.getBoundingClientRect().height - viewportHeight) * (percentage / 100);
    // Get the viewport height
    window.scrollTo(0, scrollPosition)
    currentScroll.value = Math.max(0, Math.min(100, percentage))
  }
}
window.addEventListener('mouseup', mouseUp)
window.addEventListener('mousemove', mouseMove)

onMounted(() => {
  const {y, height} = document.body.getBoundingClientRect();
});

const mouseDown = (event) => {
  isMoving.value = true;
}

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

const onScroll = () => {
  const h = document.documentElement;
  const b = document.body;
  const st = "scrollTop";
  const sh = "scrollHeight";

  // Get the current scroll position and content height
  const scrollPosition = (h[st] || b[st]);
  const contentHeight = (h[sh] || b[sh]);

  // Get the viewport height
  const viewportHeight = window.innerHeight;

  // Calculate the scrollable distance
  const scrollableDistance = contentHeight - viewportHeight;

  // Calculate the percentage scrolled
  const scrollPercent = Math.round((scrollPosition / scrollableDistance) * 100);

  // Ensure value is between 0 and 100
  if (!isMoving.value) {
    currentScroll.value = Math.max(0, Math.min(100, scrollPercent));
  }
}

</script>

<style>

.c-progress {
  position: fixed;
  width: 4px;
  right: 42px;
  top: calc(20vh + 64px);
  height: calc(60vh - 64px);
  z-index: 15;
  background-color: rgba(0, 0, 0, .12);
}

.c-progress-current {
  position: absolute;
  left: 4px;
  height: 40px;
  transform: rotate(90deg);
  aspect-ratio: 1;
  transition: all .3s linear;
  background-image: url("@/assets/img/excavator.png");
  background-size: contain;
}

.btn-scroll-top {
  right: 20px;
  bottom: 20px;
  z-index: 12;
  border: 2px solid #F14A16 !important;
}
</style>
