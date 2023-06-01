import Image from "next/image";
import { Inter } from "next/font/google";
import Page from "@/components/Page";
import HeroBody from "@/components/HeroBody";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const JOIN_THE_TEAM =
  "Join the team! If you have any experience in C++, art, networking, Godot, or design, we'd love to have you! Fill out the form";
const TEST_IT_OUT =
  "Test it out! If you poke around at what we've got so far, report any bugs in the Discord or open an issue on GitHub";
const EVENTS_AND_DECISIONS =
  "Write events and decisions. Love your LARP? Not enough flavour for your nation? Over on the Discord you can submit your own events and decisions";
const TRANSLATE =
  "Översätt (that's Swedish for translate)! We aren't to a point where we need translators yet, but eventually we'll need your help";

export default function Home() {
  return (
    <Page>
      <HeroBody>
        <div className="flex flex-col font-serif w-full  items-center">
          <h2 className=" text-5xl py-8 px-2 text-gray-800 font-bold">
            What Can You Do To Help?
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="https://forms.gle/VdFgD8W5pkDhGWQV7"
              className="bg-gray-700 text-gray-200 hover:bg-[#471e1e] rounded-xl p-12 m-4"
            >
              <p className="text-lg px-20 font-bold justify-content text-center">
                {JOIN_THE_TEAM}
              </p>
            </Link>
            <Link
              href="https://www.github.com/OpenVicProject/OpenVic"
              className="bg-gray-700 text-gray-200 hover:bg-[#471e1e] rounded-xl p-12 m-4"
            >
              <p className="text-lg px-20 font-bold justify-content text-center">
                {TEST_IT_OUT}
              </p>
            </Link>
            <Link
              href="https://discord.com/invite/vM4E3BFkqH"
              className="bg-gray-700 text-gray-200 hover:bg-[#471e1e] rounded-xl p-12 m-4"
            >
              <p className="text-lg px-20 font-bold justify-content text-center">
                {EVENTS_AND_DECISIONS}
              </p>
            </Link>
            <Link
              href="https://forms.gle/VdFgD8W5pkDhGWQV7"
              className="bg-gray-700 text-gray-200 hover:bg-[#471e1e] rounded-xl p-12 m-4"
            >
              <p className="text-lg px-20 font-bold justify-content text-center">
                {TRANSLATE}
              </p>
            </Link>
          </div>
          <h4 className="text-2xl py-12 px-4 text-gray-800 font-bold font-serif">
            If you&apos;ve got any questions, feel free to ask on{" "}
            <Link
              href="https://discord.com/invite/vM4E3BFkqH"
              className="text-blue-800"
            >
              the Discord
            </Link>
            , we don&apos;t bite :)
          </h4>
        </div>
      </HeroBody>
    </Page>
  );
}
