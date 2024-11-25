import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
/* import "slick-carousel/slick/slick-theme.css" */ import "./sliderMain.css";
import styles from "./sliderMain.module.css";

import cursivingText from "../../functions/cursivingText";
import SliderCardMain from "../sliderCardMain/SliderCardMain";
import chunkArray from "../../functions/chunkArray";

export default function SliderMain({ slides, title, width }) {
  const [isSliderItited, seIsSliderInited] = useState(false);
  const [slider, setSlider] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(null);
  const [allSlides, setAllSlides] = useState(null);
  const [cards, setCards] = useState(null);
  const [firstCards, setFirstCards] = useState(null);
  const [sliding, setSliding] = useState(false);
  const container = useRef(null);

  const settings = {
    className: "slider main-slider",
    variableWidth: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 100,
    adaptiveHeight: true,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    onInit: () => {
      seIsSliderInited(true);
    },
    afterChange: () => {
      setTimeout(() => {
        setSliding(false);
      }, 100);
    },
    beforeChange: () => {
      setSliding(true);
      const activeCards = Array.from(document.querySelectorAll('[class*="active-card"]'));
      activeCards.forEach((activeCard) => activeCard.classList.remove(`${styles["active-card"]}`));
    },
  };

  useEffect(() => {
    console.log(sliding);
  }, [sliding]);

  useEffect(() => {
    if (!isSliderItited) return;
    setSlider(document.querySelector(".main-slider"));
  }, [isSliderItited]);

  useEffect(() => {
    if (!slider) return;
    setAllSlides(Array.from(slider.querySelectorAll(".slick-slide")));
  }, [slider]);

  useEffect(() => {
    if (!allSlides || !slider) return;
    setCards(slider.querySelectorAll('[class*="card"]'));
  }, [allSlides, slider]);

  /* useEffect(() => {
		if (!cards) return
		cards.forEach(card => {
			card.classList.add(styles.card)
		})
	}, [cards]) */

  useEffect(() => {
    if (!allSlides) return;
    setFirstCards(allSlides.map((slide) => slide.querySelector('[class*="card"]')));
  }, [allSlides]);

  useEffect(() => {
    if (!firstCards) return;
    firstCards.forEach((card) => {
      card.classList.add(styles["active-card"]);
    });
  }, [firstCards, sliding]);

  useEffect(() => {
    if (!firstCards || !cards) return;

    const handleMouseOver = (card) => (e) => {
      if (sliding) return;
      else {
        console.log(sliding);
        const classes = Array.from(card.classList);
        if (classes.includes(`${styles["active-card"]}`)) return;

        const activeCards = Array.from(document.querySelectorAll('[class*="active-card"]'));
        activeCards.forEach((activeCard) => activeCard.classList.remove(`${styles["active-card"]}`));
        card.classList.add(`${styles["active-card"]}`);
      }
    };

    // Добавляем обработчик событий
    cards.forEach((card) => {
      card.addEventListener("mouseover", handleMouseOver(card));

      // Убираем обработчик событий при размонтировании
      return () => {
        card.removeEventListener("mouseover", handleMouseOver(card));
      };
    });

    // Очистка при изменении зависимостей
    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseover", handleMouseOver(card));
      });
    };
  }, [cards, firstCards, sliding]);

  useEffect(() => {
    if (width > 1200) return;
    setCards(container.current.querySelectorAll('[class*="card"]'));
  }, [width]);

  useEffect(() => {
    if (cards) cards[0].classList.add(`${styles["active-card"]}`);
  }, [cards]);

  useEffect(() => {
    if (width > 1200 || !cards) return;

    const handleClick = (card) => (e) => {
      const classes = Array.from(card.classList);
      if (classes.includes(`${styles["active-card"]}`)) return;

      const activeCards = Array.from(document.querySelectorAll('[class*="active-card"]'));
      activeCards.forEach((activeCard) => activeCard.classList.remove(`${styles["active-card"]}`));
      card.classList.add(`${styles["active-card"]}`);

      /* card.scrollIntoView({ behavior: 'smooth', inline: 'center' })

			 */
      /* setTimeout(() => {
				card.scrollIntoView({ behavior: 'smooth', inline: 'center' })

			}, 100) */

      setTimeout(() => {
        card.scrollIntoView({ behavior: "smooth", inline: "center" });
      }, 500);
    };

    // Добавляем обработчик событий
    cards.forEach((card) => {
      card.addEventListener("click", handleClick(card));

      // Убираем обработчик событий при размонтировании
      return () => {
        card.removeEventListener("click", handleClick(card));
      };
    });

    // Очистка при изменении зависимостей
    return () => {
      cards.forEach((card) => {
        card.removeEventListener("click", handleClick(card));
      });
    };
  }, [cards, width]);

  const array = chunkArray(slides, 3);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={`${styles["slick-arrow"]} ${styles["slick-next"]}`} onClick={onClick}>
        <svg>
          <use href="./images/icons/arrows.svg#arrow-right"></use>
        </svg>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={`${styles["slick-arrow"]} ${styles["slick-prev"]}`} onClick={onClick}>
        <svg>
          <use href="./images/icons/arrows.svg#arrow-right"></use>
        </svg>
      </div>
    );
  }

  return (
    <section className={styles["slider-container"]}>
      <h2 className={`${styles["main-title"]} title`} dangerouslySetInnerHTML={{ __html: cursivingText(title) }}></h2>
      {/* <button className="button" onClick={check}>CHECK</button> */}

      {/*  {width > 1200 ? (
        <Slider {...settings}>
          {array.map((subarray, index) => {
            return (
              <div key={index}>
                <div
                  className={styles.slide}
                  onClick={() => {
                    setSliding(true);
                  }}
                >
                  {subarray.map((item, index) => {
                    return (
                      <SliderCardMain
                        key={index}
                        tags={item.tags}
                        tagIcon={item.tagIcon}
                        background={item.background}
                        title={item.title}
                        description={item.description}
                        isLinkExist={item.isLinkExist}
                        linkText={item.linkText}
                        link={item.link}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Slider>
      ) : (
        <div className={styles.slide} ref={container}>
          {slides.map((item, index) => {
            return (
              <SliderCardMain
                key={index}
                tags={item.tags}
                tagIcon={item.tagIcon}
                background={item.background}
                title={item.title}
                description={item.description}
                isLinkExist={item.isLinkExist}
                linkText={item.linkText}
                link={item.link}
              />
            );
          })}
        </div>
      )} */}

      <div className={styles.slide} ref={container}>
        {slides.map((item, index) => {
          return (
            <SliderCardMain
              key={index}
              tags={item.tags}
              tagIcon={item.tagIcon}
              background={item.background}
              title={item.title}
              description={item.description}
              isLinkExist={item.isLinkExist}
              linkText={item.linkText}
              link={item.link}
            />
          );
        })}
      </div>
    </section>
  );
}
