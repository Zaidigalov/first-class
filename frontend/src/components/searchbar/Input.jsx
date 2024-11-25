import React from 'react'
import styles from "./searchbar.module.css"

export default function Input({ value, onChange }) {
	return (
		<div className={styles["input-container"]}>
			<button className={styles["search-button"]} /* onClick={onSearch} */>
				<img src="../images/icons/search.svg" alt="" />
			</button>
			<input
				type="text"
				placeholder="Search"
				className={styles.input}
				value={value}
				onChange={onChange} />
		</div>
	)
}
