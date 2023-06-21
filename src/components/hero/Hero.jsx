"use client";

import Image from "next/image";
import React from "react";
import s from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={`container ${s.container}`}>
      <div className="row">
        <div className={`col-12 col-md-6 ${s.hero}`}>
          <h1 className={s.title}>A dedicated team to grow your company</h1>
          <h2 className={s.desc}>
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices.
          </h2>
          <div className={s.buttons}>
            <button
              className={`dark_buttons ${s.start_btn}`}
              onClick={() => {
                console.log("get started");
              }}
            >
              Get started
            </button>
            <button
              className={`light_buttons ${s.btn}`}
              onClick={() => {
                console.log("Talk to sales");
              }}
            >
              Talk to sales
            </button>
          </div>
        </div>
        <div className={`col-12 col-md-6 ${s.image}`}>
          <Image
            src="/placeholder.png"
            width={565}
            height={557}
            alt="placeholder"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
