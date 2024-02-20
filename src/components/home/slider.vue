<template>
  <v-img
    src="@/assets/img/slide.jpg"
    :height="$vuetify.display.xlAndUp ? '700px' : '500px'"
    cover
    position="center">
    <v-container class="fill-height">
      <v-row justify="center" align="center" class="fill-height pl-13" no-gutters>
        <v-col cols="12" lg="12" style="position: relative">
          <div class="slide-divider-left"></div>
          <h1 class="text-h2 font-weight-bold mb-4 text-primary" style="line-height: 75px">
            CDIMOM
          </h1>
          <span class="font-weight-bold text-secondary text-uppercase text-subtitle-1">
            {{ $t('home.slider.title') }}
          </span>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>


<style>
.slide-divider-left {
  position: absolute;
  width: 1px;
  height: 222px;
  background-color: #adadad;
  top: -40px;
  left: -40px;
}
</style>
