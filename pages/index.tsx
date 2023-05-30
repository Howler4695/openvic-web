import Image from "next/image";
import { Inter } from "next/font/google";
import Page from "@/components/Page";
import HeroBody from "@/components/HeroBody";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Page>
      <HeroBody />
    </Page>
  );
}
