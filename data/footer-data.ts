export interface SocialLink {
  id: string
  name: string
  icon: string
  url: string
}

export interface FooterData {
  logoText: string
  copyright: string
  socialLinks: SocialLink[]
}

export const footerData: FooterData = {
  logoText: "Hack4COOU",
  copyright: "2025 Hack4COOU. All rights reserved. Built with 💚 by the COOU Tech Community.",
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
      url: "/tracks-details",
    },
  ],
}
