import { Topbar } from "@/components/layout/top-bar/TopBar";
import type { ReactNode } from "react";

export const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Topbar />
      <main className="bg-main px-5 mt-20 md:px-10 lg:px-20 md:mt-20 lg:mt-20">
        {children}
      </main>
    </>
  );
};
