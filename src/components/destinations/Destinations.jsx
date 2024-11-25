import React, { useState, useEffect } from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./destinations.module.css"
import Searchbar from '../searchbar/Searchbar'
import { Link } from 'react-router-dom'


export default function Destinations({ title, isInputExist, tags, destinations }) {
	const [width, setWidth] = useState(window.innerWidth)

	const settings = {
		className: `${styles.slider}`,
		/* variableWidth: true, */
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 2,
		touchThreshold: 25,
		/* adaptiveHeight: true, */
		/* initialSlide: 0, */
		dots: false,
		vertical: true,
		verticalSwiping: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 834,
				settings: {
					arrows: false,
				}
			},
		]
	};

	function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={`${styles["slick-arrow"]} ${styles["slick-next"]}`}
				onClick={onClick}	>
				<svg>
					<use href="../images/icons/arrows.svg#arrow-right"></use>
				</svg>
			</div>
		);
	}

	function SamplePrevArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={`${styles["slick-arrow"]} ${styles["slick-prev"]}`}
				onClick={onClick}
			>
				<svg>
					<use href="../images/icons/arrows.svg#arrow-right"></use>
				</svg>
			</div>
		);
	}

	useEffect(() => {
		window.addEventListener('resize', () => (setWidth(window.innerWidth)))

		return () => window.removeEventListener('resize', () => (setWidth(window.innerWidth)))
	}, [width])

	const Destination = ({ title, tours, cities, hotels, image, link }) => {

		return (
			<div className={styles.destination}>
				<div className={styles.name}>
					<div className={styles.image}>
						<img src={image} alt="" />
					</div>
					<Link to={`/country/${link}`} className={styles["link-title"]}>
						<h3 className={styles.title}>{title}</h3>
					</Link>
					{width < 940 && (
						<div className={styles.info}>
							<div className={styles.tours}>
								<span className={styles.subtitle}>tours</span>
								<span className={styles.quantity}>{tours} {width >= 420 && "tours"}</span>
							</div>
							<div className={styles.cities}>
								<span className={styles.subtitle}>{width >= 420 && "popular"} cities</span>
								<span className={styles.quantity}>{cities} {width >= 420 && "cities"}</span>
							</div>
							<div className={styles.hotels}>
								<span className={styles.subtitle}>{width >= 420 && "luxury"} hotels</span>
								<span className={styles.quantity}>{hotels} {width >= 420 && "hotels"}</span>
							</div>
						</div>
					)}
				</div>
				{width >= 940 && (
					<div className={styles.info}>
						<div className={styles.tours}>
							<span className={styles.subtitle}>tours</span>
							<span className={styles.quantity}>{tours} tours</span>
						</div>
						<div className={styles.cities}>
							<span className={styles.subtitle}>popular cities</span>
							<span className={styles.quantity}>{cities} cities</span>
						</div>
						<div className={styles.hotels}>
							<span className={styles.subtitle}>luxury hotels</span>
							<span className={styles.quantity}>{hotels} hotels</span>
						</div>
					</div>
				)}
				<Link to={`/country/${link}`} className={styles.link}>
					<svg>
						<use href="../images/icons/arrows.svg#arrow-right"></use>
					</svg>
				</Link>
			</div>
		)
	}
	return (
		<section className={styles.destinations}>
			<Searchbar title={title} isInputExist={isInputExist} tags={tags}></Searchbar>
			<div className={styles.container}>
				{destinations.length > 4 ? (
					<Slider {...settings}>
						{destinations.map((destination, index) => {
							return <Destination
								key={index}
								title={destination.translations.en.name}
								tours={destination.destination_count}
								cities={destination.city_count}
								hotels={destination.hotel_count}
								image={destination.image}
								link={destination.slug}></Destination>
						})}
					</Slider>

				) : (<>
					{destinations.map((destination, index) => {
						return <Destination
							key={index}
							title={destination.translations.en.name}
							tours={destination.destination_count}
							cities={destination.city_count}
							hotels={destination.hotel_count}
							image={destination.image}
							link={destination.slug}></Destination>
					})}
				</>

				)}

			</div>


		</section>
	)
}
