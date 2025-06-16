import React from "react";

function Footer() {
  return (
    <>
      <div className="line">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <footer className="footer">
        <div className="footer-detail">
          <div>
            <strong>Address</strong>
            <p>
              Bhopani-Lalpur Road, Greater Faridabad – 121002 Haryana, India.
            </p>
          </div>
          <div>
            <strong>Email</strong>
            <p>info@satyug.edu.in</p>
            <p>registrar@satyug.edu.in</p>
            <p>tpo@satyug.edu.in</p>
          </div>
        </div>
        <div className="copyright">
          2025 Training and placement cell - sdiet
        </div>
        <strike>Develop By : <b>Nitish Sharma</b></strike>
      </footer>
    </>
  );
}

export default Footer;
