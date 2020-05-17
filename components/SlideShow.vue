<template>
  <BCarousel
    id="carousel-slider"
    v-model="slide"
    :interval="4000"
    controls
    indicators
    background="#ababab"
    img-width="1024"
    img-height="480"
    style="text-shadow: 1px 1px 2px #333;"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <BCarouselSlide
      v-for="slider in sliders"
      :key="slider.ID"
      :img-src="slider.imgSrc"
    />
  </BCarousel>
</template>

<style scoped>
#carousel-slider {
  overflow: hidden;
  width: 100vw;
  height: 500px;
}
</style>

<script>
import { BCarousel, BCarouselSlide } from 'bootstrap-vue'
export default {
  components: {
    BCarousel,
    BCarouselSlide
  },
  props: {
    sliders: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>
