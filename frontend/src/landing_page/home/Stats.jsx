import React from 'react'
function Stats() {
    return ( 
    <>
        <div className='container p-3'>
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h3 className='fs-2 mb-5'>Trust with confidence</h3>
                    <h4 className='fs-4'>Customer-first always</h4>
                    <p className='text-muted pb-1'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h4 className='fs-4'>No spam or gimmicks</h4>
                    <p className='text-muted pb-1'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h4 className='fs-4'>The Zerodha universes</h4>
                    <p className='text-muted pb-1'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h4 className='fs-4'>Do better with money</h4>
                    <p className='text-muted pb-1'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-6 mt-5 p-5">
                    <img src="images/ecosystem.png" style={{width:"90%"}} alt="" />
                    <a href="" className='mx-5' style={{textDecoration:"none"}}>Explore Our Products <i class="fa-solid fa-arrow-right"></i></a>
                    <a href="" style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                </div>

            </div>
        </div>
    </> );
}

export default Stats;