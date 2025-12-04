import React from 'react';
import './HappyClients.css';
import amazon from '../../assets/happy-clients-sec-logo/amazon.png';
import google from '../../assets/happy-clients-sec-logo/google.png';
import dribbble from '../../assets/happy-clients-sec-logo/dribbble.png';
import linkedin from '../../assets/happy-clients-sec-logo/linkedin.png';
import medium from '../../assets/happy-clients-sec-logo/medium.png';
import spotify from '../../assets/happy-clients-sec-logo/spotify.png';

const HappyClients = () => {
  const clients = [
    { img: google, alt: 'Google' },
    { img: dribbble, alt: 'Dribbble' },
    { img: linkedin, alt: 'LinkedIn' },
    { img: amazon, alt: 'Amazon' },
    { img: medium, alt: 'Medium' },
    { img: spotify, alt: 'Spotify' },
  ];

  return (
    <section className="portfolio10-clients-section">
      <div className="portfolio10-clients-header">
        <h1>Happy Clients</h1>
        <h2>
          There are many variations of passages of Lorem Ipsum available,
          <br />
          but the majority have suffered alteration.
        </h2>
      </div>

      <div className="portfolio10-clients-logos">
        {clients.map((client, index) => (
          <img key={index} src={client.img} alt={client.alt} />
        ))}
      </div>
    </section>
  );
};

export default HappyClients;
