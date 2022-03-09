import React from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async';

function AboutUS() {
    return (
        <div>

             <HelmetProvider>
                    <Helmet>
                        <title>KM Hospital | About Us</title>
                    </Helmet>
             </HelmetProvider>

             <div >
                <h1>About Us</h1>

                <p>Medicover is a globally recognised healthcare brand with operations in 12 countries: Germany, Sweden, Poland, Turkey, Belarus, Bulgaria, Georgia, Hungary, Romania, Serbia, Moldova, Ukraine, and India.
Medicover is the leading Multispecialty Hospital chain in India. It is one of the largest healthcare providers in Europe with a significant presence in India. The Group provides a broad spectrum of Health care services and has an extensive network of clinics, hospitals, specialty care facilities, Fertility Centers, and diagnostic labs.
Medicover Hospitals is spread across Telangana, Andhra Pradesh, and Maharashtra treating millions of patients every year with a clear focus on raising the standards of health care in India. It has renowned medical teams who work with the greatest technologies and international evidence-based protocols which offer the most comprehensive treatment across all specialties of medicines.</p>
            </div>
            
        </div>
    )
}

export default AboutUS
