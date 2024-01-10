"use client";
import React, { useState, useEffect } from "react";
import GridContainer from "../grid/GridContainer";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  const [dimensions, setDimensions] = useState({
    width: 20,
    height: 20,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth > 440 ? 20 : 13,
        height: window.innerWidth > 440 ? 20 : 13,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className=" flex items-center justify-between p-1 bg-primary h-24">
      <GridContainer>
        <div className="flex items-center justify-between">
          <p className="text-tiny">Feito por RochaDev©</p>
          <Link
            href="https://github.com/Anderson1605R"
            target="blank"
            className="flex gap-1 items-center"
          >
            <Image
              src="/githubLogo.svg"
              alt="github"
              width={dimensions.width}
              height={dimensions.height}
            />
            <p className="text-tiny">Github</p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/anderson-rocha-silva/"
            target="blank"
            className="flex gap-1 items-center"
          >
            <Image
              src="/linkedinLogo.svg"
              alt="linkedin"
              width={dimensions.width}
              height={dimensions.height}
            />
            <p className="text-tiny">Linkedin</p>
          </Link>
          <Link
            href="https://www.instagram.com/anderson_s_rocha/"
            target="blank"
            className="flex gap-1 items-center"
          >
            <Image
              src="/instaLogo.svg"
              alt="instagram"
              width={dimensions.width}
              height={dimensions.height}
            />
            <p className="text-tiny">Instagram</p>
          </Link>
        </div>
      </GridContainer>
    </footer>
  );
}

export default Footer;
