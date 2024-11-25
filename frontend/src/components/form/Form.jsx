import React, { useState } from "react";
import styles from "./form.module.css";
import { countriesEN, countriesRU } from "./country-list_en";
import Runline from "../runline/Runline";
import { path } from "../../path";

export default function Form({ closeOverlay }) {
  const [data, setData] = useState({
    client_name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    country: "",
    attach: "",
    comments: "",
  });

  const [errors, setErrors] = useState({
    client_name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    country: "",
    attach: "",
    comments: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    let newData = { ...data };
    newData[input.name] = input.value;
    setData(newData);
  };

  const handleImageChange = (event) => {
    let newData = { ...data };
    newData["attach"] = event.target.files[0];
    setData(newData);
  };

  const doSubmit = async (event) => {
    consloleData(event);
    event.preventDefault();
    /* const response = await API.createListing(data);
		if (response.status === 400) {
			setErrors(response.data);
		} */
  };

  function consloleData(e) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <>
      <Runline text="/Dear Ladies &/ Gentlemens, Welcome to a world of bespoke travel, where /your dreams/ become our mission" />

      <section className={styles["form-container"]}>
        {/* <button className={`${styles["form-button"]} ${styles["button-close"]}`} onClick={() => { onClose(null) }}>
		<div className={`${styles["close-left"]} ${styles["close-slice"]}`}></div>
		<div className={`${styles["close-right"]} ${styles["close-slice"]}`}></div>
	</button> */}

        <div className={styles["inner-container"]}>
          <form action="" className={styles.form} onSubmit={(e) => doSubmit(e)}>
            <div className={styles.field}>
              <label htmlFor="client_name" className={styles.label}>
                Name & Surname
              </label>
              <input
                className={`${styles.input}`}
                id="client_name"
                name="client_name"
                type="text"
                placeholder=""
                required
                value={data.client_name}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="company" className={styles.label}>
                Company Name
              </label>
              <input
                className={`${styles.input}`}
                id="company"
                name="company"
                type="text"
                placeholder=""
                required={true}
                value={data.company}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="phone" className={styles.label}>
                Phone Number
              </label>
              <input
                className={`${styles.input}`}
                id="phone"
                name="phone"
                type="tel"
                placeholder=""
                required={true}
                value={data.phone}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                E-mail Address
              </label>
              <input
                className={`${styles.input}`}
                id="email"
                name="email"
                type="email"
                placeholder=""
                required={true}
                value={data.email}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="service" className={styles.label}>
                Choose Service
              </label>
              <select
                className={`${styles.input}`}
                id="service"
                name="service"
                required={false}
                value={data.service}
                onChange={(e) => {
                  handleChange(e);
                }}
              ></select>
            </div>

            <div className={styles.field}>
              <label htmlFor="country" className={styles.label}>
                Choose Country
              </label>
              <select
                className={`${styles.input}`}
                id="country"
                name="country"
                required={true}
                value={data.country}
                onChange={(e) => {
                  handleChange(e);
                }}
              >
                {countriesEN.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className={`${styles.field} ${styles["field-attach"]}`}>
              <label htmlFor="attach" className={styles.label}>
                Attach File
              </label>
              <input
                className={`${styles.input} ${styles["input-attach"]}`}
                id="attach"
                name="attach"
                type="file"
                required={false}
                onChange={(e) => {
                  handleImageChange(e);
                }}
              />
            </div>

            <div className={`${styles.field} ${styles["field-comment"]}`}>
              <label htmlFor="comments" className={styles.label}>
                Kindly provide us with your important details to ensure we tailor your ideal journey
              </label>
              <textarea
                className={`${styles.input} ${styles["input-comment"]}`}
                id="comments"
                name="comments"
                required={false}
                value={data.comments}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <div className={`${styles.field} ${styles["field-checkbox"]}`}>
              <input
                className={`${styles.input} ${styles["input-checkbox"]}`}
                id="checkbox"
                name="agree"
                required={true}
                type="checkbox"
                value={data.client_name}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <label htmlFor="checkbox" className={styles.label}>
                I agree with the <a href="">privacy policy</a>{" "}
              </label>
            </div>

            <button className={styles.invitation} type="submit">
              <p>Let’s journey!</p>
              <img src="./images/icons/Airplane.svg" alt="" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
