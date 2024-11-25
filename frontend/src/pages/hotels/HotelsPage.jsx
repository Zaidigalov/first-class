import React from 'react'
import Header from '../../components/header/Header'
import Hotels from '../../components/hotels/Hotels'
import Runline from '../../components/runline/Runline'
import Footer from '../../components/footer/Footer'


export default function HotelsPage() {
	return (
		<>
			<Header full={false} transparent={false} ></Header>

			<Hotels title="choose /Our HOTELS/" slides={[
				{
					title: 'Waldor Astoria',
					image: '../images/countries/israel/hotels/1.jpg',
					link: '/hotel'
				},
				{
					title: 'Hotel',
					image: '../images/circle/backgrounds/moscow.jpg',
					link: '/hotel'
				},
				{
					title: 'Hot',
					image: '../images/circle/backgrounds/moscow.jpg',
					link: '/hotel'
				},
				{
					title: 'Hotel D',
					image: '../images/circle/backgrounds/moscow.jpg',
					link: '/hotel'
				},
			]}></Hotels>

			<Runline text={"/Luxury/ Arrivals & Departures"}></Runline>

			<Footer color="#9e6639" image="../images/countries/israel/footer8.1.jpg" />

		</>
	)
}
