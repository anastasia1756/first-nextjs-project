import Image from "next/image";
import React from "react";
import s from "./socialmediaicons.module.scss";

const SocialMedia = () => {
  return (
    <div className={`container`}>
      <div className="row">
        <div className="col-6 col-md-12">
          <div className={s.images}>
            <Image src="/google.png" width={112} height={36} alt="google" />
            <Image src="/facebook.png" width={136} height={26} alt="facebook" />
            <Image src="/youtube.png" width={126} height={28} alt="youtube" />
            <Image
              src="/pinterest.png"
              width={140}
              height={34}
              alt="pinterest"
            />
            <Image src="/twitch.png" width={108} height={36} alt="twitch" />{" "}
            <Image src="/webflow.png" width={134} height={34} alt="webflow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
