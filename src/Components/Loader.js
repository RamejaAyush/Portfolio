import { LazyMotion, domAnimation, motion } from "framer-motion";
import "../Styles/Loader.scss";
import LoaderImage from "../Media/loader.png";
import { useState, useEffect } from "react";

const Loader = () => {
  const quotesArr = [
    "Everything negative: pressure, challenges, is all an opportunity for me to rise.",
    "Do all the good you can, for all the people you can, in all the ways you can, as long as you can.",
    "The unexamined life is not worth living.",
    "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",
  ];

  let randomQuote = quotesArr[Math.floor(Math.random() * quotesArr.length)];

  const imgContAnimation = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  };

  const textContAnimation = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };

  const loaderAnimation = {
    exit: { opacity: 0, y: -100 },
  };

  return (
    <LazyMotion features={domAnimation}>
      <motion.div className="loader-container">
        <div className="left-side">
          <motion.div
            variants={loaderAnimation}
            exit="exit"
            transition={{ duration: 1 }}
            className="header"
          >
            <svg
              className="loader"
              version="1.1"
              id="L1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              enable-background="new 0 0 100 100"
              xmlSpace="preserve"
            >
              <circle
                fill="none"
                stroke="#fff"
                stroke-width="6"
                stroke-miterlimit="15"
                stroke-dasharray="14.2472,14.2472"
                cx="50"
                cy="50"
                r="47"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="5s"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                fill="none"
                stroke="#fff"
                stroke-width="1"
                stroke-miterlimit="10"
                stroke-dasharray="10,10"
                cx="50"
                cy="50"
                r="39"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="5s"
                  from="0 50 50"
                  to="-360 50 50"
                  repeatCount="indefinite"
                />
              </circle>
              <g fill="#fff">
                <rect x="30" y="35" width="5" height="30">
                  <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 5 ; 0 -5; 0 5"
                    repeatCount="indefinite"
                    begin="0.1"
                  />
                </rect>
                <rect x="40" y="35" width="5" height="30">
                  <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 5 ; 0 -5; 0 5"
                    repeatCount="indefinite"
                    begin="0.2"
                  />
                </rect>
                <rect x="50" y="35" width="5" height="30">
                  <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 5 ; 0 -5; 0 5"
                    repeatCount="indefinite"
                    begin="0.3"
                  />
                </rect>
                <rect x="60" y="35" width="5" height="30">
                  <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 5 ; 0 -5; 0 5"
                    repeatCount="indefinite"
                    begin="0.4"
                  />
                </rect>
                <rect x="70" y="35" width="5" height="30">
                  <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 5 ; 0 -5; 0 5"
                    repeatCount="indefinite"
                    begin="0.5"
                  />
                </rect>
              </g>
            </svg>
            <p>Loading</p>
          </motion.div>
          <motion.div
            variants={textContAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1 }}
            className="quote"
          >
            <motion.h1 data-text="❝">{randomQuote}</motion.h1>
            <p>• have a Positive Day my friend</p>
          </motion.div>
        </div>
        <div className="right-side">
          <motion.img
            variants={imgContAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1 }}
            src={LoaderImage}
            alt=""
          />
        </div>
      </motion.div>
    </LazyMotion>
  );
};

export default Loader;
