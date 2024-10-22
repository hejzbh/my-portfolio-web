import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

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
          <h2 className="text-secondary text-2xl font-semibold mb-6">
            Learning & Development
          </h2>
          <p className="text-lg mb-4">
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
          <h2 className="text-secondary text-2xl font-semibold mb-6">
            Internship at <b>Nada.ba</b>
          </h2>
          <p className="text-lg mb-4">
            Completed a 3-month internship, gaining hands-on experience in React
            Native and enhancing JavaScript and React skills.
          </p>
          <p className="text-lg mb-4">
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
          <h2 className="text-secondary text-3xl font-semibold mb-6">
            Frontend Developer at <b>Blue Duck IT Solutions & Services</b>
          </h2>
          <p className="text-lg mb-4">
            Created dashboards, developed e-commerce systems, and built
            user-friendly websites and apps.
          </p>
          <p className="text-lg mb-4">Key projects:</p>
          <ul className="list-inside text-lg mb-5 space-y-5">
            <li>
              <h3 className="font-[500] text-2xl mb-2">
                MB Expert E-commerce System
              </h3>
              <p className="text-lg mb-2">
                Developed a user-friendly e-commerce system with a comprehensive
                management dashboard.
              </p>
              <ul className="font-[400] list-inside ml-6 list-disc text-base">
                <li>Storefront built with Next.JS, Dashboard in Vite.JS.</li>
                <li>
                  Features: Authentication, multi-currency support, streamlined
                  checkout, order tracking & more.
                </li>
                <li>
                  Product Management: Add and organize products with inventory
                  tracking.
                </li>
                <li>Order Processing: Manage and update orders.</li>
                <li>
                  Multichannel Integration: Connect with various sales channels.
                </li>
                <li>
                  Utilized analytics tools to generate sales reports, aiding in
                  data-driven decision-making.
                </li>
                <li>more...</li>
              </ul>
            </li>
            <li>
              <h3 className="font-[500] text-2xl mb-2">Ask Duck Dashboard</h3>
              <p className="text-lg mb-2">
                Specialized dashboard for the film industry, facilitating
                project management and collaboration, built in React (Vite.JS).
              </p>
              <ul className="font-[400] list-inside ml-6 list-disc text-base">
                <li>Table and chart management for data visualization.</li>
                <li>Code automation to streamline development.</li>
                <li>Reusable components for better modularity.</li>
                <li>
                  Data Organization: Efficiently manages film rights and client
                  data.
                </li>
                <li>Customizable tables for personalized project views.</li>
                <li>more...</li>
              </ul>
            </li>
            <li>
              <h3 className="font-[500] text-2xl mb-2">
                Premium Spa Mobile Application
              </h3>
              <p className="text-lg mb-2">
                Developed a mobile app designed for workers of Pool Construction
                Company to enhance project management
              </p>
              <ul className="font-[400] list-inside ml-6 list-disc text-base">
                <li>
                  Enabled task assignment and project detail sharing for site
                  managers.
                </li>
                <li>Integrated image sharing and GPS location features.</li>
                <li>
                  Implemented a comment section for daily progress updates.
                </li>
                <li>Managed permissions</li>
                <li>more...</li>
              </ul>
            </li>
          </ul>

          <div className="grid grid-cols-2 gap-5">
            <Lens>
              {" "}
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
          <h2 className="text-secondary text-2xl font-semibold mb-6">
            Freelance & Working for <b>Startups</b>
          </h2>
          <p className="text-lg mb-4">
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

          <p className="text-base mb-4">Key projects:</p>
          <ul className="list-inside text-lg mb-5 space-y-5">
            <li>
              <h3 className="font-[500] text-2xl mb-2">Collab - DRM</h3>
              <p className="text-lg mb-2">
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
              <ul className="font-[400] list-inside ml-6 list-disc text-base">
                <li>Storefront built with Next.JS, Dashboard in Vite.JS.</li>
                <li>
                  Features: Authentication, multi-currency support, streamlined
                  checkout, order tracking & more.
                </li>
                <li>
                  Product Management: Add and organize products with inventory
                  tracking.
                </li>
                <li>Order Processing: Manage and update orders.</li>
                <li>
                  Multichannel Integration: Connect with various sales channels.
                </li>
                <li>
                  Utilized analytics tools to generate sales reports, aiding in
                  data-driven decision-making.
                </li>
                <li>more...</li>
              </ul>
            </li>
            <li>
              <h3 className="font-[500] text-2xl mb-2">Ask Duck Dashboard</h3>
              <p className="text-lg mb-2">
                Specialized dashboard for the film industry, facilitating
                project management and collaboration, built in React (Vite.JS).
              </p>
              <ul className="font-[400] list-inside ml-6 list-disc text-base">
                <li>Table and chart management for data visualization.</li>
                <li>Code automation to streamline development.</li>
                <li>Reusable components for better modularity.</li>
                <li>
                  Data Organization: Efficiently manages film rights and client
                  data.
                </li>
                <li>Customizable tables for personalized project views.</li>
                <li>more...</li>
              </ul>
            </li>
            <li>
              <h3 className="font-[500] text-2xl mb-2">
                Premium Spa Mobile Application
              </h3>
              <p className="text-lg mb-2">
                Developed a mobile app designed for workers of Pool Construction
                Company to enhance project management
              </p>
              <ul className="font-[400] list-inside ml-6 list-disc text-base">
                <li>
                  Enabled task assignment and project detail sharing for site
                  managers.
                </li>
                <li>Integrated image sharing and GPS location features.</li>
                <li>
                  Implemented a comment section for daily progress updates.
                </li>
                <li>Managed permissions</li>
                <li>more...</li>
              </ul>
            </li>
          </ul>
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
