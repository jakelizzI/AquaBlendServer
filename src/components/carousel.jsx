import React from 'react';
import Slider from 'react-slick';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import '../styles/sass/carousel.scss';

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = ({ placeholderImage }) => (
  <Slider {...settings}>
    {placeholderImage.edges.map((element, index) => (
      <a target="_blank" rel="noopener noreferrer" href={`/tokusetsu/${element.node.name.slice(3)}`} key={index.toString()}>
        <Img fluid={element.node.childImageSharp.fluid} />
      </a>
    ))}
  </Slider>
);

Carousel.propTypes = {
  placeholderImage: PropTypes.isRequired,
};

export default Carousel;
