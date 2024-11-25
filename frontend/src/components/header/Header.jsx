import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

import Cookies from "../cookies/Cookies";
/* import { Contact } from "../contact/Contact";*/
import Form from "../form/Form";
import Menu from "../menu/Menu";
import Overlay from "../header_overlay/Overlay";

export default function Header({ full, transparent, width }) {
  const [overlayClass, setOverlayClass] = useState("first");
  const [innerOverlay, setInnerOverlay] = useState(null);

  function showOverlay(component) {
    setInnerOverlay((prev) => {
      if (component === null) {
        return prev;
      } else return component;
    });

    setOverlayClass((prev) => {
      if (prev === "first" || prev === "hidden") {
        return "showed";
      }
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeOverlay();
      }
    });

    document.querySelector("html").style.overflow = "hidden";
    document.querySelector("body").style.overflowY = "scroll";
    document.querySelector("body").style.position = "fixed";
    document.querySelector("body").style.width = "100%";
  }

  function closeOverlay() {
    setOverlayClass("hidden");
    window.removeEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeOverlay();
      }
    });

    document.querySelector("html").style.overflow = "auto";
    document.querySelector("body").style.position = "static";
    document.querySelector("body").style.overflowY = "auto";
    document.querySelector("body").style.width = "auto%";
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles["logo-container"]}>
            <Link to="/" className={styles.logo}>
              <img src="../images/icons/logo.svg"></img>
            </Link>
          </div>
          {width > 538 && (
            <>
              <nav className={styles.navigation}>
                <div className={styles.find}>
                  <div className={`${styles["find-button"]} ${styles.button}`}>
                    <img src="../images/icons/Airplane.svg"></img>
                  </div>
                  <Link to="/" className={`${styles["find-text"]}`}>
                    Unexpected Discovers
                  </Link>
                </div>
                <div className={`${styles["main-links"]}`}>
                  <Link to="/destinations" className={`${styles["main-link"]}`}>
                    <p>Destinations</p>
                    <span>+</span>
                  </Link>
                  <Link to="/adventures" className={`${styles["main-link"]}`}>
                    <p>Adventures</p>
                    <span>+</span>
                  </Link>
                  <Link to="/rent" className={`${styles["main-link"]}`}>
                    <p>Services</p>
                    <span>+</span>
                  </Link>
                </div>

                <Link to="/meet" className={`${styles.meet}`}>
                  VIP in Airports
                </Link>
              </nav>
            </>
          )}

          <div className={`${styles.buttons}`}>
            <button
              className={`${styles.button}`}
              onClick={() => {
                overlayClass === "showed" ? closeOverlay() : null /* showOverlay(<Contact></Contact>) */;
              }}
            >
              <img src="../images/icons/Phone.svg"></img>
            </button>
            <button
              className={`${styles.button}`}
              onClick={() => {
                overlayClass === "showed" ? closeOverlay() : showOverlay(<Form closeOverlay={closeOverlay}></Form>);
              }}
            >
              <img src="../images/icons/Email.svg"></img>
            </button>

            <button
              className={`${styles.button} ${styles.burger}`}
              onClick={() => {
                overlayClass === "showed" ? closeOverlay() : showOverlay(<Menu closeOverlay={closeOverlay} width={width}></Menu>);
              }}
            >
              <img src="../images/icons/burger.svg" alt="" />
            </button>
          </div>
        </div>
      </header>

      <Overlay content={innerOverlay} overlayClass={overlayClass}></Overlay>

      {/* <Cookies></Cookies> */}
    </>
  );
}
