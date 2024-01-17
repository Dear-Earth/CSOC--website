import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
        <div className='bg-primary text-center text-white pt-8 mb-0'>
            <h3 className='text-xl font-semibold'>Society of Civil Engineering</h3>
            <p>© All right reserved &nbsp;|&nbsp; 2024</p>
            <ul className='flex flex-wrap md:flex-row justify-center items-center gap-10 md:gap-28 text-2xl py-5'>
                <a href='https://www.instagram.com/csoc.ced/?hl=en'><li><FaInstagram /></li></a>
                <a href='https://www.linkedin.com/company/csoc/?originalSubdomain=in'><li><FaLinkedin /></li></a>
                <a href='/'><li><FaFacebookSquare /></li></a>
                <a href='/'><li><FaYoutube /></li></a>
            </ul>

        </div>
    </div>
  )
}

export default Footer