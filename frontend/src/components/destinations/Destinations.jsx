import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./destinations.module.css";
import Searchbar from "../searchbar/Searchbar";
import cursivingText from "../../functions/cursivingText";

export default function Destinations({ title, isInputExist, tags, destinations }) {
  const [data, setData] = useState(destinations);
  const [width, setWidth] = useState(window.innerWidth);

  console.log(destinations);

  const settings = {
    className: `${styles.slider}`,
    /* variableWidth: true, */
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 5,
    touchThreshold: 100,
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
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={`${styles["slick-arrow"]} ${styles["slick-next"]}`} onClick={onClick}>
        <svg>
          <use href="../images/icons/arrows.svg#arrow-right"></use>
        </svg>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={`${styles["slick-arrow"]} ${styles["slick-prev"]}`} onClick={onClick}>
        <svg>
          <use href="../images/icons/arrows.svg#arrow-right"></use>
        </svg>
      </div>
    );
  }

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

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
                <span className={styles.quantity}>
                  {tours} {width >= 420 && "tours"}
                </span>
              </div>
              <div className={styles.cities}>
                <span className={styles.subtitle}>{width >= 420 && "popular"} cities</span>
                <span className={styles.quantity}>
                  {cities} {width >= 420 && "cities"}
                </span>
              </div>
              <div className={styles.hotels}>
                <span className={styles.subtitle}>{width >= 420 && "luxury"} hotels</span>
                <span className={styles.quantity}>
                  {hotels} {width >= 420 && "hotels"}
                </span>
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
    );
  };

  function onSearchHandler(query) {
    findObjectsContainingString(destinations, query);
  }

  function findObjectsContainingString(arr, str) {
    const result = arr.filter((obj) => containsString(obj, str.toLowerCase()));
    console.log(result);
    setData(result);
  }

  function containsString(obj, str) {
    // Проход по всем свойствам объекта
    for (const key in obj) {
      // Если свойство - объект, то рекурсивно проверяем его
      if (typeof obj[key] === "object" && obj[key] !== null) {
        if (containsString(obj[key], str)) {
          return true;
        }
      }
      // Проверяем, является ли свойство строкой и содержит ли ее искомую строку, игнорируя регистр
      if (typeof obj[key] === "string" && obj[key].toLowerCase().includes(str)) {
        return true;
      }
    }
    return false;
  }

  function renderDestinations() {
    if (data.length > 10) {
      return (
        <Slider {...settings}>
          {data.map((destination, index) => {
            /* console.log(destination); */
            return (
              <Destination
                key={index}
                title={destination.translations?.en?.name || destination.name}
                tours={destination.destination_count}
                cities={destination.city_count}
                hotels={destination.hotel_count}
                image={destination.image}
                link={destination.slug}
              ></Destination>
            );
          })}
        </Slider>
      );
    } else if (data.length <= 10 && data.length !== 0) {
      return (
        <>
          {data.map((destination, index) => {
            return (
              <Destination
                key={index}
                title={destination.translations?.en?.name || destination.name}
                tours={destination.destination_count}
                cities={destination.city_count}
                hotels={destination.hotel_count}
                image={destination.image}
                link={destination.slug}
              ></Destination>
            );
          })}
        </>
      );
    } else {
      return (
        <div className={`${styles.empty}`}>
          <p
            className="title"
            dangerouslySetInnerHTML={{
              __html: cursivingText("No destinations /found/"),
            }}
          ></p>
        </div>
      );
    }
  }

  return (
    <section className={styles.destinations}>
      <Searchbar title={title} isInputExist={isInputExist} tags={tags} onSearch={onSearchHandler}></Searchbar>

      <div className={styles.container}>
        {renderDestinations()}
        {/*   {destinations.length > 4 ? (
          <Slider {...settings}>
            {destinations.map((destination, index) => {
              return (
                <Destination
                  key={index}
                  title={destination.translations?.en?.name || destination.name}
                  tours={destination.destination_count}
                  cities={destination.city_count}
                  hotels={destination.hotel_count}
                  image={destination.image}
                  link={destination.slug}
                ></Destination>
              );
            })}
          </Slider>
        ) : (
          <>
            {destinations.map((destination, index) => {
              return (
                <Destination
                  key={index}
                  title={destination.translations.en.name}
                  tours={destination.destination_count}
                  cities={destination.city_count}
                  hotels={destination.hotel_count}
                  image={destination.image}
                  link={destination.slug}
                ></Destination>
              );
            })}
          </>
        )} */}
      </div>
    </section>
  );
}
