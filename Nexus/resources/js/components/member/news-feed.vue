<template>
  <div>
    <!-- start div -->
    <div class="header-spacer"></div>
    <div class="container">
      <div class="row">
        <!-- Main Content -->
<main-feed></main-feed>
        <!-- ... end Main Content -->
        <!-- Left Sidebar -->
<left-side-bar></left-side-bar>

        <!-- ... end Left Sidebar -->
        <!-- Right Sidebar -->
 
<right-side-bar></right-side-bar>
        <!-- ... end Right Sidebar -->
      </div>
    </div>

    <!-- modal upload photos -->
    <div class="modal-dialog window-popup update-header-photo" role="document">
      <div class="modal-content">
        <a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
          <svg class="olymp-close-icon">
            <use xlink:href="svg-icons/sprites/icons.svg#olymp-close-icon"></use>
          </svg>
        </a>

        <div class="modal-header">
          <h6 class="title">Update Header Photo</h6>
        </div>

        <div class="modal-body">
          <a href="#" class="upload-photo-item">
            <svg class="olymp-computer-icon">
              <use xlink:href="svg-icons/sprites/icons.svg#olymp-computer-icon"></use>
            </svg>

            <h6>Upload Photo</h6>
            <span>Browse your computer.</span>
          </a>
          
          <a
            href="#"
            class="upload-photo-item"
            data-toggle="modal"
            data-target="#choose-from-my-photo"
          >
            <svg class="olymp-photos-icon">
              <use xlink:href="svg-icons/sprites/icons.svg#olymp-photos-icon"></use>
            </svg>

            <h6>Choose from My Photos</h6>
            <span>Choose from your uploaded photos</span>
          </a>
        </div>
      </div>
    </div>
    <!-- //end div -->
  </div>
</template>
