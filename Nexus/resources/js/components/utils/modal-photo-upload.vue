<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-dialog window-popup update-header-photo" role="document">
        <div class="modal-content" style="display: none;">
          <a
            href="#"
            class="close icon-close"
            data-dismiss="modal"
            @click.prevent="close"
            aria-label="Close"
          >
            <svg class="olymp-close-icon">
              <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-close-icon"></use>
            </svg>
          </a>

          <div class="modal-header">
            <h6 class="title">Update Header Photo</h6>
          </div>

          <div class="modal-body">
            <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
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
      this.$parent.isModalVisible = false;
    }
  },
  data: function() {
    return {
      dropzoneOptions: {
        url: "/",
        maxFiles: 1,
        thumbnailWidth: 500,
        maxFilesize: 0.5,
        addRemoveLinks: true,
        headers: { "My-Awesome-Header": "header value" },
        maxfilesexceeded: function() {
          
        }
      }
    };
  },
  methods: {}
};
</script>