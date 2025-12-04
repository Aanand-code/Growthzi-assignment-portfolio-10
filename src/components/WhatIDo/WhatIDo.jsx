import React from 'react';
import './WhatIDo.css';

const WhatIDo = () => {
  const services = [
    {
      title: 'User Experience (UX)',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.',
    },
    {
      title: 'User Interface (UI)',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.',
    },
    {
      title: 'Web Development',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.',
    },
  ];

  return (
    <section className="portfolio10-what-section">
      <div className="portfolio10-what-left">
        <h2>What I do?</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
          arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
          eget lorem ac vestibulum. Suspendis imperdiet,
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
          arcu, varius eget velit non.
        </p>

        <button className="portfolio10-hello-btn">Say Hello!</button>
      </div>

      <div className="portfolio10-what-right">
        {services.map((item, index) => (
          <div className="portfolio10-service-card-wrapper" key={index}>
            <div className="portfolio10-service-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default WhatIDo;
