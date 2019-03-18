@extends('layouts.guest')

@section('content')

<div class="content-bg-wrap"></div>

<div class="container py-4">
    <div class="row display-flex">
        <div class="col-md-6">
            <div class="landing-content">
                <h1>Welcome to the Biggest Social Network in the World</h1>
                <p>We are the best and biggest social network with 5 billion active users all around the world. Share your items, buy, sell, auctions and much more!
                </p>
                <a href="#" class="btn btn-md btn-border c-white">Register Now!</a>
            </div>
        </div>

        <div class="col-md-6">

            <!-- Login-Registration Form  -->

            <div class="registration-login-form">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#home" role="tab">
                            <svg class="olymp-login-icon">
                                <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-login-icon') }}"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#profile" role="tab">
                            <svg class="olymp-register-icon">
                                <use xlink:href="{{ asset('theme/svg-icons/sprites/icons.svg#olymp-register-icon') }}"></use>
                            </svg>
                        </a>
                    </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                    <div class="tab-pane" id="home" role="tabpanel" data-mh="log-tab">
                        <div class="title h6">Register to Nexus</div>
                        <form id="regForm" method="POST" action="{{ route('register') }}" class="content" @submit.prevent="register">
                            @csrf
                            <div class="row">
                                <div class="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div class="form-group label-floating is-empty is-focused">
                                        <label class="control-label">First Name</label>
                                        <input class="form-control" placeholder="" type="text" name="fname" v-model="registerForm.fname" @keyup="validate('fname')" required>
                                    </div>
                                </div>
                                <div class="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div class="form-group label-floating is-empty is-focused">
                                        <label class="control-label">Last Name</label>
                                        <input class="form-control" placeholder="" type="text" name="lname" v-model="registerForm.lname" @keyup="validate('lname')" required>
                                    </div>
                                </div>
                                <div class="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div class="form-group label-floating is-empty is-focused" :class="{ 'has-success':registerForm.validMail }">
                                        <label class="control-label">Your Email</label>
                                        <input class="form-control" placeholder="" type="email" name="email" v-model="registerForm.email" @keyup="validate('email')">
                                    </div>
                                    <div class="form-group label-floating is-empty is-focused">
                                        <label class="control-label">Your Password</label>
                                        <input class="form-control" placeholder="" type="password" name="password" v-model="registerForm.password" @keyup="validate('password')">
                                    </div>

                                    <div class="form-group label-floating">
                                        <label class="control-label">Your Birthday</label>
                                        <input type="date" name="dob" value="1999-12-02" min="1980-01-01" max="2004-12-31" v-model="registerForm.dob" @keyup="validate('dob')" @click="validate('dob')" @change="validate('dob')" required>
                                    </div>

                                    <div class="form-group label-floating">
                                        <label class="control-label">Your Gender</label>
                                        <select class="form-control-lg" name="gender" v-model="registerForm.gender" @change="validate('gender')">
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>

                                    <div class="remember">
                                        <div class="checkbox">
                                            <label>
                                            </label>
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-purple btn-lg full-width">
                                        <span v-show="queryServer" class="fa fa-spinner fa-spin"></span>
                                        <span v-show="!queryServer">
                                        @{{ chngRegBtnTitle }}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="tab-pane active" id="profile" role="tabpanel" data-mh="log-tab">
                        <div class="title h6">Login to your Account</div>
                        <form class="content" method="POST" action="{{ route('login') }}" @submit.prevent="loginNex" id="logNexus">
                            @csrf
                            <div class="row">
                                <div class="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div class="form-group label-floating is-focused is-empty">
                                        <label class="control-label">Your Email</label>
                                        <input class="form-control" placeholder="" type="email" name="email" v-model="email">
                                        @if ($errors->has('email'))
                                        <span role="alert">
                                            <strong>
                                                {{ $errors->first('email') }}
                                            </strong>
                                        </span>
                                        @endif
                                    </div>
                                    <div class="form-group label-floating is-empty is-focused">
                                        <label class="control-label">Your Password</label>
                                        <input class="form-control" placeholder="" type="password" name="password" v-model="password" title="Password must be between 4 and 10 digits long and include at least one numeric digit.">
                                        @if ($errors->has('password'))
                                        <span role="alert">
                                            <strong>
                                                {{ $errors->first('password') }}
                                            </strong>
                                        </span>
                                        @endif
                                    </div>

                                    <div class="remember">

                                        <div class="checkbox">
                                            <label>
                                                <input name="remember" id="remember" type="checkbox">

                                            </label>
                                        </div>
                                        <a href="{{ route('password.request') }}" class="forgot">Forgot my Password</a>
                                    </div>

                                    <button type="submit" href="#" class="btn btn-lg btn-primary full-width">@{{ chngLoginBtnTitle }} </button>

                                    <div class="or"></div>

                                    <a href="#" class="btn btn-lg bg-facebook full-width btn-icon-left"><i class="fab fa-facebook-f" aria-hidden="true"></i>Login with Facebook</a>

                                    <a href="#" class="btn btn-lg bg-twitter full-width btn-icon-left"><i class="fab fa-twitter" aria-hidden="true"></i>Login with Twitter</a>


                                    <p>Don’t you have an account? <a data-toggle="tab" href="#home" role="tab">Register Now!</a> it’s really simple and you can start enjoing all the benefits!</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!-- ... end Login-Registration Form  -->
        </div>
    </div>
</div>
@endsection 