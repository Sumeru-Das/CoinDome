import React from "react";
import "./styles.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
      CoinDome<span>.</span>
      </h2>
      <div className="social-links">
        <a href="https://github.com/Sumeru_Das">
          <GitHubIcon className="social-link" />
        </a>
        <a href="mailto:sumerudas2019@gmail.com">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://www.linkedin.com/in/sumerudas/">
          <LinkedInIcon className="social-link" />
        </a>
        <a href="https://www.instagram.com/s_u_m_e_r_u__das/">
          <InstagramIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
