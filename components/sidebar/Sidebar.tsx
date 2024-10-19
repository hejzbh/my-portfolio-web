import React from "react";
import dynamic from "next/dynamic";

const Profile = dynamic(() => import("@/components/sidebar/Profile"));
const NavigationLinks = dynamic(
  () => import("@/components/sidebar/NavigationLinks")
);
const Divider = dynamic(() => import("@/components/ui/Divider"));
const HireMe = dynamic(() => import("@/components/ui/HireMe"));

type SidebarProps = {
  className?: string;
};

const Sidebar = ({ className = "" }: SidebarProps) => {
  return (
    <aside
      className={`bg-sidebarBG sticky top-0 left-0 h-[100dvh] p-10 flex flex-col justify-between ${className}`}
    >
      <main>
        <Profile />
        <Divider className="my-10" />
        <NavigationLinks />
      </main>

      <HireMe />
    </aside>
  );
};

export default Sidebar;
