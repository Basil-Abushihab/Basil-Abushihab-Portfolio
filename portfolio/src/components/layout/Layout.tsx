import { SvgDefs } from "@/components/layout/SVGDefs";
import { Topbar } from "@/components/layout/top-bar/TopBar";
import type { ReactNode } from "react";

export const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <SvgDefs />
      <Topbar />
      <main className="bg-main px-5 mt-5 md:px-10 lg:px-20">
        {children}
      </main>
    </>
  );
};
