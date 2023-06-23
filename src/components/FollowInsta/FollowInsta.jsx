import React from "react";
import Image from "next/image";
import Link from "next/link";
import s from "./followinsta.module.scss";

const FollowInsta = () => {
  return (
    <div className={`container ${s.container}`}>
      <div className="row justify-content-md-center">
        <div className={`col-12 `}>
          <h2 className={s.title}>Follow us on Instagram</h2>
          <h4 className={s.desc}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus libero accumsan.
          </h4>
        </div>
      </div>
      <div className={`row justify-content-md-center`}>
        <div className={`col-6 col-md-3 ${s.photo_container}`}>
          <Image
            className={s.picture}
            src="/placeholder.png"
            width={284}
            height={284}
            alt="placeholder"
          />
        </div>
        <div className={`col-6 col-md-3 ${s.photo_container}`}>
          <Image
            className={s.picture}
            src="/placeholder.png"
            width={284}
            height={284}
            alt="placeholder"
          />
        </div>
        <div className={`col-6 col-md-3 ${s.photo_container}`}>
          <Image
            className={s.picture}
            src="/placeholder.png"
            width={284}
            height={284}
            alt="placeholder"
          />
        </div>
        <div className={`col-6 col-md-3 ${s.photo_container}`}>
          <Image
            className={s.picture}
            src="/placeholder.png"
            width={284}
            height={284}
            alt="placeholder"
          />
        </div>
      </div>
      <div className={`row justify-content-md-center`}>
        <div className={`col-6 col-md-3 ${s.photo_container}`}>
          <Image
            className={s.picture}
            src="/placeholder.png"
            width={284}
            height={284}
            alt="placeholder"
          />
        </div>
        <div className={`col-6 col-md-3 ${s.photo_container}`}>
          <Image
            className={s.picture}
            src="/placeholder.png"
            width={284}
            height={284}
            alt="placeholder"
          />
        </div>
        <div className={`col-6 col-md-3 ${s.photo_container}`}>
          <Image
            className={s.picture}
            src="/placeholder.png"
            width={284}
            height={284}
            alt="placeholder"
          />
        </div>
        <div className={`col-6 col-md-3 ${s.photo_container}`}>
          <Image
            className={s.picture}
            src="/placeholder.png"
            width={284}
            height={284}
            alt="placeholder"
          />
        </div>
      </div>
      <div className={`col-12`}>
        <Link className={`dark_buttons ${s.btn}`} href="#">
          Follow us
        </Link>
      </div>
    </div>
  );
};

export default FollowInsta;
