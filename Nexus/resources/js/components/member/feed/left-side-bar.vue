<template>
  <div class="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-12 col-12">
    <div class="crumina-sticky-sidebar" style>
      <div class="sidebar__inner" style="position: relative;">
        <!-- //friend Suggestions -->
        <div class="ui-block">
          <div class="ui-block-title">
            <h6 class="title">Friend Suggestions</h6>
            <a href="#" class="more">
              <svg class="olymp-three-dots-icon">
                <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
              </svg>
            </a>
          </div>

          <!-- W-Action -->
          <ul class="widget w-friend-pages-added notification-list friend-requests">
            <transition-group leave-active-class="animate fade">
              <li class="inline-items" v-for="people in peopleYouMayKnow" v-bind:key="people.uid">
                <div class="author-thumb">
                  <img :src="'storage/'+people.avatar" alt="author" class="smaller avatar">
                </div>
                <div class="notification-event">
                  <a :href="$root.encr(people.uid)" class="h6 notification-friend">{{ people.name }}</a>
                  <span class="chat-message-item">8 Friends in Common</span>
                </div>
                <span
                  class="notification-icon"
                  v-show="!people.invited"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Send Request"
                >
                  <a href="#" class="accept-request" @click.prevent="sendFriendReq(people.uid)">
                    <span class="without-text icon-add">
                      <svg class="olymp-happy-face-icon">
                        <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use>
                      </svg>
                    </span>
                  </a>
                </span>
                <span
                  class="notification-icon"
                  v-show="people.invited"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Cancel Request"
                >
                  <a
                    href="#"
                    class="accept-request bg-secondary"
                    @click.prevent="delFriendReq(people.uid)"
                  >
                    <span class="without-text icon-minus">
                      <svg class="olymp-happy-face-icon">
                        <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use>
                      </svg>
                    </span>
                  </a>
                </span>
              </li>
            </transition-group>
          </ul>

          <!-- ... end W-Action -->
        </div>

        <div class="ui-block">
          <!-- W-Weather -->
          <div class="widget w-wethear">
            <a href="#" class="more">
              <svg class="olymp-three-dots-icon">
                <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
              </svg>
            </a>

            <div class="wethear-now inline-items">
              <div class="temperature-sensor">64°</div>
              <div class="max-min-temperature">
                <span>58°</span>
                <span>76°</span>
              </div>

              <svg class="olymp-weather-partly-sunny-icon">
                <use xlink:href="#olymp-weather-partly-sunny-icon"></use>
              </svg>
            </div>

            <div class="wethear-now-description">
              <div class="climate">Partly Sunny</div>
              <span>
                Real Feel:
                <span>67°</span>
              </span>
              <span>
                Chance of Rain:
                <span>49%</span>
              </span>
            </div>

            <ul class="weekly-forecast">
              <li>
                <div class="day">sun</div>
                <svg class="olymp-weather-sunny-icon">
                  <use xlink:href="#olymp-weather-sunny-icon"></use>
                </svg>

                <div class="temperature-sensor-day">60°</div>
              </li>

              <li>
                <div class="day">mon</div>
                <svg class="olymp-weather-partly-sunny-icon">
                  <use xlink:href="#olymp-weather-partly-sunny-icon"></use>
                </svg>
                <div class="temperature-sensor-day">58°</div>
              </li>

              <li>
                <div class="day">tue</div>
                <svg class="olymp-weather-cloudy-icon">
                  <use xlink:href="#olymp-weather-cloudy-icon"></use>
                </svg>

                <div class="temperature-sensor-day">67°</div>
              </li>

              <li>
                <div class="day">wed</div>
                <svg class="olymp-weather-rain-icon">
                  <use xlink:href="#olymp-weather-rain-icon"></use>
                </svg>

                <div class="temperature-sensor-day">70°</div>
              </li>

              <li>
                <div class="day">thu</div>
                <svg class="olymp-weather-storm-icon">
                  <use xlink:href="#olymp-weather-storm-icon"></use>
                </svg>

                <div class="temperature-sensor-day">58°</div>
              </li>

              <li>
                <div class="day">fri</div>
                <svg class="olymp-weather-snow-icon">
                  <use xlink:href="#olymp-weather-snow-icon"></use>
                </svg>

                <div class="temperature-sensor-day">68°</div>
              </li>

              <li>
                <div class="day">sat</div>

                <svg class="olymp-weather-wind-icon-header">
                  <use xlink:href="#olymp-weather-wind-icon-header"></use>
                </svg>

                <div class="temperature-sensor-day">65°</div>
              </li>
            </ul>

            <div class="date-and-place">
              <h5 class="date">Saturday, March 26th</h5>
              <div class="place">San Francisco, CA</div>
            </div>
          </div>

          <!-- W-Weather -->
        </div>

        <div class="ui-block">
          <!-- W-Calendar -->
          <div class="w-calendar calendar-container">
            <div class="calendar">
              <header>
                <h6 class="month">March</h6>
                <svg
                  class="svg-inline--fa fa-angle-left fa-w-8 calendar-btn-prev"
                  href="#"
                  aria-hidden="true"
                  data-prefix="fas"
                  data-icon="angle-left"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                  data-fa-i2svg
                >
                  <path
                    fill="currentColor"
                    d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
                  ></path>
                </svg>
                <!-- <a class="calendar-btn-prev fas fa-angle-left" href="#"></a> -->
                <svg
                  class="svg-inline--fa fa-angle-right fa-w-8 calendar-btn-next"
                  href="#"
                  aria-hidden="true"
                  data-prefix="fas"
                  data-icon="angle-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                  data-fa-i2svg
                >
                  <path
                    fill="currentColor"
                    d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                  ></path>
                </svg>
                <!-- <a class="calendar-btn-next fas fa-angle-right" href="#"></a> -->
              </header>
              <table>
                <thead>
                  <tr>
                    <td>Mon</td>
                    <td>Tue</td>
                    <td>Wed</td>
                    <td>Thu</td>
                    <td>Fri</td>
                    <td>Sat</td>
                    <td>San</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-month="12" data-day="1">1</td>
                    <td
                      data-month="12"
                      data-day="2"
                      class="event-uncomplited event-complited event"
                    >2</td>
                    <td data-month="12" data-day="3">3</td>
                    <td data-month="12" data-day="4">4</td>
                    <td data-month="12" data-day="5">5</td>
                    <td data-month="12" data-day="6">6</td>
                    <td data-month="12" data-day="7">7</td>
                  </tr>
                  <tr>
                    <td data-month="12" data-day="8">8</td>
                    <td data-month="12" data-day="9">9</td>
                    <td data-month="12" data-day="10" class="event-complited event">10</td>
                    <td data-month="12" data-day="11" class="current-day">11</td>
                    <td data-month="12" data-day="12">12</td>
                    <td data-month="12" data-day="13">13</td>
                    <td data-month="12" data-day="14">14</td>
                  </tr>
                  <tr>
                    <td data-month="12" data-day="15" class="event-complited-2 event">15</td>
                    <td data-month="12" data-day="16">16</td>
                    <td data-month="12" data-day="17">17</td>
                    <td data-month="12" data-day="18">18</td>
                    <td data-month="12" data-day="19">19</td>
                    <td data-month="12" data-day="20">20</td>
                    <td data-month="12" data-day="21">21</td>
                  </tr>
                  <tr>
                    <td data-month="12" data-day="22">22</td>
                    <td data-month="12" data-day="23">23</td>
                    <td data-month="12" data-day="24">24</td>
                    <td data-month="12" data-day="25">25</td>
                    <td data-month="12" data-day="26">26</td>
                    <td data-month="12" data-day="27">27</td>
                    <td data-month="12" data-day="28" class="event-uncomplited event">28</td>
                  </tr>
                  <tr>
                    <td data-month="12" data-day="29">29</td>
                    <td data-month="12" data-day="30">30</td>
                    <td data-month="12" data-day="31">31</td>
                  </tr>
                </tbody>
              </table>
              <div class="list">
                <div
                  id="accordion-1"
                  role="tablist"
                  aria-multiselectable="true"
                  class="day-event"
                  data-month="12"
                  data-day="2"
                >
                  <div class="ui-block-title ui-block-title-small">
                    <h6 class="title">TODAY’S EVENTS</h6>
                  </div>
                  <div class="card">
                    <div class="card-header" role="tab" id="headingOne-1">
                      <div class="event-time">
                        <span class="circle"></span>
                        <time datetime="2004-07-24T18:18">9:00am</time>
                        <a href="#" class="more">
                          <svg class="olymp-three-dots-icon">
                            <use
                              xlink:href="theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                            ></use>
                          </svg>
                        </a>
                      </div>
                      <h5 class="mb-0">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseOne-1"
                          aria-expanded="true"
                          aria-controls="collapseOne-1"
                        >
                          Breakfast at the Agency
                          <svg class="olymp-dropdown-arrow-icon">
                            <use
                              xlink:href="theme/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"
                            ></use>
                          </svg>
                        </a>
                      </h5>
                    </div>

                    <div id="collapseOne-1" class="collapse" role="tabpanel">
                      <div
                        class="card-body"
                      >Hi Guys! I propose to go a litle earlier at the agency to have breakfast and talk a little more about the new design project we have been working on. Cheers!</div>
                      <div class="place inline-items">
                        <svg class="olymp-add-a-place-icon">
                          <use
                            xlink:href="theme/svg-icons/sprites/icons.svg#olymp-add-a-place-icon"
                          ></use>
                        </svg>
                        <span>Daydreamz Agency</span>
                      </div>

                      <ul class="friends-harmonic inline-items">
                        <li>
                          <a href="#">
                            <img src="theme/img/friend-harmonic5.jpg" alt="friend">
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="theme/img/friend-harmonic10.jpg" alt="friend">
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="theme/img/friend-harmonic7.jpg" alt="friend">
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="theme/img/friend-harmonic8.jpg" alt="friend">
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="theme/img/friend-harmonic2.jpg" alt="friend">
                          </a>
                        </li>
                        <li class="with-text">Will Assist</li>
                      </ul>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" role="tab" id="headingTwo-1">
                      <div class="event-time">
                        <span class="circle"></span>
                        <time datetime="2004-07-24T18:18">9:00am</time>
                        <a href="#" class="more">
                          <svg class="olymp-three-dots-icon">
                            <use
                              xlink:href="theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                            ></use>
                          </svg>
                        </a>
                      </div>
                      <h5 class="mb-0">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseTwo-1"
                          aria-expanded="true"
                          aria-controls="collapseTwo-1"
                        >
                          Send the new “Olympus” project files to the Agency
                          <svg
                            class="olymp-dropdown-arrow-icon"
                          >
                            <use
                              xlink:href="theme/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"
                            ></use>
                          </svg>
                        </a>
                      </h5>
                    </div>

                    <div id="collapseTwo-1" class="collapse" role="tabpanel">
                      <div
                        class="card-body"
                      >Hi Guys! I propose to go a litle earlier at the agency to have breakfast and talk a little more about the new design project we have been working on. Cheers!</div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" role="tab" id="headingThree-1">
                      <div class="event-time">
                        <span class="circle"></span>
                        <time datetime="2004-07-24T18:18">6:30am</time>
                        <a href="#" class="more">
                          <svg class="olymp-three-dots-icon">
                            <use
                              xlink:href="theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                            ></use>
                          </svg>
                        </a>
                      </div>
                      <h5 class="mb-0">
                        <a
                          class="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#"
                          aria-expanded="false"
                        >Take Querty to the Veterinarian</a>
                      </h5>
                    </div>
                    <div class="place inline-items">
                      <svg class="olymp-add-a-place-icon">
                        <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-add-a-place-icon"></use>
                      </svg>
                      <span>Daydreamz Agency</span>
                    </div>
                  </div>

                  <a href="#" class="check-all">Check all your Events</a>
                </div>

                <div
                  id="accordion-2"
                  role="tablist"
                  aria-multiselectable="true"
                  class="day-event"
                  data-month="12"
                  data-day="10"
                >
                  <div class="ui-block-title ui-block-title-small">
                    <h6 class="title">TODAY’S EVENTS</h6>
                  </div>
                  <div class="card">
                    <div class="card-header" role="tab" id="headingOne-2">
                      <div class="event-time">
                        <span class="circle"></span>
                        <time datetime="2004-07-24T18:18">9:00am</time>
                        <a href="#" class="more">
                          <svg class="olymp-three-dots-icon">
                            <use
                              xlink:href="theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                            ></use>
                          </svg>
                        </a>
                      </div>
                      <h5 class="mb-0">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseOne-2"
                          aria-expanded="true"
                          aria-controls="collapseOne-2"
                        >
                          Breakfast at the Agency
                          <svg class="olymp-dropdown-arrow-icon">
                            <use
                              xlink:href="theme/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"
                            ></use>
                          </svg>
                        </a>
                      </h5>
                    </div>

                    <div id="collapseOne-2" class="collapse" role="tabpanel">
                      <div
                        class="card-body"
                      >Hi Guys! I propose to go a litle earlier at the agency to have breakfast and talk a little more about the new design project we have been working on. Cheers!</div>
                      <div class="place inline-items">
                        <svg class="olymp-add-a-place-icon">
                          <use
                            xlink:href="theme/svg-icons/sprites/icons.svg#olymp-add-a-place-icon"
                          ></use>
                        </svg>
                        <span>Daydreamz Agency</span>
                      </div>

                      <ul class="friends-harmonic inline-items">
                        <li>
                          <a href="#">
                            <img src="theme/img/friend-harmonic5.jpg" alt="friend">
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="theme/img/friend-harmonic10.jpg" alt="friend">
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="theme/img/friend-harmonic7.jpg" alt="friend">
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="theme/img/friend-harmonic8.jpg" alt="friend">
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="theme/img/friend-harmonic2.jpg" alt="friend">
                          </a>
                        </li>
                        <li class="with-text">Will Assist</li>
                      </ul>
                    </div>
                  </div>

                  <a href="#" class="check-all">Check all your Events</a>
                </div>

                <div
                  id="accordion-3"
                  role="tablist"
                  aria-multiselectable="true"
                  class="day-event"
                  data-month="12"
                  data-day="15"
                >
                  <div class="ui-block-title ui-block-title-small">
                    <h6 class="title">TODAY’S EVENTS</h6>
                  </div>
                  <div class="card">
                    <div class="card-header" role="tab" id="headingOne-3">
                      <div class="event-time">
                        <span class="circle"></span>
                        <time datetime="2004-07-24T18:18">9:00am</time>
                        <a href="#" class="more">
                          <svg class="olymp-three-dots-icon">
                            <use
                              xlink:href="theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                            ></use>
                          </svg>
                        </a>
                      </div>
                      <h5 class="mb-0">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseOne-3"
                          aria-expanded="true"
                          aria-controls="collapseOne-3"
                        >
                          Breakfast at the Agency
                          <svg class="olymp-dropdown-arrow-icon">
                            <use
                              xlink:href="theme/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"
                            ></use>
                          </svg>
                        </a>
                      </h5>
                    </div>

                    <div id="collapseOne-3" class="collapse" role="tabpanel">
                      <div
                        class="card-body"
                      >Hi Guys! I propose to go a litle earlier at the agency to have breakfast and talk a little more about the new design project we have been working on. Cheers!</div>

                      <div class="place inline-items">
                        <svg class="olymp-add-a-place-icon">
                          <use
                            xlink:href="theme/svg-icons/sprites/icons.svg#olymp-add-a-place-icon"
                          ></use>
                        </svg>
                        <span>Daydreamz Agency</span>
                      </div>

                      <ul class="friends-harmonic inline-items">
                        <li>
                          <a href="#">
                            <img src="theme/img/friend-harmonic5.jpg" alt="friend">
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="theme/img/friend-harmonic10.jpg" alt="friend">
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="theme/img/friend-harmonic7.jpg" alt="friend">
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="theme/img/friend-harmonic8.jpg" alt="friend">
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="theme/img/friend-harmonic2.jpg" alt="friend">
                          </a>
                        </li>
                        <li class="with-text">Will Assist</li>
                      </ul>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" role="tab" id="headingTwo-3">
                      <div class="event-time">
                        <span class="circle"></span>
                        <time datetime="2004-07-24T18:18">12:00pm</time>
                        <a href="#" class="more">
                          <svg class="olymp-three-dots-icon">
                            <use
                              xlink:href="theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                            ></use>
                          </svg>
                        </a>
                      </div>
                      <h5 class="mb-0">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseTwo-3"
                          aria-expanded="true"
                          aria-controls="collapseTwo-3"
                        >
                          Send the new “Olympus” project files to the Agency
                          <svg
                            class="olymp-dropdown-arrow-icon"
                          >
                            <use
                              xlink:href="theme/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"
                            ></use>
                          </svg>
                        </a>
                      </h5>
                    </div>

                    <div id="collapseTwo-3" class="collapse" role="tabpanel">
                      <div
                        class="card-body"
                      >Hi Guys! I propose to go a litle earlier at the agency to have breakfast and talk a little more about the new design project we have been working on. Cheers!</div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" role="tab" id="headingThree-3">
                      <div class="event-time">
                        <span class="circle"></span>
                        <time datetime="2004-07-24T18:18">6:30pm</time>
                        <a href="#" class="more">
                          <svg class="olymp-three-dots-icon">
                            <use
                              xlink:href="theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                            ></use>
                          </svg>
                        </a>
                      </div>
                      <h5 class="mb-0">
                        <a
                          class="collapsed"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#"
                          aria-expanded="false"
                        >Take Querty to the Veterinarian</a>
                      </h5>
                    </div>
                    <div class="place inline-items">
                      <svg class="olymp-add-a-place-icon">
                        <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-add-a-place-icon"></use>
                      </svg>
                      <span>Daydreamz Agency</span>
                    </div>
                  </div>

                  <a href="#" class="check-all">Check all your Events</a>
                </div>

                <div
                  id="accordion-4"
                  role="tablist"
                  aria-multiselectable="true"
                  class="day-event"
                  data-month="12"
                  data-day="28"
                >
                  <div class="ui-block-title ui-block-title-small">
                    <h6 class="title">TODAY’S EVENTS</h6>
                  </div>
                  <div class="card">
                    <div class="card-header" role="tab" id="headingOne-4">
                      <div class="event-time">
                        <span class="circle"></span>
                        <time datetime="2004-07-24T18:18">9:00am</time>
                        <a href="#" class="more">
                          <svg class="olymp-three-dots-icon">
                            <use
                              xlink:href="theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"
                            ></use>
                          </svg>
                        </a>
                      </div>
                      <h5 class="mb-0">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseOne-4"
                          aria-expanded="true"
                          aria-controls="collapseOne-4"
                        >
                          Breakfast at the Agency
                          <svg class="olymp-dropdown-arrow-icon">
                            <use
                              xlink:href="theme/svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"
                            ></use>
                          </svg>
                        </a>
                      </h5>
                    </div>

                    <div
                      id="collapseOne-4"
                      class="collapse"
                      role="tabpanel"
                      aria-labelledby="headingOne-4"
                    >
                      <div
                        class="card-body"
                      >Hi Guys! I propose to go a litle earlier at the agency to have breakfast and talk a little more about the new design project we have been working on. Cheers!</div>
                      <div class="place inline-items">
                        <svg class="olymp-add-a-place-icon">
                          <use
                            xlink:href="theme/svg-icons/sprites/icons.svg#olymp-add-a-place-icon"
                          ></use>
                        </svg>
                        <span>Daydreamz Agency</span>
                      </div>

                      <ul class="friends-harmonic inline-items">
                        <li>
                          <a href="#">
                            <img src="theme/img/friend-harmonic5.jpg" alt="friend">
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="theme/img/friend-harmonic10.jpg" alt="friend">
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="theme/img/friend-harmonic7.jpg" alt="friend">
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="theme/img/friend-harmonic8.jpg" alt="friend">
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="theme/img/friend-harmonic2.jpg" alt="friend">
                          </a>
                        </li>
                        <li class="with-text">Will Assist</li>
                      </ul>
                    </div>
                  </div>

                  <a href="#" class="check-all">Check all your Events</a>
                </div>
              </div>
            </div>
          </div>

          <!-- ... end W-Calendar -->
        </div>

        <div class="ui-block">
          <div class="ui-block-title">
            <h6 class="title">Pages You May Like</h6>
            <a href="#" class="more">
              <svg class="olymp-three-dots-icon">
                <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
              </svg>
            </a>
          </div>

          <!-- W-Friend-Pages-Added -->
          <ul class="widget w-friend-pages-added notification-list friend-requests">
            <li class="inline-items">
              <div class="author-thumb">
                <img src="theme/img/avatar41-sm.jpg" alt="author">
              </div>
              <div class="notification-event">
                <a href="#" class="h6 notification-friend">The Marina Bar</a>
                <span class="chat-message-item">Restaurant / Bar</span>
              </div>
              <span
                class="notification-icon"
                data-toggle="tooltip"
                data-placement="top"
                data-original-title="ADD TO YOUR FAVS"
              >
                <a href="#">
                  <svg class="olymp-star-icon">
                    <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-star-icon"></use>
                  </svg>
                </a>
              </span>
            </li>

            <li class="inline-items">
              <div class="author-thumb">
                <img src="theme/img/avatar42-sm.jpg" alt="author">
              </div>
              <div class="notification-event">
                <a href="#" class="h6 notification-friend">Tapronus Rock</a>
                <span class="chat-message-item">Rock Band</span>
              </div>
              <span
                class="notification-icon"
                data-toggle="tooltip"
                data-placement="top"
                data-original-title="ADD TO YOUR FAVS"
              >
                <a href="#">
                  <svg class="olymp-star-icon">
                    <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-star-icon"></use>
                  </svg>
                </a>
              </span>
            </li>

            <li class="inline-items">
              <div class="author-thumb">
                <img src="theme/img/avatar43-sm.jpg" alt="author">
              </div>
              <div class="notification-event">
                <a href="#" class="h6 notification-friend">Pixel Digital Design</a>
                <span class="chat-message-item">Company</span>
              </div>
              <span
                class="notification-icon"
                data-toggle="tooltip"
                data-placement="top"
                data-original-title="ADD TO YOUR FAVS"
              >
                <a href="#">
                  <svg class="olymp-star-icon">
                    <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-star-icon"></use>
                  </svg>
                </a>
              </span>
            </li>

            <li class="inline-items">
              <div class="author-thumb">
                <img src="theme/img/avatar44-sm.jpg" alt="author">
              </div>
              <div class="notification-event">
                <a href="#" class="h6 notification-friend">Thompson’s Custom Clothing Boutique</a>
                <span class="chat-message-item">Clothing Store</span>
              </div>
              <span
                class="notification-icon"
                data-toggle="tooltip"
                data-placement="top"
                data-original-title="ADD TO YOUR FAVS"
              >
                <a href="#">
                  <svg class="olymp-star-icon">
                    <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-star-icon"></use>
                  </svg>
                </a>
              </span>
            </li>

            <li class="inline-items">
              <div class="author-thumb">
                <img src="theme/img/avatar45-sm.jpg" alt="author">
              </div>
              <div class="notification-event">
                <a href="#" class="h6 notification-friend">Crimson Agency</a>
                <span class="chat-message-item">Company</span>
              </div>
              <span
                class="notification-icon"
                data-toggle="tooltip"
                data-placement="top"
                data-original-title="ADD TO YOUR FAVS"
              >
                <a href="#">
                  <svg class="olymp-star-icon">
                    <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-star-icon"></use>
                  </svg>
                </a>
              </span>
            </li>

            <li class="inline-items">
              <div class="author-thumb">
                <img src="theme/img/avatar46-sm.jpg" alt="author">
              </div>
              <div class="notification-event">
                <a href="#" class="h6 notification-friend">Mannequin Angel</a>
                <span class="chat-message-item">Clothing Store</span>
              </div>
              <span
                class="notification-icon"
                data-toggle="tooltip"
                data-placement="top"
                data-original-title="ADD TO YOUR FAVS"
              >
                <a href="#">
                  <svg class="olymp-star-icon">
                    <use xlink:href="theme/svg-icons/sprites/icons.svg#olymp-star-icon"></use>
                  </svg>
                </a>
              </span>
            </li>
          </ul>

          <!-- .. end W-Friend-Pages-Added -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      peopleYouMayKnow: {}
    };
  },
  mounted() {
    axios.get("member/fsuggestions").then(response => {
      if (response.data) {
        this.peopleYouMayKnow = response.data;
      }
    });
  },
  methods: {
    sendFriendReq: function($mid) {
      //move the person to bottom
      var index = this.peopleYouMayKnow.findIndex(item => item.uid == $mid);
      this.peopleYouMayKnow[index].invited = true;
      //push server update
      axios.post("member/friends", { fid: $mid }).then(response => {
        this.pushBottom(index);
      });
    },
    delFriendReq: function($mid) {
      //push server update
      axios.delete("member/friends/" + $mid).then(response => {
        console.log(response.data);

        //move the person to bottom
        var index = this.peopleYouMayKnow.findIndex(item => item.uid == $mid);
        this.peopleYouMayKnow[index].invited = false;
        this.pushBottom(index);
      });
    },
    pushBottom: _.debounce(function(index) {
      //push the user to bottom
      var user = this.peopleYouMayKnow.splice(index, 1);
      this.peopleYouMayKnow.push(user[0]);
    }, 150)
  }
};
</script>
