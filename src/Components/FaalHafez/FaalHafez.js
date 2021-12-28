import React from 'react';
import {Link} from 'react-router-dom';
import './FaalHafez.css';

function faalHafez() {

    return(
        <div className="faal-container">
            <img src="image/bg/bg-poet.jpg" className="bg-poet" alt="" />
            <div className="faal-box">

                <div className="box-poem">
                    <p id="resultId"></p>
                    <p id="poem"></p>
                    <audio id="audio" controls />
                </div>

                {/*<div className="box-text">*/}
                {/*    <p id="title"></p>*/}
                {/*    <p id="meanText"></p>*/}
                {/*</div>*/}

                <div className="btn-back">
                    <Link to="/">
                        <button className="btn">بازگشت به صفحه اصلی</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default faalHafez;