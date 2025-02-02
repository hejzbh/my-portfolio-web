import React from "react";
import dynamic from "next/dynamic";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const SectionHeading = dynamic(() => import("@/components/ui/SectionHeading"));

type Props = {
  className?: string;
};

const Contact = ({ className = "" }: Props) => {
  return (
    <section
      id="contact"
      className={`p-4 !py-14 md:p-[5rem] xl:p-[10rem] ${className}`}
    >
      <SectionHeading
        title="Contact Details"
        description="Interested in hiring me for your project or just want to say hi? Follow links below."
      />

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/** Phone */}
        <li className="flex items-center space-x-4">
          <IoCallOutline className="text-primary text-[25px] md:text-[47px]" />
          <div>
            <h3 className="text-secondary font-semibold text-base md:text-2xl">
              Phone
            </h3>
            <Link
              href={"telto:+387603121270"}
              title="Call Me"
              className="text-sm md:text-lg text-secondary hover:text-primary transition"
            >
              +387 60 312 1270
            </Link>
          </div>
        </li>
        {/** E-Mail */}
        <li className="flex items-center space-x-4">
          <IoMailOutline className="text-primary text-[25px] md:text-[47px]" />
          <div>
            <h3 className="text-secondary font-semibold text-base md:text-2xl ">
              E-Mail
            </h3>
            <Link
              href={"mailto:hazimtulumovic.careers@gmail.com"}
              title="hazimtulumovic.careers@gmail.com"
              className="text-sm md:text-lg text-secondary hover:text-primary transition"
            >
              hazimtulumovic.careers@gmail.com
            </Link>
            <Link
              href={"mailto: hazim@vyre.no"}
              title=" hazim@vyre.no"
              className="text-sm md:text-lg text-secondary hover:text-primary transition block"
            >
              hazim@vyre.no
            </Link>
          </div>
        </li>
        {/** Linkedin */}
        <li className="flex items-center space-x-4">
          <FaLinkedin className="text-primary text-[25px] md:text-[47px]" />

          <div>
            <h3 className="text-secondary font-semibold text-base  md:text-2xl">
              LinkedIn
            </h3>
            <Link
              href={
                "https://www.linkedin.com/in/hazim-tulumovi%C4%87-02a28623b/"
              }
              title="View LinkedIn Profile"
              className="text-sm md:text-lg text-secondary hover:text-primary transition"
            >
              Click here
            </Link>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
