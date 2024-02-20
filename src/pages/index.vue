<template>
  <slider></slider>
  <div id="about" class="pt-1">
    <div class="c-container py-15 mt-13">
      <about></about>
    </div>
  </div>
  <v-row class="bg-accent" no-gutters id="services">
    <div class="c-container py-15 mt-15">
      <services></services>
    </div>
  </v-row>
  <div class="c-container py-15 mt-15" id="projects">
    <projects></projects>
  </div>
  <clients></clients>
  <div class="c-container py-15 mt-15">
    <about></about>
  </div>
  <contact></contact>
</template>

<script setup>
//
import About from "@/components/home/about";
import Slider from "@/components/home/slider";
import Services from "@/components/home/services";
import Projects from "@/components/home/projects";
import Clients from "@/components/home/clients";
import Contact from "@/components/home/contact";
</script>

<script>
export default {
  mounted() {
    if(window.location.hash) {
      document.getElementById(window.location.hash.slice(1)).scrollIntoView({ behavior: "smooth"});
    }
  }
}
</script>
