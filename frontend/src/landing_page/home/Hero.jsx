import React from 'react'
function Hero() {
    return (  
        <div className='container p-5'>
            <div className='row text-center'>
                <img src="images/homeHero.png" alt="HeroImage" className='mb-5' />
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className=' fs-5 btn btn-primary mb-5' style={{width:"18%", margin:"auto"}}>Sign Up For Free</button>
            </div>
        </div>
    );
}

export default Hero;