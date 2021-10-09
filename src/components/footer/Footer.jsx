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
            <a class="f_footer-social-link linkedin" href="https://instagram.com/connexion.transport?utm_medium=copy_link" target="_blank">
              <span class="f_hidden-link-text">Instagram</span>
              <svg class="f_footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64">
                <path class="f_footer-social-icon-path" d="M8.2 0h47.6A7.989 7.989 0 0 1 64 8.2v47.6a7.989 7.989 0 0 1-8.2 8.2H8.2A7.989 7.989 0 0 1 0 55.8V8.2A7.989 7.989 0 0 1 8.2 0zm38.4 7.1a2.9 2.9 0 0 0-2.9 2.9v6.9a2.9 2.9 0 0 0 2.9 2.9h7.2a2.9 2.9 0 0 0 2.9-2.9V10a2.9 2.9 0 0 0-2.9-2.9zm10.2 20h-5.6a19.758 19.758 0 0 1 .8 5.5c0 10.6-8.9 19.3-19.9 19.3s-19.9-8.6-19.9-19.3a19.758 19.758 0 0 1 .8-5.5H7.1v27a2.476 2.476 0 0 0 2.5 2.5h44.6a2.476 2.476 0 0 0 2.5-2.5l.1-27zm-24.7-7.7a12.723 12.723 0 0 0-12.9 12.5 12.64 12.64 0 0 0 12.9 12.4A12.723 12.723 0 0 0 45 31.8a12.64 12.64 0 0 0-12.9-12.4z"
                  fill="#200000"></path>

              </svg>
            </a>
            <a class="f_footer-social-link twitter" href="https://www.facebook.com/connexion.transportation/" target="_blank">
              <span class="f_hidden-link-text">Facebook</span>
              <svg class="f_footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <path class="f_footer-social-icon-path" d="M39.312 13.437H47V2h-9.094C26.938 2.469 24.688 8.656 24.5 15.125v5.719H17V32h7.5v30h11.25V32h9.281l1.781-11.156H35.75v-3.469a3.714 3.714 0 0 1 3.562-3.938z"
                  fill="none" stroke="#20000" stroke-linecap="round" stroke-miterlimit="10"
                  stroke-width="2" stroke-linejoin="round"></path>
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
