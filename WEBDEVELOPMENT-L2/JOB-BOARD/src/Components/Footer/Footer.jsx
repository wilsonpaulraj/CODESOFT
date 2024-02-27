// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="clearfix">
      <section className="footer-top clearfix">
        <div className="container">
          <div className="row">
            {/* ... rest of your Footer code ... */}
          </div>
        </div>
      </section>
      <div className="footer-bottom clearfix text-center">
        <div className="container">
          <p>
            Copyright &copy; <a href="https://google.com">Jobs</a> 2017. Developed by{' '}
            <a href="http://themeregion.com/">ThemeRegion</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
