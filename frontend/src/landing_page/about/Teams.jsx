import React from 'react'
function Teams() {
    return (
        <div className='container '>
            <div className="row text-center ">
                <h1>People</h1>
            </div>
            <div className="row p-5">
                <div className="col-6 p-5 text-center">
                    <img src="images/nithinKamath.jpg" style={{ borderRadius: "100%", width: "60%" }} alt="" />
                    <h2>Nithin Kamath</h2>
                    <p>Founder and CEO</p>
                </div>
                <div className="col-6 p-5">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a>  / <a href=""  style={{textDecoration:"none"}}>TradingQnA</a> / <a href=""  style={{textDecoration:"none"}}>Twitter</a>.</p>
                </div>

            </div >
        </div >
    );
}

export default Teams;