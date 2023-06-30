"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import s from "./navbar.module.scss";
import jQuery from "jquery";

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
  useEffect(() => {}, []);

  // componentDidMount = () => {
  //   var self = jQuery("#mainMenu");

  //   self
  //     .smartmenus({
  //       mainMenuSubOffsetX: 0,
  //       mainMenuSubOffsetY: 0,
  //       subMenusSubOffsetX: 0,
  //       subMenusSubOffsetY: -43,
  //       subMenusMinWidth: "12.5em",
  //       subIndicatorsText: "",
  //     })
  //     .find("li.active")
  //     .children("a")
  //     .addClass("active");

  //   //$("#mainMenu").after('');

  //   // responsive menu
  //   $(".menu-trigger").on("click", function (e) {
  //     e.preventDefault();
  //     if ($(this).hasClass("active")) {
  //       // when menu close
  //       $(this).removeClass("active");
  //       $(".menuContainer").slideUp("slow");
  //     } else {
  //       // when menu open
  //       $(this).addClass("active");
  //       $(".menuContainer").slideDown("slow");
  //     }
  //   });

  //   // jQuery when resize window
  //   $(window).on("resize", function () {
  //     if ($(window).width() > 980 && !$(".menuTrigger").hasClass("active")) {
  //       self.attr("style", "");
  //     }
  //   });
  // };

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
        <div className={`col-6 col-md-7 menu-trigger ${s.menuTrigger}`}>
          <div className={s.navInner} />
          <nav className={`menuContainer ${s.menuContainer}`}>
            <ul id="mainMenu" className="sm">
              {links.map((link) => (
                <li key={link.id}>
                  <Link href={link.url} className={s.link}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
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
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
