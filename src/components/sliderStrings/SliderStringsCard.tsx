import React from 'react'
import styles from './sliderStrings.module.css';
import { Link } from 'react-router-dom';


export default function SliderStringsCard({ slide }) {
	return (

		<Link className={`${styles.slide} cursive`} to={`/city/${slide.slug}`}>{slide.translations.en.name}</Link>

	)
}
