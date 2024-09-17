import React from 'react';
import './blog.css';
import data from './blogdata.json';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BlogCard = ({ title, blogs }) => {
  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust the number of slides for smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="background-container">
        {/* Content including slider */}
        <h2>{title}</h2>
        <Slider {...settings}>
          {data.blogs.map((blog) => (
            <div className="new col-sm-6 col-lg-4 my-auto" key={blog.id}>
              <div className="new box shadow-sm p-4">
                <div className="new image-wrapper">
                  <a href={blog['Read more']} target="_blank" rel="noopener noreferrer">
                    <img src={blog.image} alt="New Image Name" />
                  </a>
                </div>
                <div className="new box-desc">
                  <h4>{blog.name}</h4>
                  <p>{blog.content}</p>
                  <a href={blog['Read more']} target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlogCard;
