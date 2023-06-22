import Image from "next/image";
import Link from "next/link";
import React from "react";
import s from "./members.module.scss";

const Members = () => {
  return (
    <div className={`container ${s.container}`}>
      <div className="row justify-content-md-center">
        <div className={`col-12 `}>
          <h2 className={s.title}>Meet our team members</h2>
          <h4 className={s.desc}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat
            gravida malesuada quam commodo id integer nam.
          </h4>
        </div>
        <div className={`row ${s.card_list}`}>
          <div className={`col-12 col-md-4 ${s.first_row}`}>
            <div className={s.photo_items}>
              <Image
                className={s.picture}
                src="/placeholder-small.png"
                width={160}
                height={160}
                alt="placeholder-small"
              />

              <h3 className={s.list_name}>John Carter</h3>
              <p className={s.job_desc}>CEO & Co-Founder</p>
              <h4 className={s.description}>
                Lorem ipsum dolor sit amet consecte adipiscing elit amet
                hendrerit pretium nulla sed enim iaculis mi.{" "}
              </h4>
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
          </div>
          <div className={`col-12 col-md-4 `}>
            <div className={s.photo_items}>
              <Image
                className={s.picture}
                src="/placeholder-small.png"
                width={160}
                height={160}
                alt="placeholder-small"
              />

              <h3 className={s.list_name}>Sophie Moore</h3>
              <p className={s.job_desc}>CTO & Co-Founder</p>
              <h4 className={s.description}>
                Lorem ipsum dolor sit amet consecte adipiscing elit amet
                hendrerit pretium nulla sed enim iaculis mi.{" "}
              </h4>
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
          </div>
          <div className={`col-12 col-md-4 `}>
            <div className={s.photo_items}>
              <Image
                className={s.picture}
                src="/placeholder-small.png"
                width={160}
                height={160}
                alt="placeholder-small"
              />

              <h3 className={s.list_name}>Matt Cannon</h3>
              <p className={s.job_desc}>VP of Marketing</p>
              <h4 className={s.description}>
                Lorem ipsum dolor sit amet consecte adipiscing elit amet
                hendrerit pretium nulla sed enim iaculis mi.{" "}
              </h4>
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
          </div>
        </div>
        <div className={`row ${s.card_list}`}>
          <div className={`col-12 col-md-4 `}>
            <div className={s.photo_items}>
              <Image
                className={s.picture}
                src="/placeholder-small.png"
                width={160}
                height={160}
                alt="placeholder-small"
              />

              <h3 className={s.list_name}>Andy Smith</h3>
              <p className={s.job_desc}>VP of Design</p>
              <h4 className={s.description}>
                Lorem ipsum dolor sit amet consecte adipiscing elit amet
                hendrerit pretium nulla sed enim iaculis mi.{" "}
              </h4>
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
          </div>
          <div className={`col-12 col-md-4 `}>
            <div className={s.photo_items}>
              <Image
                className={s.picture}
                src="/placeholder-small.png"
                width={160}
                height={160}
                alt="placeholder-small"
              />

              <h3 className={s.list_name}>Lily Woods</h3>
              <p className={s.job_desc}>VP of Product</p>
              <h4 className={s.description}>
                Lorem ipsum dolor sit amet consecte adipiscing elit amet
                hendrerit pretium nulla sed enim iaculis mi.{" "}
              </h4>
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
          </div>
          <div className={`col-12 col-md-4 `}>
            <div className={s.photo_items}>
              <Image
                className={s.picture}
                src="/placeholder-small.png"
                width={160}
                height={160}
                alt="placeholder-small"
              />

              <h3 className={s.list_name}>Patrick Meyer</h3>
              <p className={s.job_desc}>VP of Sales</p>
              <h4 className={s.description}>
                Lorem ipsum dolor sit amet consecte adipiscing elit amet
                hendrerit pretium nulla sed enim iaculis mi.{" "}
              </h4>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
