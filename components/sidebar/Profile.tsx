import React from "react";
import Image from "next/image";

type ProfileProps = {
  className?: string;
};

const Profile = ({ className = "" }: ProfileProps) => {
  return (
    <div
      className={`flex flex-col justify-center items-center space-y-3 ${className}`}
    >
      {/*  Photo */}
      <div className="relative">
        <Image
          src="/images/my-photo.jfif"
          width={150}
          height={150}
          alt="My Photo"
          loading="lazy"
          className="rounded-full drop-shadow-sm"
        />
        <span className="p-3 block rounded-full bg-green-400 absolute bottom-3 right-3"></span>
      </div>
      {/** Personal Info */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-secondary">
          Hazim Tulumovic
        </h2>
        <p className="text-sm text-secondary">Software Developer</p>
      </div>
      {/** Social Links */}
    </div>
  );
};

export default Profile;
