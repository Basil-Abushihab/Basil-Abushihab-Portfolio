import { SvgDefs } from "@/components/layout/SVGDefs";
import { Topbar } from "@/components/layout/top-bar/TopBar";
import { TimelineNodesProvider } from "@/context/TimelineNodesContext";
import { Contact } from "@/main-page/sections/contact/Contact";
import type { ReactNode } from "react";

export const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <SvgDefs />
      <TimelineNodesProvider>
      <Topbar />
        <main className="bg-main px-5 mt-5 md:px-10 lg:px-20 h-[150%]">
          {children}
        </main>
        <Contact/>
      </TimelineNodesProvider>
    </>
  );
};
