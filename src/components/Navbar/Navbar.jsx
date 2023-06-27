"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import s from "./navbar.module.scss";

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
    title: "Resources",
    url: "/resources",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className={`container ${s.container}`}>
      <div className="row">
        <div className={`col-6 col-md-5 ${s.logo}`}>
          <Link href="/">
            <Image
              className={s.logo_small}
              src="/logo-venice.png"
              width={290}
              height={61}
              alt="logo-venice"
            />
          </Link>
        </div>
        <div className={`col-6 col-md-7 ${s.nav_container}`}>
          <div className={s.links}>
            {links.map((link) => (
              <Link key={link.id} href={link.url} className={s.link}>
                {link.title}
              </Link>
            ))}
            <Link
              href="/"
              className={`light_buttons ${s.login_btn}`}
              onClick={() => {
                console.log("loggedIn");
              }}
            >
              Login
            </Link>
            <Link
              href="/"
              className={`dark_buttons ${s.start_btn}`}
              onClick={() => {
                console.log("get started");
              }}
            >
              Get started
            </Link>
          </div>
          <div className={s.burger_button} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
