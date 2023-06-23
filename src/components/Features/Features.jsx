import React from "react";
import Image from "next/image";
import Link from "next/link";
import s from "./features.module.scss";

const Features = () => {
  return (
    <div className={`container ${s.container}`}>
      <div className="row justify-content-md-center">
        <div className={`col-12 `}>
          <h2 className={s.title}>Browse our set of features</h2>
          <h4 className={s.desc}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus libero accumsan.
          </h4>
        </div>
      </div>
      <div className={`row justify-content-md-center ${s.card_list}`}>
        <div className={`col-12 col-md-4 mx-3 ${s.card_item}`}>
          <Image
            className={s.picture}
            src="/placeholder-small.png"
            width={172}
            height={172}
            alt="placeholder-small"
          />

          <h2 className={s.feature}>Mobile app</h2>
          <h4 className={s.description}>
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar
            dolor elementum tempus hac.
          </h4>
          <Link className={s.btn} href="#">
            Learn more
          </Link>
        </div>
        <div className={`col-12 col-md-4 mx-3 ${s.card_item}`}>
          <Image
            className={s.picture}
            src="/placeholder-small.png"
            width={172}
            height={172}
            alt="placeholder-small"
          />

          <h2 className={s.feature}>Desktop app</h2>
          <h4 className={s.description}>
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar
            dolor elementum tempus hac.
          </h4>
          <Link className={s.btn} href="#">
            Learn more
          </Link>
        </div>
        <div className={`col-12 col-md-4 mx-3 ${s.card_item}`}>
          <Image
            className={s.picture}
            src="/placeholder-small.png"
            width={172}
            height={172}
            alt="placeholder-small"
          />

          <h2 className={s.feature}>Multiple users</h2>
          <h4 className={s.description}>
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar
            dolor elementum tempus hac.
          </h4>
          <Link className={s.btn} href="#">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;
