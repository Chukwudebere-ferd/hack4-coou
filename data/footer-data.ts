export interface SocialLink {
  id: string
  name: string
  icon: string
  url: string
}

export interface FooterData {
  logoText: string
  copyright: string
  devfoma: string
  socialLinks: SocialLink[]
}

export const footerData: FooterData = {
  logoText: "Hack4COOU",
  copyright: "2026 Hack4COOU. All rights reserved. Built with 💚 by ",
  devfoma: "https://devfoma.vercel.app",
  socialLinks: [
    {
      id: "1",
      name: "Twitter",
      icon: "twitter",
      url: "/team-details",
    },
    {
      id: "2",
      name: "GitHub",
      icon: "github",
      url: "https://github.com/hack4coou",
    },
  ],
}
