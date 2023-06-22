import GetStarted from "@/components/getStarted/GetStarted";
import Hero from "@/components/hero/Hero";
import Members from "@/components/members/Members";
import Questions from "@/components/questions/Questions";
import Results from "@/components/results/Results";
import SocialMedia from "@/components/socialMedia/SocialMediaIcons";
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
