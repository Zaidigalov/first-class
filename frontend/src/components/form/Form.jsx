import React, { useState } from "react";
import styles from "./form.module.css";
import { countriesEN, countriesRU } from "./country-list_en";
import Runline from "../runline/Runline";
import { path } from "../../path";
import { Link } from "react-router-dom";

export default function Form({ closeOverlay }) {
  const [buttonText, setButtonText] = useState("Let’s journey!");
  const [data, setData] = useState({
    client_name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    country: "",
    comments: "",
  });

  const [errors, setErrors] = useState({
    client_name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    country: "",
    comments: "",
  });

  const services = ["Hotel Booking", "Flight Tickets", "Jet Rental", "Challet Rental", "Villa Rental", "Yacht Rental", "Visa Support", "Corporate", "Cruises", "VIP IN Airports"];

  const handleChange = ({ currentTarget: input }) => {
    let newData = { ...data };
    newData[input.name] = input.value;
    setData(newData);
  };

  async function doSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(`${path}feedback/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        /*console.log(result);*/
        setData({
          client_name: "",
          company: "",
          phone: "",
          email: "",
          service: "",
          country: "",
          comments: "",
        });
        setButtonText("Sent");

        setTimeout(() => {
          closeOverlay();
          setButtonText("Let’s journey!");
        }, 1500);
      } else {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
    } catch (error) {
      console.log(error);
    }
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
              {/*               <label htmlFor="client_name" className={styles.label}>
                full name
              </label> */}
              <input
                className={`${styles.input}`}
                id="client_name"
                name="client_name"
                type="text"
                placeholder="full name"
                required
                value={data.client_name}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <div className={styles.field}>
              {/*               <label htmlFor="company" className={styles.label}>
                Company
              </label> */}
              <input
                className={`${styles.input}`}
                id="company"
                name="company"
                type="text"
                placeholder="Company"
                required={true}
                value={data.company}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <div className={styles.field}>
              {/*               <label htmlFor="phone" className={styles.label}>
                Phone Number
              </label> */}
              <input
                className={`${styles.input}`}
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone Number"
                required={true}
                value={data.phone}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <div className={styles.field}>
              {/*               <label htmlFor="email" className={styles.label}>
                Email
              </label> */}
              <input
                className={`${styles.input}`}
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required={true}
                value={data.email}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <div className={styles.field}>
              {/*               <label htmlFor="service" className={styles.label}>
                Select Service
              </label> */}
              <select
                className={`${styles.input}`}
                id="service"
                name="service"
                placeholder="Select Service"
                required={false}
                value={data.service}
                onChange={(e) => {
                  handleChange(e);
                }}
              >
                {services.map((srvice, index) => (
                  <option key={index} value={srvice}>
                    {srvice}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.field}>
              {/*               <label htmlFor="country" className={styles.label}>
                Select Country
              </label> */}
              <select
                className={`${styles.input}`}
                id="country"
                name="country"
                placeholder="Select Country"
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

            <div className={`${styles.field} ${styles["field-comment"]}`}>
              {/*               <label htmlFor="comments" className={styles.label}>
                Kindly provide us with your important details to ensure we tailor your ideal journey
              </label> */}
              <textarea
                className={`${styles.input} ${styles["input-comment"]}`}
                id="comments"
                name="comments"
                placeholder="message"
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
                I agree with the <Link to="/privacy-policy">privacy policy</Link>{" "}
              </label>
            </div>

            <button className={styles.invitation} type="submit">
              <p>{buttonText}</p>
              <img src="../images/icons/Airplane.svg" alt="" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
