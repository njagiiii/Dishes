import React from "react";

function Footer() {
  return (
    <footer className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h2>Quick links</h2>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-decoration-none">About Us</a>
              </li>
              <li>
                <a href="/" className="text-decoration-none">Product</a>
              </li>
              <li>
                <a href="/" className="text-decoration-none">Blog</a>
              </li>
              <li>
                <a href="/" className="text-decoration-none">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h2>Contacts</h2>
            <ul className="list-unstyled">
              <li>
                <a href="tel:254725531709" className="text-decoration-none">(254)-725-531-709</a>
              </li>
              <li>
                <a href="tel:254722310349" className="text-decoration-none">(254)-722-310-349</a>
              </li>
              <li>
                <a href="mailto:tastydishes.co.ke" className="text-decoration-none">tastydishes@gmail.co.ke</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h2>Socials</h2>
            <ul className="list-inline socials">
              <li className="list-inline-item">
                <a href="https://facebook.com"><i className="fab fa-facebook-messenger"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://google.com"><i className="fab fa-google"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://youtube.com"><i className="fab fa-youtube"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
              </li>
            </ul>
            <h6 className="copy">2023 Tasty Dishes</h6>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
