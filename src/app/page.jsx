import Hero from "@/components/hero/Hero";
import SocialMedia from "@/components/socialMedia/SocialMediaIcons";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialMedia />
      <div>Home</div>
    </main>
  );
}
