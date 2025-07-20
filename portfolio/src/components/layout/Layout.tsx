import { Topbar } from "@/components/layout/top-bar/TopBar";
import type { ReactNode } from "react";

export const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Topbar />
      <main className="bg-main">
        {children}
      </main>
    </>
  );
};
