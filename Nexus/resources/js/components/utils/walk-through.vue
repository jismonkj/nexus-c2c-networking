<template>
  <div class="modal-backdrop">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <figure> 
            <video class="height-462" alt="vid" :src="'storage/'+slide.src" autoplay loop></video>
          </figure>
        </div>
        <div class="col-md-3">
          <div class="row">
            <div class="col">
              <div class="card height-462">
                <div class="card-header">
                  <h4>{{ slide.title }}</h4>
                </div>
                <div class="card-body">
                  <div v-html="slide.content"></div>
                  <div class="row drop-bottom">
                    <div class="col">
                      <button class="btn btn-primary" @click="previous">Back</button>
                      <button class="btn btn-purple" @click="next">Next</button>
                      <button class="btn btn-primary" @click="$root.endTour">End</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      slides: [
        {
          src: "walk/walk1.webm",
          title: "Friend Suggestions",
          content: "Friend Suggestions are based on your interests added to your profile. You can send a request by simply tapping the blue button."
        }
      ],
      currentSlide: 0,
      slideSize:1
    };
  },
  computed: {
    slide: function() {
      return this.slides[this.currentSlide];
    }
  },
  methods: {
    next() {
      (this.currentSlide == this.slideSize -1)?
        this.currentSlide = 0: this.currentSlide++;
    },
    previous() {
      (this.currentSlide == this.slideSize -1)?
        this.currentSlide = this.slideSize -1 : this.currentSlide--;
      
    }
  }
};
</script>
