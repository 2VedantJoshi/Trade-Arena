import React from 'react'
function Universe() {
    return (<>
        <div className="contsiner p-5">
            <div className="row text-center">
                <h4 className='fs-4 text-muted'>Want to know more about our technology stack? Check out the <a href="">Zerodha.tech</a> blog.</h4>
                <h2 className='mt-5 p-5'>The Zerodha Universe</h2>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row p-5 mt-3 ">
                <div className="col-4 p-4 ">
                    <img src="images/zerodhaFundhouse.png" style={{ width: "60%", marginLeft: "160px" }} alt="" />
                    <p className='text-muted mt-2 ' style={{ width: "60%", marginLeft: "170px", fontSize: "13px" }}>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                </div>
                <div className="col-4 p-4">
                    <img src="images/goldenpiLogo.png" style={{ width: "60%", marginLeft: "70px" }} alt="" />
                    <p className='text-muted mt-2' style={{ width: "60%", marginLeft: "88px", fontSize: "13px" }}>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className="col-4 p-4">
                    <img src="images/smallcaseLogo.png" style={{ width: "60%", marginRight: "160px" }} alt="" />
                    <p className='text-muted mt-2' style={{ width: "60%", marginRight: "170px", fontSize: "13px" }}>Options trading platform that lets you
                        Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.
                    </p>
                </div>
                <div className="col-4 p-4">
                    <img src="images/streakLogo.png" style={{ width: "60%", marginLeft: "160px" }} alt="" />
                    <p className='text-muted mt-2' style={{ width: "60%", marginLeft: "170px", fontSize: "13px" }}>Options trading platform that lets you
                        Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.
                    </p>
                </div>
                <div className="col-4 p-4">
                    <img src="images/dittoLogo.png" style={{ width: "50%", marginLeft: "80px" }} alt="" />
                    <p className='text-muted mt-2' style={{ width: "60%", marginLeft: "90px", fontSize: "13px" }}>Options trading platform that lets you
                        Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.
                    </p>
                </div>
                <div className="col-4 p-4 mt-3 mb-3 ">
                    <img src="images/sensibullLogo.svg" style={{ width: "60%", marginRight: "160px" }} alt="" />
                    <p className='text-muted mt-3' style={{ width: "60%", marginRight: "170px", fontSize: "13px" }}>Options trading platform that lets you
                        Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.
                    </p>
                </div>

                <button className=' fs-5 btn btn-primary mt-5 mb-3' style={{width:"18%", margin:"auto"}}>Sign Up For Free</button>
            </div>
        </div>

    </>);
}

export default Universe;