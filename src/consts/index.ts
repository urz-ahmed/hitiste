export const currentYear = new Date().getFullYear();

export const staggerContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const fadeUpAnimationVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};
export interface Team {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
}

export const exploreTeams: Team[] = [
  {
    id: "technical",
    imgUrl: "/technical-team.png",
    title: "Technical",
    description:
      "In a technical team, members collaborate to apply their expertise in solving specific problems or achieving project goals within their domain, working collectively to leverage their skills for successful outcomes.",
  },
  {
    id: "media",
    imgUrl: "/media-team.png",
    title: "Media",
    description:
      "In a technical team, members collaborate to apply their expertise in solving specific problems or achieving project goals within their domain, working collectively to leverage their skills for successful outcomes.",
  },
  {
    id: "public_relation",
    imgUrl: "/public-relation.png",
    title: "Public Relation",
    description:
      "In a technical team, members collaborate to apply their expertise in solving specific problems or achieving project goals within their domain, working collectively to leverage their skills for successful outcomes.",
  },
];

export const startingFeatures: string[] = [
  "As an ISTE member, you will have access to a wealth of resources, including journals, research papers, and online courses.",
  "ISTE organizes numerous events, including conferences, workshops, and competitions, all over India.",
  "ISTE members receive discounts on registration fees for various events and workshops organized by the society. ",
  "ISTE collaborates with well-known companies to offer its members internships and project opportunities.",
  "ISTE membership opens doors for collaboration with other student chapters across the country."
];

export interface Social {
  name: string;
  icon: string;
  url: string;
}

export const socials: Social[] = [
  {
    name: "linkedin",
    icon: "/linkedin.svg",
    url: "https://www.linkedin.com/company/iste-hit-sc/",
  },
  {
    name: "instagram",
    icon: "/instagram.svg",
    url: "https://www.instagram.com/iste.hit.sc/",
  },
];
