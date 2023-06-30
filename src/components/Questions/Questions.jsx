"use client";

import React, { useState } from "react";
import s from "./questions.module.scss";

const data = [
  {
    question: "What is Webflow and why is it the best website builder?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellentesque nunc commodo nunc purus pulvinar nisi fusce.",
  },
  {
    question: "When did Webflow was founded?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellentesque nunc commodo nunc purus pulvinar nisi fusce.",
  },
  {
    question: "How do you clone a Webflow Template?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellentesque nunc commodo nunc purus pulvinar nisi fusce.",
  },
  {
    question: "Why is BRIX Templates the best Webflow agency?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id volutpat imperdiet quis at pellentesque nunc commodo nunc purus pulvinar nisi fusce.",
  },
];
const Questions = () => {
  const handleClick = (event) => {
    event.currentTarget.classList.toggle(`${s.active}`);
  };
  return (
    <div className={`container ${s.container}`}>
      <div className="row justify-content-md-center">
        <div className={`col-12 `}>
          <h2 className={s.title}>Frequently Asked Questions</h2>
          <h4 className={s.desc}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit aenean id
            volutpat imperdiet quis at pellentesque nunc commodo nunc purus
            pulvinar nisi fusce.
          </h4>
        </div>
        <div className={`col-12 ${s.accordion}`}>
          <div className={`mb-4`}>
            {data.map((item, i) => (
              <div className={s.item} key={i}>
                <div className={s.contentBx} onClick={handleClick}>
                  <h3 className={s.label}>{item.question}</h3>
                  <h4 className={`${s.content}`}>{item.answer}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
