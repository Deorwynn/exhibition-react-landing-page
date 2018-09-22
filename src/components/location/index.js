import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1251.1864873942989!2d0.0005840925767886215!3d51.54289439721174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a789dc30979f%3A0xf17590936bd3054e!2sTheatre+Royal+Stratford+East!5e0!3m2!1sen!2ssk!4v1537617386558"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        
        </div>
    );
};

export default Location;