import React from "react";
import './Footer.css';

export default function Footer() {
  return (

    <div class="f_pg-footer">
      <footer class="f_footer">
        <svg class="f_footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path class="f_footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
        </svg>
        <div class="f_footer-content">
          <div class="f_footer-content-column">
            {/* <div class="footer-logo">
            <a class="footer-logo-link" href="#">
              <span class="hidden-link-text">LOGO</span>
              <img
                            className="logo-default"
                            src={`${process.env.PUBLIC_URL}/assets/img/logo.png`}
                            alt="logo"
                        />
            </a>
          </div> */}
            <div class="f_footer-menu">
              <h2 class="f_footer-menu-name"> Get Started</h2>
              <ul id="f_menu-get-started" class="footer-menu-list">
                <li class="f_menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">Start</a>
                </li>
                <li class="f_menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">Documentation</a>
                </li>
                <li class="f_menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">Installation</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="f_footer-content-column">
            <div class="f_footer-menu">
              <h2 class="f_footer-menu-name"> Company</h2>
              <ul id="f_menu-company" class="footer-menu-list">
                <li class="f_menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Contact</a>
                </li>
                <li class="f_menu-item menu-item-type-taxonomy menu-item-object-category">
                  <a href="#">News</a>
                </li>
                <li class="f_menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div class="f_footer-menu">
              <h2 class="f_footer-menu-name"> Legal</h2>
              <ul id="menu-legal" class="f_footer-menu-list">
                <li class="f_menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                  <a href="#">Privacy Notice</a>
                </li>
                <li class="f_menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="f_footer-content-column">
            <div class="f_footer-menu">
              <h2 class="f_footer-menu-name"> Quick Links</h2>
              <ul id="menu-quick-links" class="f_footer-menu-list">
                <li class="f_menu-item menu-item-type-custom menu-item-object-custom">
                  <a target="_blank" rel="noopener noreferrer" href="/Home_page">Home Page</a>
                </li>
                <li class="f_menu-item menu-item-type-custom menu-item-object-custom">
                  <a target="_blank" rel="noopener noreferrer" href="/about_us">About Us</a>
                </li>
                <li class="f_menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="/Reservation">Reservation</a>
                </li>
                <li class="f_menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="/get_in_touch">Get in Touch</a>
                </li>
                <li class="f_menu-item menu-item-type-post_type_archive menu-item-object-customer">
                  <a href="#">Customers</a></li>
                <li class="f_menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Service Status</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="f_footer-content-column">
            <div class="f_footer-call-to-action">
              <h2 class="f_footer-call-to-action-title"> Let's Chat</h2>
              <p class="f_footer-call-to-action-description"> Have a support question?</p>
              <a class="f_footer-call-to-action-button button" href="/get_in_touch" target="_self"> Get in Touch </a>
            </div>
            <div class="f_footer-call-to-action">
              <h2 class="f_footer-call-to-action-title"> You Call Us</h2>
              <p class="f_footer-call-to-action-link-wrapper"> <a class="f_footer-call-to-action-link" href="tel:+961-03206718" target="_self"> +961 03 206 718 </a></p>
            </div>
          </div>
          <div class="f_footer-social-links"> <svg class="f_footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
            <path class="f_footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
          </svg>
            <a class="f_footer-social-link linkedin" href="#" target="_blank">
              <span class="f_hidden-link-text">Linkedin</span>
              <svg class="f_footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30">
                <path class="f_footer-social-icon-path" d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
              </svg>
            </a>
            <a class="f_footer-social-link twitter" href="#" target="_blank">
              <span class="f_hidden-link-text">Twitter</span>
              <svg class="f_footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                <path class="f_footer-social-icon-path" d="M 25.855469 5.574219 C 24.914063 5.992188 23.902344 6.273438 22.839844 6.402344 C 23.921875 5.75 24.757813 4.722656 25.148438 3.496094 C 24.132813 4.097656 23.007813 4.535156 21.8125 4.769531 C 20.855469 3.75 19.492188 3.113281 17.980469 3.113281 C 15.082031 3.113281 12.730469 5.464844 12.730469 8.363281 C 12.730469 8.773438 12.777344 9.175781 12.867188 9.558594 C 8.503906 9.339844 4.636719 7.246094 2.046875 4.070313 C 1.59375 4.847656 1.335938 5.75 1.335938 6.714844 C 1.335938 8.535156 2.261719 10.140625 3.671875 11.082031 C 2.808594 11.054688 2 10.820313 1.292969 10.425781 C 1.292969 10.449219 1.292969 10.46875 1.292969 10.492188 C 1.292969 13.035156 3.101563 15.15625 5.503906 15.640625 C 5.0625 15.761719 4.601563 15.824219 4.121094 15.824219 C 3.78125 15.824219 3.453125 15.792969 3.132813 15.730469 C 3.800781 17.8125 5.738281 19.335938 8.035156 19.375 C 6.242188 20.785156 3.976563 21.621094 1.515625 21.621094 C 1.089844 21.621094 0.675781 21.597656 0.265625 21.550781 C 2.585938 23.039063 5.347656 23.90625 8.3125 23.90625 C 17.96875 23.90625 23.25 15.90625 23.25 8.972656 C 23.25 8.742188 23.246094 8.515625 23.234375 8.289063 C 24.261719 7.554688 25.152344 6.628906 25.855469 5.574219 "></path>
              </svg>
            </a>
            <a class="f_footer-social-link youtube" href="#" target="_blank">
              <span class="f_hidden-link-text">Youtube</span>
              <svg class="f_footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path class="f_footer-social-icon-path" d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
              </svg>
            </a>
            <a class="f_footer-social-link github" href="#" target="_blank">
              <span class="f_hidden-link-text">WhatsApp</span>
              <svg class="f_footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <path class="f_footer-social-icon-path" d="M30.287 2.029A29.769 29.769 0 0 0 5.223 45.266L2.064 60.6a1.158 1.158 0 0 0 1.4 1.361L18.492 58.4A29.76 29.76 0 1 0 30.287 2.029zm17.931 46.2"></path>
                <path d="M46.184 38.205l-5.765-1.655a2.149 2.149 0 0 0-2.126.561l-1.41 1.436a2.1 2.1 0 0 1-2.283.482c-2.727-1.1-8.463-6.2-9.927-8.754a2.1 2.1 0 0 1 .166-2.328l1.23-1.592a2.148 2.148 0 0 0 .265-2.183l-2.424-5.485a2.149 2.149 0 0 0-3.356-.769c-1.609 1.361-3.517 3.428-3.749 5.719-.409 4.039 1.323 9.13 7.872 15.242 7.566 7.063 13.626 8 17.571 7.04 2.238-.542 4.026-2.714 5.154-4.493a2.15 2.15 0 0 0-1.218-3.221z"
                  fill="none" stroke="#202020" stroke-linecap="round" stroke-miterlimit="10"
                  stroke-width="2" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="f_footer-copyright">
          <div class="f_footer-copyright-wrapper">
            <p class="f_footer-copyright-text">
              <a class="f_footer-copyright-link" href="#" target="_self"> ©2020. | All rights reserved. </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
