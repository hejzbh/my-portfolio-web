import { ProjectType } from "@/types";
import Link from "next/link";
import { TechnologyID } from "./technologies";

export const projects: ProjectType[] = [
  {
    id: "vyre",
    name: "Cloudvyre",
    featured: true,
    shortDescription:
      "SaaS: Automated platform for seamless Azure operations and efficient cloud management.",
    thumbnail: "/images/projects/vyre/thumbnail.webp",
    technologiesIds: [
      TechnologyID.JavaScript,
      TechnologyID.TypeScript,
      TechnologyID.Stripe,
      TechnologyID.React,
      TechnologyID.ViteJS,
      TechnologyID.Auth0,
      TechnologyID.Tailwind,
      TechnologyID.MORE,
    ], // @/constants/technologies.ts for details
    features: [
      "Wrote enterprise code",
      "3D charts/graphs and interactive tables for data visualization (Stats, Key Metrics, etc.)",
      "Auth: Auth0 authentication for secure user access",
      "Stripe: Shop, Pricing Plans, Subscriptions, Invoices, Payments etc.",
      "User Management: Administrative control over user's roles, blocking, permissions, profiles etc.",
      "Personalized Content: Display options for enhanced user experience",
      "AI Chat: Advisor for user interactions and support",
      "more...",
    ],
    videoSrc: "https://www.youtube.com/watch?v=NuEUvGkLA1w&feature=youtu.be",
    jsxContent: () => {
      return (
        <div>
          {" "}
          <p>
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
            , aimed at helping their employees.
          </p>
        </div>
      );
    },
  },
  {
    id: "scrapmatic",
    name: "Scrapmatic - No code web scraper",
    featured: true,
    shortDescription:
      "SaaS: Full Stack Application that automates web scraping",
    thumbnail: "/images/projects/scrapmatic/thumbnail.webp",
    technologiesIds: [
      TechnologyID.NextJS,
      TechnologyID.Python,
      TechnologyID.MongoDB,
      TechnologyID.Stripe,
      TechnologyID.TypeScript,
      TechnologyID.Auth0,
      TechnologyID.Tailwind,
    ],
    features: [
      "Workflows:  Automate tasks and processes",
      "Editor: Customizable scraping logic editor",
      "Tasks: Launch Browser, Get HTML, Extract text from element...",
      "Stripe: Subscription and credit management",
      "WebSocket: Real-time updates",
      "MongoDB for scalable data storage",
      "Python-based backend for web scraping",
      "User authentication and role-based access",
      "API integration for third-party services",
      "Advanced error handling and retries",
      "User-friendly interface for managing tasks",
    ],
    demoUrl: "https://scrapmatic.vercel.app/",
    githubUrl: "https://github.com/hejzbh/scrapmatic-saas-app",
  },
  {
    id: "my-portfolio",
    name: "My Portfolio Website",
    shortDescription:
      "Personal animated portfolio showcasing my projects, skills, and expertise in development.",
    thumbnail: "/images/projects/my-portfolio/thumbnail.webp",
    githubUrl: "https://github.com/hejzbh/my-portfolio-web",
    technologiesIds: [
      TechnologyID.NextJS,
      TechnologyID.FramerMotion,
      TechnologyID.Tailwind,
      TechnologyID.MORE,
    ],
    demoUrl: "https://hazim-tulumovic.vercel.app/",
  },
  {
    id: "webranch",
    name: "Webranch Website",
    shortDescription: "Website showcasing Webranch’s digital solutions.",
    thumbnail: "/images/projects/webranch/thumbnail.webp",
    technologiesIds: [
      TechnologyID.NextJS,
      TechnologyID.FramerMotion,
      TechnologyID.Tailwind,
    ],
    demoUrl: "https://www.webranch.team",
  },
  {
    id: "lb-profile",
    name: "LB Profile Website",
    shortDescription:
      "A website for a construction company distributing building materials across the EU.",
    thumbnail: "/images/projects/lb-profile/thumbnail.webp",
    demoUrl: "https://lb-profile.vercel.app/",
    technologiesIds: [
      TechnologyID.NextJS,
      TechnologyID.Python,
      TechnologyID.FramerMotion,
      TechnologyID.Tailwind,
    ],
  },
  {
    id: "semla",
    name: "Semla Website",
    shortDescription:
      "A Webflow website created for Semla, a company specializing in automating financial due diligence",
    demoUrl: "https://www.getsemla.com/",
    thumbnail: "/images/projects/semla/thumbnail.webp",
    technologiesIds: [TechnologyID.Webflow],
  },
  {
    id: "webonify",
    name: "Webonify",
    shortDescription:
      "My unique, pre-built e-commerce system, fully tailored to your needs and ready for immediate use.",
    thumbnail: "/images/projects/webonify/thumbnail.webp",
    technologiesIds: [
      TechnologyID.NextJS,
      TechnologyID.Python,
      TechnologyID.Stripe,
      TechnologyID.TypeScript,
      TechnologyID.Tailwind,
      TechnologyID.MORE,
    ],
  },
];
