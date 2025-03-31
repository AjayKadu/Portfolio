import React from 'react';
import './footer.css';

function Footer() {
    return (
        <>
            <hr />

<div className='container'>
<div>
                <h2>Contact</h2>
                </div>


          
            <div id='mainDiv'>
               
              

                <div className='social-links'>
                    <div className='imgDiv'>
                        <img className='img-fluid' src="/Images/Instagram_icon.png" alt="Instagram" />
                        <label htmlFor="Instagram">Instagram</label>
                    </div>
                    <div className='imgDiv'>
                        <img className='img-fluid' src="/Images/Facebook_Logo_(2019).png" alt="Facebook" />
                        <label htmlFor="Facebook">Facebook</label>
                    </div>
                    <div className='imgDiv'>
                        <img className='img-fluid' src="/Images/youtube.png" alt="YouTube" />
                        <label htmlFor="YouTube">YouTube</label>
                    </div>
                </div>
                
                <div className='social-links'>
                    <div className='imgDiv'>
                        <img className='img-fluid' src="/Images/linkedin.png" alt="LinkedIn" />
                        <label htmlFor="LinkedIn">LinkedIn</label>
                    </div>
                    <div className='imgDiv'>
                        <img className='img-fluid' src="/Images/github.png" alt="GitHub" />
                        <label htmlFor="GitHub">GitHub</label>
                    </div>
                    <div className='imgDiv'>
                        <img className='img-fluid' src="/Images/twitter.png" alt="X" />
                        <label htmlFor="X">Twitter</label>
                    </div>
                </div>

                <div id='contact'>
                    <div className='imgDiv'>
                        <img className='img-fluid' src="/Images/email.png" alt="Email" />
                        <label htmlFor="Email">kaduajay1122@gmail.com</label>
                    </div>
                    <div className='imgDiv'>
                        <img className='img-fluid' src="/Images/phone-call.png" alt="Phone" />
                        <label htmlFor="Phone">8459552423</label>
                    </div>
                </div>
            </div>
            </div>

            <br />
            <hr id='hr' />
            <p className="text-center">© 2025 Ajay Kadu Portfolio All rights reserved.</p>
            <hr id='hr' />
        </>
    );
}

export default Footer;