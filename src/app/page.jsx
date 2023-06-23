import AboutUs from "@/components/AboutUs/AboutUs";
import GetStarted from "@/components/GetStarted/GetStarted";
import Hero from "@/components/Hero/Hero";
import Members from "@/components/Members/Members";
import Questions from "@/components/Questions/Questions";
import Results from "@/components/Results/Results";
import SocialMedia from "@/components/SocialMedia/SocialMediaIcons";
import Features from "@/components/Features/Features";
import FollowInsta from "@/components/FollowInsta/FollowInsta";
import Gallery from "@/components/Gallery/Gallery";
// import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialMedia />
      <GetStarted />
      <Results />
      <Questions />
      <Members />
      <AboutUs />
      <Features />
      <Gallery />
      <FollowInsta />
    </main>
  );
}
