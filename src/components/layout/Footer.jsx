import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <img src="img/footerLogo.png" alt="로고" />
        </div>
        <div className="footer__center">
          <div className="top">
            <p>
              AirCnC is part of Booking Holdings site, <br />
              the national leader in online travel & related services.
            </p>
          </div>
          <div className="bom">
            <div className="address">
              Address 경기도 안산시 상록구 고잔동 라인아트학원
            </div>
            <div className="phone">Phone 010-1234-5678</div>
            <div className="mail">E-mail piowm123@gmail.com</div>
            <div className="copy">
              copyrightⓒ 2022 All rights reserved by me
            </div>
          </div>
        </div>
        <div className="footer__right">
          <div className="site">Site / Currency</div>
          <select name="country" id="country">
            <option value="south korea">south korea</option>
          </select>
          <select name="currency" id="currency">
            <option value="korea won">korea won</option>
          </select>
          <div className="sns">
            <img src="img/netlify.jpg" alt="netlify" />
            <img src="img/github.jpg" alt="github" />
            <img src="img/figma.jpg" alt="figma" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
