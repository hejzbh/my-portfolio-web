import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { li } from "framer-motion/client";

const Lens = dynamic(() => import("@/components/ui/animated/Lens"));

const Timeline = dynamic(() => import("@/components/ui/animated/Timeline"));

export interface JourneyProps {
  className?: string;
}

const Journey = ({ className = "" }: JourneyProps) => {
  const data = [
    /** Start */
    {
      title: "2021",
      content: (
        <div>
          <h2 className="text-secondary text-base md:text-2xl xl:text-3xl font-semibold mb-6">
            Learning & Development
          </h2>
          <p className="text-[.9rem] md:text-base xl:text-lg">
            Began my journey in software and web development, focusing on
            fundamental technologies.
          </p>
        </div>
      ),
    },
    /** Internship */
    {
      title: "Early 2022",
      content: (
        <div>
          <h2 className="text-secondary text-base md:text-2xl xl:text-3xl font-semibold mb-6">
            Internship at <b>Nada.ba</b>
          </h2>
          <p className="text-[.9rem] md:text-base xl:text-lg mb-4">
            Completed a 3-month internship, gaining hands-on experience in React
            Native and enhancing JavaScript and React skills.
          </p>
          <p className="text-[.9rem] md:text-base xl:text-lg">
            Collaborated on frontend tasks, focusing on teamwork and
            communication.
          </p>
        </div>
      ),
    },
    /** Blue Duck */
    {
      title: "2022",
      content: (
        <div>
          <h2 className="text-secondary text-base md:text-2xl xl:text-3xl font-semibold mb-6">
            Frontend Developer at <b>Blue Duck IT Solutions & Services</b>
          </h2>
          <p className="text-[.9rem] md:text-base xl:text-lg mb-4">
            Developed various dashboards, e-commerce systems, websites & mobile
            applications for client needs, focusing on user-friendly design and
            efficient performance.
          </p>
          <p className="text-sm sm:text-lg mb-4">Key projects:</p>
          <ul className="list-inside text-base sm:text-lg mb-5 space-y-9">
            <li>
              <h3 className="font-[500] text-[.98rem] md:text-xl xl:text-2xl mb-2">
                MB Expert E-commerce System
              </h3>
              <p className="text-[.9rem] md:text-base xl:text-lg mb-2">
                Developed a user-friendly e-commerce system with a comprehensive
                management dashboard.
              </p>
              <ul className="font-[400] list-inside ml-6 space-y-0 list-disc text-[.8rem] md:text-base">
                <li>
                  Built using Next.js (storefront) and Vite.js (dashboard).
                </li>
                <li>
                  Integrated multi-currency support, streamlined checkout,
                  multichannel sales integration, complex filtering etc.
                </li>
                <li>
                  Developed Management for: Products, Users, Sales & more.
                </li>
              </ul>
            </li>
            <li>
              <h3 className="font-[500] text-[.98rem] md:text-xl xl:text-2xl mb-2">
                Ask Duck Dashboard
              </h3>
              <p className="text-[.9rem] md:text-base xl:text-lg mb-2">
                Specialized dashboard for the film industry, facilitating
                project management and collaboration, built in React (Vite.JS).
              </p>
              <ul className="font-[400] list-inside ml-6 space-y-0 list-disc text-[.8rem] md:text-base">
                <li>Complex chart and table management for data display.</li>
                <li>State Management Using Redux</li>
                <li>
                  Developed advanced filtering and data organization for films,
                  film rights, companies, contacts, sales etc.
                </li>
              </ul>
            </li>
            <li>
              <h3 className="font-[500] text-[.98rem] md:text-xl xl:text-2xl mb-2">
                Premium Spa Mobile Application
              </h3>
              <p className="text-[.9rem] md:text-base xl:text-lg mb-2">
                Developed a mobile app designed for workers of Pool Construction
                Company to enhance project management.
              </p>
              <ul className="font-[400] list-inside ml-6 space-y-0 list-disc text-[.8rem] md:text-base">
                <li>
                  Enabled task assignment and project detail sharing for site
                  managers.
                </li>
                <li>
                  Real-time communication among employees (comments, chat)
                </li>
                <li>Managed mobile permissions</li>
                <li>more...</li>
              </ul>
            </li>
          </ul>

          <div className="grid grid-cols-2 gap-5">
            <Lens>
              <Image
                src={"/images/projects/ask-duck/1.webp"}
                loading="lazy"
                width={1920}
                height={250}
                alt="Ask Duck Table"
                className="w-full"
              />
            </Lens>
            <Lens>
              <Image
                src={"/images/projects/mb-expert/1.webp"}
                loading="lazy"
                width={1920}
                height={250}
                alt="MB Expert Dash"
                className="w-full"
              />
            </Lens>
          </div>
        </div>
      ),
    },
    /** Freelance */
    {
      title: "2024",
      content: (
        <div>
          <h2 className="text-secondary text-base md:text-2xl xl:text-3xl font-semibold mb-6">
            Freelance & Working for <b>Startups</b>
          </h2>
          <p className="text-[.9rem] md:text-base xl:text-lg mb-4">
            This year is a big change in my career. I worked as a freelancer on
            projects for startups that support large companies and also took on
            clients from UpWork{" "}
            <Link
              href={"https://www.webranch.team"}
              className="text-primary underline"
            >
              (My Freelance Agency)
            </Link>
          </p>

          <p className="text-sm sm:text-lg mb-4">Key projects:</p>
          <ul className="list-inside text-base sm:text-lg mb-5 space-y-9">
            {/** Collab  */}
            <li>
              <h3 className="font-[500] text-[.98rem] md:text-xl xl:text-2xl mb-2">
                Collab - DRM
              </h3>
              <p className="text-[.9rem] md:text-base xl:text-lg mb-2">
                Startup idea led by Senior Software Engineer{" "}
                <Link
                  title="LinkedIn Profile"
                  href={"https://www.linkedin.com/in/faik-catibusic/"}
                  className="text-primary underline"
                >
                  Faik Catibusic
                </Link>{" "}
                for the company{" "}
                <Link
                  title="LinkedIn Profile"
                  href={"https://www.linkedin.com/company/collab/"}
                  className="text-primary underline"
                >
                  Collab
                </Link>
                .
              </p>

              <p className="text-[.9rem] md:text-base xl:text-lg mb-4">
                The project involves a software that automatically detects
                YouTube videos using your uploaded clip, helping you monitor and
                protect your copyrights.
              </p>

              <ul className="font-[400] list-inside ml-6 space-y-0 list-disc text-[.8rem] md:text-base">
                <li>
                  Built a Next.js web application with server components,
                  ensuring seamless communication with the backend.
                </li>
                <li>Clerk Authentication</li>
                <li>
                  Developed key features like search, sort, and dynamic layout
                  management to enhance user experience.
                </li>
                <li>
                  Implemented algorithms for detecting copyright moments in
                  YouTube videos, contributing to precise content monitoring.
                </li>
              </ul>
            </li>

            {/** Cloudvyre */}
            <li>
              <h3 className="font-[500] text-[.98rem] md:text-xl xl:text-2xl mb-2">
                Cloudvyre - Microsoft Funded Project
              </h3>
              <p className="text-[.9rem] md:text-base xl:text-lg mb-2">
                Startup idea led by Cloud Specialist{" "}
                <Link
                  title="LinkedIn Profile"
                  href={"https://www.linkedin.com/in/vedranh/"}
                  className="text-primary underline"
                >
                  Vedran Hromalic
                </Link>{" "}
                for a company partnered with{" "}
                <Link
                  title="LinkedIn Profile"
                  href={"https://www.linkedin.com/company/microsoft/"}
                  className="text-primary underline"
                >
                  Microsoft
                </Link>
                , aimed at helping their employees .
              </p>

              <p className="text-[.9rem] md:text-base xl:text-lg mb-4">
                Cloudvyre is an automated cloud-based platform that simplifies
                Azure operations, streamlines deployments, and enhances
                monitoring for efficient and secure cloud management.
              </p>

              <ul className="font-[400] list-inside ml-6 space-y-0 list-disc text-[.8rem] md:text-base">
                <li>
                  Integrated Auth0 for authentication, ensuring secure user
                  access.
                </li>
                <li>
                  Developed complex visualizations for key Azure metrics,
                  scores, and real-time data monitoring (Charts, Tables,
                  Visuals).
                </li>
                <li>Developed access control, permissions, app roles & more</li>
                <li>
                  Built an integrated shop with Stripe for pricing plans and
                  online payments.
                </li>
                <li>
                  Implemented user management features, enabling admin control
                  over user roles, blocking, subscriptions, invoices etc.
                </li>
                <li>More...</li>
              </ul>
            </li>
          </ul>

          <Lens>
            <Image
              src={"/images/projects/vyre/1.webp"}
              loading="lazy"
              width={1920}
              height={250}
              alt="Vyre"
              className="w-full"
            />
          </Lens>
        </div>
      ),
    },
  ];

  return (
    <div className={`${className}`}>
      <Timeline data={data} />
    </div>
  );
};

export default Journey;
