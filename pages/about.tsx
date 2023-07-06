import { Inter } from "next/font/google";
import Page from "@/components/Page";
import HeroBody from "@/components/HeroBody";

const inter = Inter({ subsets: ["latin"] });

const OPEN_VIC_DESC =
  "OpenVic aims to faithfully recreate Victoria 2: Heart of Darkness with a focus on enhancing performance, stability, and modability. We will support loading Victoria 2 mods with zero modifications in a classic / compatibility mode, which will be availible if you own a legitimate copy of Victoria 2. OpenVic's default mode will be completely free, with our own graphics, content, data, and soundtrack, keeping the overall feel, playstyle, and balance as Victoria 2. OpenVic will have its own modding api, allowing for extremely detailed and deep mods, while being easier to mod and easier for users to find and install mods. If you are interested in helping, see the contribute page, and if you want to stay up to date between dev diaries, check out the GitHub and join the Discord, we can't wait to get to know you.";

export default function Home() {
  return (
    <Page>
      <HeroBody contentBackground="bg-[#471e1e]">
        <div className="flex flex-col font-serif w-full items-center py-8 px-2">
          <h1 className="text-7xl text-gray-200  font-bold px-16">Our Goal</h1>
          <p className="text-4xl text-gray-200 text-center font-semibold px-16 py-8">
            {OPEN_VIC_DESC}
          </p>
        </div>
      </HeroBody>
    </Page>
  );
}
