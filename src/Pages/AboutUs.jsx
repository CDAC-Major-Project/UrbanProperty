import React from 'react';
import '../css/AboutUs.css'; // Import the CSS file

const AboutUs = () => {
    return (
        <div style={{ width: '100%', margin: 0, padding: 0 }}>
            <section className="urban-section">
                <h1 className="urban-heading">
                    <span style={{ color: '#333333' }}>THE </span>
                    <span style={{ color: '#A67C52' }}>URBAN PROPERTIES</span>
                </h1>
                <p className="urban-text">
                    Here at the Urban Properties, “U” come first-your choice and requirement matter the most to us.
                    We have helped hundreds of buyers find their dream homes with our widest range of properties.
                    Now, we are taking a step forward: from being a property agent to a full-stack platform that offers
                    all property-related services, including Property Selling, arranging Home Loans, Interior Designing,
                    and Legal Assistance. We’ve got you covered under one roof. We deliver the best services at reasonable
                    rates, driven by our passion to fully satisfy you.
                </p>
            </section>
            <section className="urban-section">
                <h1 className="urban-subheading">
                    <span style={{ color: '#333333' }}>YOUR </span>
                    <span style={{ color: '#A67C52' }}>DREAM OUR PROMISE</span>
                </h1>
                <p className="urban-text">
                    We understand that purchasing a property may be one of the biggest investments of your life.
                    We have the inner feeling for your hard-earned money. We always ensure that you get the right
                    property at the right price, free from any legal hurdles. Contact us today for a free consultation
                    and start your property buying journey.
                </p>
            </section>
        </div>
    );
};

export default AboutUs;
