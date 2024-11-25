import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './sliderStrings.module.css';
import SliderStringsCard from './SliderStringsCard';
import "./sliderString.css"



export default function SliderStrings({ slides, onChange }) {

	const settings = {
		className: `${styles.slider}`,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		focusOnSelect: true,
		/* 	beforeChange: (currentSlide, nextSlide) => {
				onChange(slides[currentSlide].image, slides[nextSlide].image);
				console.log(currentSlide)
				console.log(nextSlide)
			},
			afterChange: (currentSlide) => {
	
				console.log(currentSlide)
			} */
		responsive: [
			{
				breakpoint: 834,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: false,
				}
			},
		]

	};



	return (
		<Slider {...settings}>

			{slides.map((slide, index) => {
				return <SliderStringsCard key={index} slide={slide} />
			})}
		</Slider>
	)
}
