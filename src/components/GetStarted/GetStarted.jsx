"use client";

import Image from "next/image";
import React from "react";
import s from "./getstarted.module.scss";

const GetStarted = () => {
  return (
    <div className={`container`}>
      <div className="row">
        <div className={`col-12 col-md-6 px-0`}>
          <Image
            className={s.image}
            src="/placeholder-2.png"
            width={614}
            height={539}
            alt="placeholder"
          />
        </div>
        <div className={`col-12 col-md-6 ${s.container}`}>
          <h2 className={s.desc}>
            Create your account today and get started for free!
          </h2>
          <div className={s.buttons}>
            <button
              className={`light_buttons  ${s.start_btn}`}
              onClick={() => {
                console.log("get started");
              }}
            >
              Get started
            </button>
            <button
              className={`dark_buttons ${s.btn}`}
              onClick={() => {
                console.log("Talk to sales");
              }}
            >
              Talk to sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
