import React from 'react'

function Awards() {
    return ( 
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="images/largestBroker.svg" alt="" />
                </div>
                
                <div className="col-6 p-5 mt-5">
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million clients contribute to 15% of all volumes in India</p>
                
                    <div className="row mt-5">
                        <div className="col-6">
                            <ul>
                                <li><p>Future and Option</p></li>
                                <li><p>Commodity Derivatives</p></li>
                                <li><p>Currency Derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><p>Stocks & IPO's</p></li>
                                <li><p>Mutual Funds</p></li>
                                <li><p>Future and Option</p></li>
                            </ul>
                        </div>
                        <img src="images\pressLogos.png" alt="" style={{width:"90%"}}/>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Awards;