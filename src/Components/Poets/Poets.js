import React from 'react';
import './Poets.css';

function Poets() {
    return(
        <div className="container-poets">
            <img src="/image/bg/bg-tarh.png" className="bg-tarh-r" alt="" />
            <div className="flex-direction">
                <div className="list--poets-random-p">
                    <img src="" id="imgId" alt="" />
                    <div className="box-poems">
                        <p id="title"></p>
                        <p id="poemId"></p>
                    </div>
                </div>
                <div className="box-about-poets">
                    <p id="textPoet"></p>
                </div>
            </div>
        </div>
    )
}

export default Poets;