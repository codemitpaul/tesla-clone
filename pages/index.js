import Head from "next/head";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { sidebarState } from "../atoms/sidebarAtom";
import Header from "../components/Header";
import Section from "../components/Section";
import { sectionContent } from "../constants/content";

export default function Home() {
  const [showSidebar, setShowSidebar] = useRecoilState(sidebarState);

  return (
    <div className={`h-screen w-full`}>
      <Header />
      <div
        className={`${
          showSidebar && "opacity-50"
        }  snap-y snap-mandatory overflow-y-scroll h-full w-full`}
      >
        {sectionContent.map((content, index) => (
          <Section key={index} {...content} />
        ))}
      </div>
    </div>
  );
}
