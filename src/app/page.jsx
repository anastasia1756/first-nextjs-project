import GetStarted from "@/components/GetStarted/GetStarted";
import Hero from "@/components/Hero/Hero";
import Members from "@/components/Members/Members";
import Questions from "@/components/Questions/Questions";
import Results from "@/components/Results/Results";
import SocialMedia from "@/components/SocialMedia/SocialMediaIcons";
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
    </main>
  );
}
