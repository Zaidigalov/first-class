import React, { useState } from 'react'
import styles from "./searchbar.module.css"
import Input from './Input'

export default function Searchbar({ title, isInputExist, tags, onSearch }) {

	const [inputValue, setInputValue] = useState("")

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
		onSearch(event.target.value);
	};


	return (
		<div className={styles.searchbar}>
			<div className={styles.container}>
				{title && <p className={styles.title}>{title}</p>}
				{isInputExist && <Input value={inputValue} onChange={handleInputChange} />}
				{/* {tags &&
					<div className={styles.tags}>
						{tags.map((tag, index) => (
							<button key={index} className={styles.tag}>{tag}</button>
						))}
					</div>
				} */}
			</div>

		</div>
	)
}
