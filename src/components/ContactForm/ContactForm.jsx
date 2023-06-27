import Image from "next/image";
import Link from "next/link";
import React from "react";
import s from "./contactform.module.scss";

const ContactForm = () => {
  return (
    <div className={`container ${s.container}`}>
      <div className="row justify-content-md-center">
        <div className={`col-12 `}>
          <h2 className={s.title}>Get in touch today</h2>
          <h4 className={s.desc}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
            adipiscing tincidunt interdum tellus du.
          </h4>
        </div>
      </div>
      <div className={`row justify-content-md-center`}>
        <div className={`col-12 col-md-6`}>
          <Image
            className={s.placeholder}
            src="/placeholder.png"
            width={544}
            height={544}
            alt="placeholder"
          />
        </div>
        <div className={`col-12 col-md-6`}>
          <form className={s.form}>
            <div className={s.input_container}>
              <label className={s.label} for="name">
                Name
              </label>
              <input
                className={s.input}
                id="name"
                type="text"
                placeholder="John Carter"
              />
            </div>
            <div className={s.input_container}>
              <label className={s.label} for="email">
                Email
              </label>
              <input
                className={s.input}
                id="email"
                type="email"
                placeholder="example@email.com"
              />
            </div>
            <div className={s.input_container}>
              <label className={s.label} for="phone">
                Phone
              </label>
              <input
                className={s.input}
                id="phone"
                type="tel"
                placeholder="(123) 456 - 789"
              />
            </div>
            <div className={s.input_container}>
              <label className={s.label} for="company">
                Company
              </label>
              <input
                className={s.input}
                id="company"
                type="text"
                placeholder="Facebook"
              />
            </div>

            <div className="full-width">
              <label className={s.label} for="message">
                Leave us message
              </label>
              <textarea
                id="message"
                placeholder="Please type your message here..."
              ></textarea>
            </div>
            <div className={s.buttons_wrapper}>
              <Link className={`dark_buttons ${s.btn}`} href="#">
                Send message
              </Link>
              <ul className={s.social_list}>
                <li>
                  <Link
                    href="https://www.facebook.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      src="/facebook.svg"
                      width={36}
                      height={36}
                      alt="facebook"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      src="/twitter.svg"
                      width={36}
                      height={36}
                      alt="twitter"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      src="/instagram.svg"
                      width={36}
                      height={36}
                      alt="instagram"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      src="/linkedin.svg"
                      width={36}
                      height={36}
                      alt="linkedin"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
