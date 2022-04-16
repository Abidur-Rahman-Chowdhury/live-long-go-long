import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <footer className=" footer bg-[#222426] pb-5 mt-10">
      <div className="footer-container pt-10 grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-[#22C55E] place-items-center  place-content-center gap-y-8">
        <div>
          <h4 className="text-2xl font-serif">ABOUT US</h4>
          <p className="text-[white] mt-4">
            I understand very well how lack of confidence can be an obstacle.
            That is why I dedicated myself to helping people overcome their
            fears and improve their looks - and their lives
          </p>
        </div>
        <div>
          <h4 className="text-2xl font-serif">FIND ME HERE</h4>
          <p className="text-[white] mt-4">
            19, South Bakolia Chittagong, Bangladesh.
          </p>
          <p className="text-[white] mt-4">
            Tel: <small> +7 998 71 150 30 20</small> <br />
            Fax: <small>+7 998 71 150 30 20</small>
          </p>
          <a to="https://mail.google.com/mail/u/1/#inbox" as={Link}>
            <small className="text-[gray] underline underline-offset-1">
              abid43iiuc@gmail.com
            </small>
          </a>
        </div>
        <div>
          <h4 className="text-2xl font-serif">PAGES</h4>
          <div className="footer-link">
            <Link to="/home">Home</Link>
            <Link to="/checkout">CheckOut</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/aboutme">About me</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
