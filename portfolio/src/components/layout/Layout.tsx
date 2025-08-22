import { SvgDefs } from "@/components/layout/SVGDefs";
import { Topbar } from "@/components/layout/top-bar/TopBar";
import { TimelineNodesProvider } from "@/context/timelineNodesContext";
import type { ReactNode } from "react";

export const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <SvgDefs />
      <Topbar />
      <TimelineNodesProvider>
        <main className="bg-main px-5 mt-5 md:px-10 lg:px-20 md:mt-15 lg:mt-20">
          {children}
        </main>
      </TimelineNodesProvider>
    </>
  );
};
