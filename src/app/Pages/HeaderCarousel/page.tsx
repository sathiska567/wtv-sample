'use client'

import React from 'react';
import { Carousel } from 'antd';
import style from './page.module.css'
import img1 from '../assets/images/slide01.png'
import img2 from '../assets/images/slide02.png'
import Image from 'next/image';
import { Button } from 'antd';


const page: React.FC = () => (
  <Carousel autoplay className={style.carousel}>
       <div className={style.carousel_1}>
             <Image src={img1} width={100} className={style.contentStyle} />
             <p className={style.carousel_p}>
                <span>Delivering Premium Raw</span><br />
                <span>Materials for Every Industry</span>
             </p>

             <p className={style.carousel_p2}>
                <span>Lorem ipsum dolor sit amet, consectetuer adipiscing t,</span><br />
                <span>consectetuer adipiscing consectetuer adipiscing t,consectetuer adipiscing elit,</span>
             </p>

             <div className={style.carousel_btndiv}>
                <Button className={style.carousel_btn}>Read More</Button>
             </div>

        </div>


    <div>
    <Image src={img2} width={100} className={style.contentStyle} />
    </div>

    <div className={style.carousel_1}>
      <Image src={img1} width={100} className={style.contentStyle} />
    </div>

    <div>
    <Image src={img2} width={100} className={style.contentStyle} />
    </div>
   
  </Carousel>
);

export default page;