import React from "react";
import Image from "next/image";
import s from "./gallery.module.scss";

const Gallery = () => {
  return (
    <div className={`container ${s.container}`}>
      <div className="row ">
        <div className={`col-3 ${s.features}`}>
          <Image
            className={s.picture}
            src="/placeholder-small.png"
            width={50}
            height={50}
            alt="placeholder-small"
          />
          <h3 className={s.title}>Feature one</h3>
          <h4 className={s.desc}>
            Web design partially overlaps web engineering in the broader scope
            of web development
          </h4>
          <Image
            className={s.picture}
            src="/placeholder-small.png"
            width={50}
            height={50}
            alt="placeholder-small"
          />
          <h3 className={s.title}>Feature two</h3>
          <h4 className={s.desc}>
            Paper prototypes should be considered when the following is true
          </h4>
        </div>
        <div className={`col-9 ${s.placeholder}`}>
          <Image
            src="/placeholder-big.png"
            width={750}
            height={500}
            alt="placeholder-big"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
