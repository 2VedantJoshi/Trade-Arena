import React from 'react'
function Pricing() {
    return ( 
        <div className="container p-5">
            <div className="row ">
                <div className="col-4 mx-5">
                    <h1 className='fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>

                </div>
                
                <div className="col-6 mb-5">
                    <div className="row text-center">
                        <div className="col p-3 border">
                            <h1 className='mb-4'>₹0</h1>
                            <p>Free equity delivery and <br />direct mutual fund</p>
                        </div>
                        <div className="col p-3 border">
                            <h1 className='mb-4'>₹20</h1>
                            <p>Intraday & F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing; 