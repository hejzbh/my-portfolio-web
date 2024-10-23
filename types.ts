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
  thumbnail: string;
  features?: string[];
};
