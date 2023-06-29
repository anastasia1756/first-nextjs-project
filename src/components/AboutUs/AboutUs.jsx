import Image from "next/image";
import React from "react";
import s from "./aboutus.module.scss";

const AboutUs = () => {
  return (
    <div className={`container ${s.container}`}>
      <div className="row justify-content-md-center">
        <div className={`col-12 `}>
          <h2 className={s.title}>What our clients say</h2>
          <h4 className={s.desc}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus libero accumsan.
          </h4>
        </div>
      </div>
      <div className={`row justify-content-md-center ${s.card_list}`}>
        <div className={`col ${s.card_item}`}>
          <Image
            className={s.picture}
            src="/placeholder-small.png"
            width={80}
            height={80}
            alt="placeholder-small"
          />

          <h3 className={s.review}>“An amazing service”</h3>
          <h4 className={s.description}>
            Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a
            nunc mauris scelerisque sed egestas.
          </h4>
          <h3 className={s.list_name}>John Carter</h3>
          <h4 className={s.job_desc}>Designer at BRIX Templates</h4>
        </div>
        <div className={`col ${s.card_item}`}>
          <Image
            className={s.picture}
            src="/placeholder-small.png"
            width={80}
            height={80}
            alt="placeholder-small"
          />

          <h3 className={s.review}>“One of a kind service”</h3>
          <h4 className={s.description}>
            Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra
            diam sit amet nisl suscipit adipis.
          </h4>
          <h3 className={s.list_name}>Sophie Moore</h3>
          <h4 className={s.job_desc}>Head of Design at BRIX Templates</h4>
        </div>
        <div className={`col ${s.card_item}`}>
          <Image
            className={s.picture}
            src="/placeholder-small.png"
            width={80}
            height={80}
            alt="placeholder-small"
          />

          <h3 className={s.review}>“The best service”</h3>
          <h4 className={s.description}>
            Convallis posuere morbi leo urna molestie at elementum eu facilisis
            sapien pellentesque habitant.
          </h4>
          <h3 className={s.list_name}>Andy Smith</h3>
          <h4 className={s.job_desc}>Developer at BRIX Templates</h4>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
