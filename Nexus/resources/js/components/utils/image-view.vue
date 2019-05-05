<template>
  <div
    class="mfp-wrap mfp-gallery mfp-close-btn-in mfp-zoom-in mfp-ready modal-backdrop"
    tabindex="-1"
    style="overflow: hidden auto;"
  >
    <div class="mfp-container mfp-s-ready mfp-image-holder">
      <div class="mfp-content">
        <div class="mfp-figure mfp-with-anim">
          <button title="Close (Esc)" type="button" class="mfp-close" @click="close">×</button>
          <figure>
            <img class="mfp-img" alt="photo" :src="'storage/'+imgeUrl" style="max-height: 668px;">
            <figcaption>
              <div class="mfp-bottom-bar">
                <div class="mfp-title"></div>
                <div class="mfp-counter">{{ counter+1 }} of {{ size }}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="mfp-preloader">Loading...</div>
      <button
        title="Previous (Left arrow key)"
        type="button"
        class="mfp-arrow mfp-arrow-left mfp-prevent-close"
        @click="previousImage"
      ></button>
      <button
        title="Next (Right arrow key)"
        type="button"
        class="mfp-arrow mfp-arrow-right mfp-prevent-close"
        @click="nextImage"
      ></button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["imgurl", "imgset"],
  mounted() {
    this.counter = this.imgset.findIndex(item => item.path == this.imgurl);
    this.size = this.imgset.length;
    this.imgeUrl = this.imgurl;
    this.images = this.imgset;
  },
  data: function() {
    return {
      counter: 0,
      size: 0,
      imgeUrl: "",
      images: ""
    };
  },
  methods: {
    nextImage() {
      if (this.size) {
        this.counter + 1 == this.size ? (this.counter = 0) : this.counter++;
        this.imgeUrl = this.images[this.counter].path;
      }
    },
    previousImage() {
      if (this.size) {
        this.counter == 0 ? (this.counter = this.size - 1) : this.counter--;
        this.imgeUrl = this.images[this.counter].path;
      }
    },
    close() {
      this.$root.$data.viewImage = false;
      this.$root.$data.imgPath = null;
      this.$root.$data.imgSet = null;
      this.$root.$data.pageShadow = false;
    }
  }
};
</script>
