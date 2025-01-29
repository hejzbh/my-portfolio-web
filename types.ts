export type NavigationLinkType = {
  name: string;
  Icon: any;
  href: string;
};

export type ProjectType = {
  id: string;
  name: string;
  shortDescription: string;
  technologiesIds?: number[];
  githubUrl?: string;
  demoUrl?: string;
  thumbnail: string;
  jsxContent?: () => any;
  featured?: boolean;
  videoSrc?: string;
  features?: string[];
};
