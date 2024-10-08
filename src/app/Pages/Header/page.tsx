import React from 'react';
import style from './page.module.css'
import { BiPhoneCall } from "react-icons/bi";
import { RiFacebookFill } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { XOutlined } from '@ant-design/icons';
import img from '../assets/images/logo-wtv.png'
import Image from 'next/image';
import { MdLocationOn } from "react-icons/md";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space,Button } from 'antd';
const { Search } = Input;
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import HeaderCarousel from "../HeaderCarousel/page"

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const Page: React.FC = () => {
  return (
    <>
     <div className = {style.header_first}>
       <p className={style.header_first_p}>chanaka@cjholdings.lk</p>

       <div className={style.header_center_icon}>
          <p className={style.header_second_facebookIcon}><RiFacebookFill /></p>
          <p className={style.header_second_linkdin}><CiLinkedin /></p>
          <p className={style.header_second_x}><XOutlined /></p>
          <p className={style.header_second_insta}><CiInstagram /></p>
       </div>

       <div className={style.header_div}>
        <p className={style.header_icon}><BiPhoneCall /></p>
        <p className={style.header_third_p}>+91 888 104 2340</p>
       </div>
     </div>

     <div className = {style.header_second}>
       <Image src={img} width={100} className={style.header_second_image} />
     
       <div className={style.header_second_div}>
         <div className={style.header_second_first_subdiv}>
         <MdLocationOn className={style.header_second_first_subdiv_icon} />
         </div>
         <div className={style.header_second_subdiv}>
            <Input placeholder="Search for items..." className={style.header_second_inputBox} />
            <Button className={style.header_second_searchButton}><FaSearch className={style.header_second_searchButton_icon} /></Button>
         </div>

       </div>
     </div>

     {/* <div className = {style.header_third}>
       <p className = {style.header_third_p1}>Home</p>
       <p className = {style.header_third_p2}>About Us</p>
       <p className = {style.header_third_p3}>Chemical</p>
       <p className = {style.header_third_p4}>Instruments</p>
       <p className = {style.header_third_p5}>Equipment</p>
       <p className = {style.header_third_p6}>Contact Us</p>
     </div> */}
     <div className = {style.header_third}>
       <ul>
         <li>Home</li>
         <li>About Us</li>
         <li>Chemical</li>
         <li>Instruments</li>
         <li>Equipment</li>
         <li>Contact Us</li>
       </ul>
     </div>

     <div className = {style.header_fourth}>
        <HeaderCarousel />
     </div>
    
    
    </>
  );
};

export default Page;
