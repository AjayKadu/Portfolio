import React from 'react'
import './footer.css'

function Footer() {
    return (
        <>

            <hr />

            <div id='mainDiv'>

                <div >
                    <div id='imgDiv'>
                        <img className='img-fluid' src="/Images/Instagram_icon.png" alt="Instagram" />
                        <label htmlFor="Instagram">Instagram</label>
                    </div>

                    <div id='imgDiv'>
                        <img className='img-fluid' src="/Images/Facebook_Logo_(2019).png" alt="Facebook" />
                        <label htmlFor="Facebook">Facebook</label>
                    </div>

                    <div id='imgDiv'>
                        <img className='img-fluid' src="/Images/youtube.png" alt="YouTube" />
                        <label htmlFor="YouTube">YouTube</label>
                    </div>
                </div>

                <div>
                    <div id='imgDiv'>
                        <img className='img-fluid' src="/Images/linkedin.png" alt="LinkedIn" />
                        <label htmlFor="LinkedIn">LinkedIn</label>
                    </div>

                    <div id='imgDiv'>
                        <img className='img-fluid' src="/Images/github.png" alt="GitHub" />
                        <label htmlFor="GitHub">GitHub</label>
                    </div>

                    <div id='imgDiv'>
                        <img className='img-fluid' src="/Images/twitter.png" alt="X" />
                        <label htmlFor="X">Twitter</label>
                    </div>

                </div>

               

            </div>
            <br />
            <hr id='hr'/>
            <p className="text-center" text-center>Ajay Kadu © 2025 Portfolio</p>
            <hr id='hr' />
        </>
    )
}

export default Footer