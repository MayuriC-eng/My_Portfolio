import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Mayuri Chavan</h4>
      <h4>Copyright &copy; 2025 MC</h4>
      <div className='footerLinks'>
        <a href="https://github.com/MayuriC-eng" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/mayuri-chavan-794219324/" target='_blank'><FaLinkedin/></a>

      </div>
    </footer>
  )
}

export default Footer