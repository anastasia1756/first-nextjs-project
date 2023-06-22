import React from "react";
import s from "./results.module.scss";

const Results = () => {
  return (
    <div className={`container ${s.container}`}>
      <div className="row">
        <div className={`col-12 `}>
          <h2 className={s.title}>Our results in numbers</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3 className={s.desc}>
            99<span className={s.accent}>%</span>
          </h3>
          <p className={s.description}>Customer satisfaction</p>
        </div>
        <div className="col">
          <h3 className={s.desc}>
            32<span className={s.accent}>M</span>
          </h3>
          <p className={s.description}>Active users</p>
        </div>
        <div className="col">
          <h3 className={s.desc}>
            125<span className={s.accent}>+</span>
          </h3>
          <p className={s.description}>Team members</p>
        </div>
        <div className="col">
          <h3 className={s.desc}>
            240<span className={s.accent}>%</span>
          </h3>
          <p className={s.description}>Company growth</p>
        </div>
      </div>
    </div>
  );
};

export default Results;
