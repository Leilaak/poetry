import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import Navbar from '../Navbar/Navbar';

function Home() {

    function randomFaal(){
        fetch("https://ganjgah.ir/api/ganjoor/hafez/faal")
            .then(res=> res.json())
            .then(data => {
                let id = document.querySelector('#resultId');
                let text = document.querySelector('#poem');
                let audio = document.querySelector('#audio')

                id.textContent = data.title;
                // get api poem
                let verses = data.verses;
    
                let info = '';
                verses.map((i,j) => {
                    // add 2 bit of poetry in every line
                    if(j % 2 == 0){
                        info +=  '<span id="onePoem">' + i.text + '</span>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '<span id="twoPoem">' + verses[j+1].text + '</span>' + "<br/>";
                    }
                })
                // add api to tag text
                text.innerHTML = info

                // get api music
                audio.src = data["recitations"][0].mp3Url;
            })
    }

    return(
        <div className="container">
            <img src="image/bg/bg-tarh.png" className="design-img" alt="" />
            <Navbar />

            <div className="container-box">
                <div className="img-poet">
                    <img src="image/card/poet.png" className="poet" alt="" />
                </div>
                <div className="text-box">
                    <p className="text">
                        تاریخ کهن ایران زمین با پیشینه ای غنی از فزهنگ و هنر، از دیرباز با شعر و ادبیات
                        در هم پیچیده و ایران مهد پرورش شاعران بزرگی بوده و در گیر و دار فراز و نشیب هایی که
                        در طول تاریخ بر آن گذشته اما شاهنامه وزین و پارسی پرور فردوسی بزرگ اشعار روح بخش مولانا
                        و عشق بازی اش با حق غزل های عاشقانه و عارفانه عالم گیر در دیوان حافظ اندیشه ژرف و عرفان
                        ناب عطار نیشابوری همه و همه همچون مرهمی بر زخم های کوچک و بزرگش تسکین داده اند.
                    </p>
                    <div className="poem-btn">
                        <Link to="/faal">
                            <button className="btn-hafez poetry" onClick={randomFaal}>فال حافظ</button>
                        </Link>
                        <Link to="/random">
                            <button className="btn-trove-poms poetry">گنجینه اشعار</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home;