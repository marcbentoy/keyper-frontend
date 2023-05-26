export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Keyper",
  description:
    "Effortlessly Manage and Track your keys",
  mainNav: [
    {
      title: "Keys",
      href: "/keys",
    },
    {
      title: "History",
      href: "/history",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
