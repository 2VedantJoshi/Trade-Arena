import React from 'react';

function LeftSection({ imageURL, productname, desc }) {
    return (
        <div className='container' style={{ marginBottom: '0', paddingBottom: '0' }}>
            <div className="row p-5" style={{ marginBottom: '0' }}>
                <div className="col-8 p-5">
                    <img src={imageURL} style={{ width: "90%", height: "80%", display: "block" }} alt="" />
                </div>
                <div className="col-4 mt-5 p-5">
                    <h2 className='mb-4'>{productname}</h2>
                    <p>{desc}</p>
                    <div>
                        <a href="#" style={{ textDecoration: "none" }}>Try demo →</a>
                        <a href="#" style={{ textDecoration: "none" }}>Learn More →</a>
                    </div>
                    <div className='mt-4'>
                        <a href="#"> <img src="images/googlePlayBadge.svg" alt="" /></a>
                        <a href="#"> <img src="images/appstoreBadge.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
