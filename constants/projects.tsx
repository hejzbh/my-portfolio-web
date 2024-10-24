import { ProjectType } from "@/types";
import Link from "next/link";

export const projects: ProjectType[] = [
  {
    id: "vyre",
    name: "Cloudvyre",
    shortDescription:
      "Automated platform for seamless Azure operations and efficient cloud management.",
    thumbnail: "/images/projects/vyre/thumbnail.webp",
    technologiesIds: [1, 2, 3, 171, 9, 10, 17, 18], // @/constants/technologies.ts for details
    features: [
      "Wrote enterprise code",
      "3D charts and interactive tables for data visualization (Stats, Key Metrics, etc.)",
      "Auth: Auth0 authentication for secure user access",
      "Stripe: Shop, Pricing Plans, Subscriptions, Invoices, Payments etc.",
      "User Management: Administrative control over user's roles, blocking, permissions, profiles etc.",
      "Personalized Content: Display options for enhanced user experience",
      "AI Chat: Advisor for user interactions and support",
      "more...",
    ],
    videoSrc:
      "https://www.youtube.com/watch?v=bKUdKI_cvn4&ab_channel=HazimTulumovic",
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
            , aimed at helping their employees . NAPOMENA - Dodati slike chat
            advisora, shopa itd
          </p>
        </div>
      );
    },
  },
  {
    id: "webonify",
    name: "Webonify",
    shortDescription:
      "My unique, pre-built e-commerce system, fully tailored to your needs and ready for immediate use.",
    thumbnail: "/images/projects/webonify/thumbnail.webp",
  },
  {
    id: "my-portfolio",
    name: "My Portfolio Website",
    shortDescription:
      "Personal portfolio showcasing my projects, skills, and expertise in development.",
    thumbnail: "/images/projects/my-portfolio/thumbnail.webp",
    githubUrl: "https://github.com/hejzbh/my-portfolio-web",
    technologiesIds: [5, 10, 874],
  },
];
