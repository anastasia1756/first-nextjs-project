import Image from "next/image";
import Link from "next/link";
import React from "react";
import s from "./footer.module.scss";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Pricing",
    url: "/pricing",
  },
  {
    id: 4,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

const Footer = () => {
  return (
    <div className={`container ${s.container}`}>
      <div className={`row ${s.footer_container}`}>
        <div className={`col-3 `}>
          <Link href="/" className={s.logo}>
            <Image src="/logo.png" width={261} height={34} alt="logo" />
          </Link>
        </div>
        <div className={`col-6 `}>
          <div className={s.links}>
            {links.map((link) => (
              <Link key={link.id} href={link.url} className={s.link}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div className={`col-3`}>
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
      <div className={`col-12 ${s.rights}`}>
        Copyright © 2023 BRIX Templates | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
