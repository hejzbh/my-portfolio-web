import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

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
            Started my journey in web and software development, focusing on
            foundational technologies.
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
            Native, JavaScript, and React while collaborating both on frontend &
            backend tasks.
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
            Developed dashboards, e-commerce systems, websites, and mobile apps.
            Key projects include:
          </p>
          <ul className="list-inside text-base sm:text-lg mb-5 space-y-9">
            <li>
              <h3 className="font-[500] text-[.98rem] md:text-xl xl:text-2xl mb-2">
                MB Expert E-commerce System
              </h3>
              <p className="text-[.9rem] md:text-base xl:text-lg mb-2">
                Built a multi-features e-commerce system using Next.js, Vite.js
                and Python.
              </p>
            </li>

            <li>
              <h3 className="font-[500] text-[.98rem] md:text-xl xl:text-2xl mb-2">
                Premium Spa Mobile App
              </h3>
              <p className="text-[.9rem] md:text-base xl:text-lg mb-2">
                Developed an app to enhance project management and real-time
                communication for Pool Construction Company workers.
              </p>
            </li>
            <li>
              <h3 className="font-[500] text-[.98rem] md:text-xl xl:text-2xl mb-2">
                Ask Duck Dashboard
              </h3>
              <p className="text-[.9rem] md:text-base xl:text-lg mb-2">
                A specialized React dashboard for the film industry with
                advanced filtering and state management.
              </p>
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
            Freelance & Startups
          </h2>
          <p className="text-[.9rem] md:text-base xl:text-lg mb-4">
            Worked on projects for startups, including:
          </p>
          <ul className="list-inside text-base sm:text-lg mb-5 space-y-9">
            {/** Collab  */}
            <li>
              <h3 className="font-[500] text-[.98rem] md:text-xl xl:text-2xl mb-2">
                Collab - DRM
              </h3>
              <p className="text-[.9rem] md:text-base xl:text-lg mb-2">
                Built a Next.js web application for detecting YouTube videos to
                monitor copyrights.
              </p>
              <ul className="font-[400] list-inside ml-6 space-y-0 list-disc text-[.8rem] md:text-base">
                <li>Implemented Clerk Authentication.</li>
                <li>
                  Developed features for search, sort, and dynamic layout
                  management.
                </li>
                <li>
                  Created algorithms for detecting copyright moments in videos.
                </li>
              </ul>
            </li>
            {/** Cloudvyre */}
            <li>
              <h3 className="font-[500] text-[.98rem] md:text-xl xl:text-2xl mb-2">
                Cloudvyre - Microsoft Funded Project
              </h3>
              <p className="text-[.9rem] md:text-base xl:text-lg mb-2">
                Developed Cloudvyre, an automated cloud platform to streamline
                Azure operations.
              </p>
              <ul className="font-[400] list-inside ml-6 space-y-0 list-disc text-[.8rem] md:text-base">
                <li>
                  Integrated Auth0 for authentication and secured user access.
                </li>
                <li>
                  Built complex visualizations for key Azure metrics and
                  real-time monitoring.
                </li>
                <li>
                  Real time chat, open discussion system, BAN, Online status &
                  more...
                </li>
                <li>Developed access control, permissions, and app roles.</li>
                <li>
                  Integrated Stripe for pricing plans and online payments.
                </li>
                <li>
                  Created user management features for admin control over roles
                  and subscriptions.
                </li>
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
