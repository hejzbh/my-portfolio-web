import React from "react";
import dynamic from "next/dynamic";

const Profile = dynamic(() => import("@/components/sidebar/Profile"));

type SidebarProps = {
  className?: string;
};

const Sidebar = ({ className = "" }: SidebarProps) => {
  return (
    <aside
      className={`bg-sidebarBG sticky top-0 left-0 h-[100dvh] p-10 ${className}`}
    >
      <Profile />
    </aside>
  );
};

export default Sidebar;
