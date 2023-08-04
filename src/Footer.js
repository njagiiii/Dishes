import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">  
            <div className="col-sm-6 col-md-3 item">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/features">Products </Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/career">Career</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>Locations</h3>
              <ul>
                <li>
                  <Link to="https://goo.gl/maps/9PKbhMkgJcWDAzSt6">
                    Kilimani
                  </Link>
                </li>
                <li>
                  <Link to="https://goo.gl/maps/srQvDKdLr92Sh6Mt9">
                    Koinange Street
                  </Link>
                </li>
                <li>
                  <Link to="https://goo.gl/maps/YiDtvuDq7cP3Gh3S6">
                    Village Market
                  </Link>
                </li>
                <li>
                  <Link to="https://goo.gl/maps/z9uK6vfKWfyioDeM6">
                    The Waterfront Karen
                  </Link>
                </li>
                <li>
                  <Link to="https://goo.gl/maps/tZ1fZxMB3Mg8eg398">
                    The Imaara Mall
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>The Tasty Dishes</h3>
              <p>
                We're commited to great food, great coffee, great service, an
                experience that will make your time with us fabulous. All
                visuals are serving suggestions only. Prices are quoted in
                Kenyan Shillings and inclusive of VAT.
              </p>
            </div>
            <div className="col item social">
              <Link to="#">
                <i className="fab fa-facebook-messenger"></i>{" "}
              </Link>
              <Link to="#">
                <i className="fab fa-twitter"> </i>{" "}
              </Link>
              <Link to="#">
                <i className="fab fa-google"> </i>{" "}
              </Link>
              <Link to="#">
                <i className="fab fa-instagram"> </i>{" "}
              </Link>{" "}
            </div>
          </div>
          <p className="copyright">Company Name © 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
