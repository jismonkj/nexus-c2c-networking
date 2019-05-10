@extends('layouts.user')

@section('content')

<div class="profile-settings-responsive">

	<a href="#" class="js-profile-settings-open profile-settings-open">
		<svg class="svg-inline--fa fa-angle-right fa-w-8" aria-hidden="true" data-prefix="fa" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg><!-- <i class="fa fa-angle-right" aria-hidden="true"></i> -->
		<svg class="svg-inline--fa fa-angle-left fa-w-8" aria-hidden="true" data-prefix="fa" data-icon="angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg><!-- <i class="fa fa-angle-left" aria-hidden="true"></i> -->
	</a>
	<div class="mCustomScrollbar ps ps--theme_default ps--active-y" data-mcs-theme="dark" data-ps-id="fed9c74b-40d0-d0f3-87bb-a3e718c31e2b">
		<div class="ui-block">
			<div class="your-profile">
				<div class="ui-block-title ui-block-title-small">
					<h6 class="title">Your PROFILE</h6>
				</div>

				<div id="accordion1" role="tablist" aria-multiselectable="true">
					<div class="card">
						<div class="card-header" role="tab" id="headingOne-1">
							<h6 class="mb-0">
								<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne-1" aria-expanded="true" aria-controls="collapseOne">
									Profile Settings
									<svg class="olymp-dropdown-arrow-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use></svg>
								</a>
							</h6>
						</div>

						<div id="collapseOne-1" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
							<ul class="your-profile-menu">
								<li>
									<a href="28-YourAccount-PersonalInformation.html">Personal Information</a>
								</li>
								<li>
									<a href="29-YourAccount-AccountSettings.html">Account Settings</a>
								</li>
								<li>
									<a href="30-YourAccount-ChangePassword.html">Change Password</a>
								</li>
								<li>
									<a href="31-YourAccount-HobbiesAndInterests.html">Hobbies and Interests</a>
								</li>
								<li>
									<a href="32-YourAccount-EducationAndEmployement.html">Education and Employement</a>
								</li>
							</ul>
						</div>
					</div>
				</div>


				<div class="ui-block-title">
					<a href="33-YourAccount-Notifications.html" class="h6 title">Notifications</a>
					<a href="#" class="items-round-little bg-primary">8</a>
				</div>
				<div class="ui-block-title">
					<a href="34-YourAccount-ChatMessages.html" class="h6 title">Chat / Messages</a>
				</div>
				<div class="ui-block-title">
					<a href="35-YourAccount-FriendsRequests.html" class="h6 title">Friend Requests</a>
					<a href="#" class="items-round-little bg-blue">4</a>
				</div>
				<div class="ui-block-title ui-block-title-small">
					<h6 class="title">FAVOURITE PAGE</h6>
				</div>
				<div class="ui-block-title">
					<a href="36-FavPage-SettingsAndCreatePopup.html" class="h6 title">Create Fav Page</a>
				</div>
				<div class="ui-block-title">
					<a href="36-FavPage-SettingsAndCreatePopup.html" class="h6 title">Fav Page Settings</a>
				</div>
			</div>
		</div>
	<div class="ps__scrollbar-x-rail" style="left: 0px; bottom: 0px;"><div class="ps__scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__scrollbar-y-rail" style="top: 0px; height: 566px; right: 0px;"><div class="ps__scrollbar-y" tabindex="0" style="top: 0px; height: 491px;"></div></div></div>
</div>

<div class="header-spacer header-spacer-small"></div>


<!-- Main Header Music -->

<div class="main-header">
	<div class="content-bg-wrap bg-music"></div>
	<div class="container">
		<div class="row">
			<div class="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
				<div class="main-header-content">
					<h1>Welcome! Find More About Nexus</h1>
					<p>Want to know more about Nexus? Take a walk-through.</p>
				</div>
			</div>
		</div>
	</div>

	<img class="img-bottom" src="theme/img/music-bottom.png" alt="friends">
</div>

<!-- ... end Main Header Music -->

<div class="container">
    <div class="row">
        <div class="col responsive-display-none">
            <div class="ui-block">

                <!-- Your Profile  -->

                <div class="text-center your-profile p-3">
				<a class="btn btn-purple" @click.prevent="startTour">
				<i class="fas fa-play"></i>
				</a>
				<a class="btn btn-grey" href="/home">
					Skip Tour
				</a>
                </div>

                <!-- ... end Your Profile  -->

            </div>
        </div>
    </div>
</div>

<walk-through v-show="showWalkThrough"></walk-through>
@endsection
