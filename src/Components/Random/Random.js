import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide,Navigation, Pagination } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './Random.css';


function Random() {
    const [value, setValue] = useState('');

    function randomPoets(event, value) {
       fetch("https://ganjgah.ir/api/ganjoor/cat/"+ value +"?poems=true")
           .then(res => res.json())
            .then(data => {
                console.log(data)
                const id = data.poet.id
                let textPoet = document.querySelector('#textPoet')
                textPoet.textContent = data.poet.description

                fetch("https://ganjgah.ir/api/ganjoor/poem/random?poetId=" + id)
                    .then(res=> res.json())
                    .then(item => {
                        let title = document.querySelector('#title')
                        let text = document.querySelector('#poemId')
                        let audio = document.querySelector('#audioRandom')

                        // add title poet
                        title.textContent = item.title;

                        // get poem item from api
                        let verses = item.verses;

                        let info = '';
                        verses.map((i,j) => {
                            // add 2 bit of poetry in every line
                            if(j % 2 == 0){
                                info +=  '<span id="onePoem">' + i.text + '</span>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '<span id="twoPoem">' + verses[j+1].text + '</span>' + "<br/>";
                            }
                        })
                        // add api to tag text
                        text.innerHTML = info

                        // get img from api
                        let srcImg = document.querySelector('#imgId')
                        srcImg.src = "https://ganjgah.ir" + data.poet.imageUrl
                        console.log(srcImg)
                    })
            })
    }

    return(
        <div className="slider-poet">
            <img src="image/bg/bg-tarh.png" className="bg-tarh" alt="" />
            <div className="img-design">
                <img src="image/bg/flower.png" className="img-flower" alt="" />
            </div>
            <div className="img-design-blue"></div>
            <div className="list--poetry">
                <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loopFillGroupWithBlank={true} pagination={{
                    "clickable": true
                }} navigation={true} className="swiper">
                    <SwiperSlide >
                        <Link to="/random/poet" value={value} onClick={(e) => randomPoets(e, '97')}>
                            <img src="image/poet/molana.jpg" className="poets" alt="molana" /><br />
                            <p className="text--slide">مولانا</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/random/poet" value={value} onClick={(e) => randomPoets(e, '118')}>
                            <img src="image/poet/saadi.jpg" className="poets" alt="saadi" />
                            <p className="text--slide">سعدی</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/random/poet" value={value} onClick={(e) => randomPoets(e, '9')}>
                            <img src="image/poet/hafez.jpg" alt="" />
                            <p className="text--slide">حافظ</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/random/poet" value={value} onClick={(e) => randomPoets(e, '32')}>
                            <img src="image/poet/ferdosi.jpg" alt="" />
                            <p className="text--slide">فردوسی</p>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/random/poet" value={value} onClick={(e) => randomPoets(e, '110')}>
                            <img src="image/poet/nezami.png" alt="" />
                            <p className="text--slide">نظامی</p>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Random;