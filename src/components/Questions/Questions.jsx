import React from "react";
import s from "./questions.module.scss";

const Questions = () => {
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
          <div className={`mb-4 ${s.contentBx}`}>
            <h3 className={s.label}>
              What is Webflow and why is it the best website builder?
            </h3>
            <h4 className={s.content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit id
              venenatis pretium risus euismod dictum egestas orci netus feugiat
              ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci
              in. Id sed montes.
            </h4>
          </div>
          <div className={`mb-4 ${s.contentBx}`}>
            <h3 className={s.label}>When did Webflow was founded?</h3>
          </div>
          <div className={`mb-4 ${s.contentBx}`}>
            <h3 className={s.label}>How do you clone a Webflow Template?</h3>
          </div>
          <div className={`mb-4 ${s.contentBx}`}>
            <h3 className={s.label}>
              Why is BRIX Templates the best Webflow agency?
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
