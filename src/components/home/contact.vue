<template>
  <div class="bg-accent pt-10" id="contact">
    <div class="c-container">
      <v-row justify="center">
        <v-col cols="12" lg="12" class="mb-6">
          <v-row class="flex-column" align="center">
            <div>
              <v-row no-gutters>
                <subtitle class="mr-2">{{ $t('layout.menu.contact') }}</subtitle>
                <subtitle></subtitle>
              </v-row>
            </div>
            <main-title>Kontakt informacije</main-title>
          </v-row>
        </v-col>
        <template v-for="item in contactItems">
          <contact-card :item="item"></contact-card>
        </template>
      </v-row>
    </div>
    <div class="iframe-container mt-8">
      <iframe
        class="responsive-iframe"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.4224761927267!2d20.460767676237623!3d44.79257807107086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7012fa682cc3%3A0xff23954cedc0130e!2z0J7QsdC70LDQutC-0LLRgdC60LAgNDcsINCR0LXQvtCz0YDQsNC0!5e0!3m2!1ssr!2srs!4v1707683325213!5m2!1ssr!2srs"></iframe>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import Subtitle from "@/components/global/subtitle";
import MainTitle from "@/components/global/MainTitle";
import ContactCard from '@/components/home/cards/contact'
import {mdiMapMarker, mdiPhone, mdiEmail, mdiClock} from '@mdi/js'

const contactItems = ref([
  {
    title: 'Adresa',
    icon: mdiMapMarker,
    text: 'Oblakovska 47, Beograd'
  },
  {
    title: 'Telefon',
    icon: mdiPhone,
    text: '065-92-47-851<br/>063-56-87-496'
  },
  {
    title: 'Radno vreme',
    icon: mdiClock,
    text: 'Ponedeljak - Subota<br/> 08:00 - 16:00'
  },
  {
    title: 'Email',
    icon: mdiEmail,
    text: 'info@example.com'
  },
])
</script>

<style>
.iframe-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 25.25%; /* 16:9 Aspect Ratio */
}

.responsive-iframe {
  filter: grayscale(1);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
