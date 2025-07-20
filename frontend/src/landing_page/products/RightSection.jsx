import React from 'react';

function RightSection({ imageURL, productname, desc }) {
    return (
        <div className='container' style={{ marginBottom: '0', paddingBottom: '0' }}>
            <div className="row" style={{ marginBottom: '0' }}>
                <div className="col-5 p-5">
                    <h2 className='mb-4 mt-5'>{productname}</h2>
                    <p>{desc}</p>
                    <div>
                        <a href="#" style={{ textDecoration: "none" }}>Learn More →</a>
                    </div>
                </div>
                <div className="col-7 d-flex justify-content-center">
                    <img src={imageURL} style={{ width: "90%", height: "70%", display: "block" }} alt="" />
                </div>
            </div>
        </div>
    );
}

export default RightSection;
