import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {

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
        <div className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="https://ganjoor.net/image/gmg.gif" className="logo" alt="" />
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/faal" className="nav-links">
                            <button className="btn--poetry" onClick={randomFaal}>فال حافظ</button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/random" className="nav-links">
                            <button className="btn--poetry" onClick={randomFaal}>گنجینه اشعار</button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-links">
                            <button className="btn--poetry">درباره ما</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Navbar;