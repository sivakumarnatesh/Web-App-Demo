import { color } from "@mui/system";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="container">
        <div className="column1" >
          <div className="column-head">Brands</div>
          <div className="column-body">
            <div className="body-content">cera</div>
            <div className="body-content">senator</div>
            <div className="body-content">Isvera</div>
          </div>
          <div className="column-head">
          <div className="column1-body2">Product Catalogue</div>
          <div className="column1-body2">Product Warranty</div>
          </div>
        </div>

        <div className="column2">
          <div className="column-head">Products</div>
          <div style={{textAlign:'left',marginBottom:'20px',color:'#8B8B8B'}}>
            <div className="body-content">Sanitaryware</div>
            <div className="body-content">Faucets & Showers</div>
            <div className="body-content">Tiles</div>
            <div className="body-content">Wellness</div>
            <div className="body-content">Kitchen Sinks</div>
            <div className="body-content">Mirror</div>
          </div>
          <div className="body-2">Glossary</div>
        </div>

        <div className="column3">
          <div className="column-head">Virtual Walkthrough</div>
          <div className="column-body">
            <div className="body-content">Cera</div>
            <div className="body-content">Senator</div>
            <div className="body-content">Isvea</div>
          </div>
          <div className="body-2">CERA Live</div>
        </div>

        <div className="column4">
          <div className="column-head">Get In Touch</div>
          <div className="column-body">
            <div className="body-content">Offices</div>
            <div className="body-content">Cera Style Studio</div>
            <div className="body-content">Cera Galleries</div>
            <div className="body-content">Cera Style Hub</div>
            <div className="body-content">Cera Centres</div>
            <div className="body-content">Dealers</div>
            <div className="body-content">International Sales</div>
            <div className="body-content">Feedback</div>
            <div className="body-content">Product Enquiry</div>
            <div className="body-content">Product Registration & Warranty</div>
          </div>
        </div>
        <div className="column5">
          <div className="column-head">About US</div>
          <div className="column-body">
            <div className="body-content">Overview</div>
            <div className="body-content">Leadership Team</div>
            <div className="body-content">Affiliations & Awards</div>
            <div className="body-content">Corporate Social Responsibility</div>
            <div className="body-content">Certifications</div>
            <div className="body-content">Investor Relations</div>
            <div className="body-content">Policies & Statutory Documents</div>
            <div className="body-content">Brand Coverage</div>
            <div className="body-content">Brand and Product Installation Videos</div>
            <div className="body-content">Newsletter</div>
          </div>
        </div>
    </div>
  );
};

export default Footer;
