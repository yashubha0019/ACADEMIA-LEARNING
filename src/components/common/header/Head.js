import React from "react"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./header.css"
const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

            <div className="social-icons">
                  <a href="https://www.facebook.com/yashpal.jadeja.3367" target="_blank" rel="noreferrer">
                    <FaFacebookF />
                  </a>
                  <a href="https://www.instagram.com/yashpalsinh_jadeja_0019/" target="_blank" rel="noreferrer">
                    <FaInstagram />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <FaTwitter />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer">
                    <FaYoutube />
                  </a>
                </div>
        </div>
      </section>
    </>
  )
}

export default Head