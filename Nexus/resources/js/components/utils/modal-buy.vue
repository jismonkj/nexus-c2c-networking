<template>
  <div class="modal-backdrop">
    <div class="modal buy">
      <div class="modal-dialog window-popup update-header-photo" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="title">Buy Item</h6>
            <a
              href="#"
              @click.prevent="close"
              data-toggle="tooltip"
              data-placement="left"
              title="Close"
            >
              <span class="fa fa-times fa-spin"></span>
            </a>
          </div>

          <div class="modal-body">
            <!-- //item details -->
            <div class="ui-block">
              <article class="hentry post has-post-thumbnail">
                <div class="post__author author vcard inline-items">
                  <img src="theme/img/avatar5-sm.jpg" alt="author">
                  <div class="author-date">
                    <a
                      :href="$root.encr(story.xid)"
                      class="h6 post__author-name fn"
                    >{{ story.fname+" "+story.lname }}</a>
                    <div class="post__date">
                      <time :datetime="story.created_at" class="published">{{ story.created_at }}</time>
                    </div>
                  </div>
                  <a class="post-add-icon inline-items user-liked-font float-right">
                    <span>{{ story.likes }}</span>
                    <svg class="olymp-heart-icon">
                      <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                    </svg>
                  </a>
                </div>
                <div class="story-block" v-if="!showPayForm">
                  <p>{{ story.contents }}</p>
                <div class="post-thumb">
                  <div class="row">
                    <div class="col p-1">
                      <img
                        src="storage/items/13//TTWXRr73CIn1kIe2o0ABVxdXSOVSMOwhwwzzwuwF.jpeg"
                        alt="photo"
                      >
                    </div>
                    <div class="col p-1">
                      <img
                        src="storage/items/13//giCEJgdc0f2TD1Gi3t3ISuSZ3X2lqZ1dKNSuRHfo.jpeg"
                        alt="photo"
                      >
                    </div>
                  </div>
                </div>
                <div class="post-additional-info inline-items">
                <div class="col-3 offset-3">
                  <label for="quantity">Quantity Required</label>
                </div>
                <div class="col-3">
                  <input type="text" name="quantity" v-model="itemQuantity" class="py-1">
                </div>
                  <div class="col-3">
                      <button class="btn btn-primary m-0 px-3 py-1" @click="showPay">
                      {{ buyButton }}
                    </button>
                </div>
                </div>
                </div>
                <div class="story-block" v-else>
                  <!-- pay -->
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    close() {
      this.$parent.isBuyModalVisible = false;
    },
    yes: function(story) {
      this.story = story;
      this.itemQuantity = 1;
      this.buyButtton = this.story.price;
    },
     notify: function(text, postText) {
      this.buyButton = text;
      setTimeout(() => {
        this.buyButton = postText;
      }, 5000);
    },
    showPay:function(){
      this.showPayForm = true;
    }
  },
  data: function() {
    return {
      story: "",
      itemQuantity: "",
      buyButton: "Buy Now",
      showPayForm: false
    };
  },
  watch: {
    itemQuantity:function(){
      if(!this.itemQuantity == 0){ //should not be zero
        if(this.itemQuantity < this.story.quantity+1){ //should meet the quantity available
          this.buyButton = "Buy For $ "  +this.story.price * this.itemQuantity;
        }else{
          this.notify("Max:"+this.story.quantity, "Buy Item");
        }
      }
    }
  }
};
</script>