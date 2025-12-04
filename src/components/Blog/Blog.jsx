import React from 'react';
import './Blog.css';
import picOne from '../../assets/blog-section/blog-sec-pic1.jpg';
import picTwo from '../../assets/blog-section/blog-sec-pic2.jpg';
import picThree from '../../assets/blog-section/blog-sec-pic3.jpg';
import picFour from '../../assets/blog-section/blog-sec-pic4.jpg';

const Blog = () => {
  const blogData = [
    {
      img: picOne,
      date: '22 Oct, 2020 / 246 Comments',
      title: 'Lorem ipsum dolor sit consea. Nulla purus arcu',
    },
    {
      img: picTwo,
      date: '22 Oct, 2020 / 246 Comments',
      title: 'Lorem ipsum dolor sit consea. Nulla purus arcu',
    },
    {
      img: picThree,
      date: '22 Oct, 2020 / 246 Comments',
      title: 'Lorem ipsum dolor sit consea. Nulla purus arcu',
    },
    {
      img: picFour,
      date: '22 Oct, 2020 / 246 Comments',
      title: 'Lorem ipsum dolor sit consea. Nulla purus arcu',
    },
  ];

  return (
    <section className="portfolio10-blog-section">
      <h2 className="portfolio10-blog-title">Blog</h2>
      <p className="portfolio10-blog-subtitle">
        There are many variations of passages of Lorem Ipsum available,
        <br />
        but the majority have suffered alteration.
      </p>

      <div className="portfolio10-blog-cards">
        {blogData.map((item, index) => (
          <div className="portfolio10-blog-card" key={index}>
            <img src={item.img} alt="blog" className="portfolio10-blog-img" />
            <div className="portfolio10-blog-content">
              <p className="portfolio10-blog-date">{item.date}</p>
              <h3 className="portfolio10-blog-text">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* dots */}
      <div className="portfolio10-blog-dots">
        <span className="portfolio10-dot active"></span>
        <span className="portfolio10-dot"></span>
        <span className="portfolio10-dot"></span>
      </div>
    </section>
  );
};

export default Blog;
