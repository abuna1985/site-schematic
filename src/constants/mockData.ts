import { AuditReport } from "@/types/audit";

export const MOCK_PROFILES: Record<string, AuditReport> = {
  wordpress: {
    url: "https://legacy-site.com/wp-admin/",
    siteType: "wordpress",
    factors: [
      {
        id: "arch",
        label: "Architecture",
        status: "burden",
        value: "Monolithic WP",
        description:
          "Old building materials make it expensive to change things.",
      },
      {
        id: "risk",
        label: "Operational Risk",
        status: "burden",
        value: "18 Plugins",
        description:
          "Too many 3rd-party parts make the site fragile and unsafe.",
      },
      {
        id: "ux",
        label: "User Experience",
        status: "burden",
        value: "5.4s Load Time",
        description:
          "The site is so heavy that customers leave before it loads.",
      },
    ],
    recommendations: [],
  },
};
