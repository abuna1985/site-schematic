import { AuditReport } from "@/types/audit";

export const MOCK_AUDIT_REPORT: AuditReport = {
  url: "https://reddoor.biz",
  score: 72,
  stack: {
    backend: {
      name: "WordPress",
      version: "6.1",
      status: "legacy",
    },
    frontend: {
      name: "Next.js",
      version: "14.0",
      status: "modern",
    },
    bridge: "REST API",
  },
  warnings: [
    {
      type: "debt",
      label: "jQuery 3.5.1 detected",
      severity: "high",
    },
    {
      type: "perf",
      label: "Unoptimized Images (2.4MB)",
      severity: "medium",
    },
    {
      type: "security",
      label: "Exposed WP-API Endpoints",
      severity: "low",
    },
  ],
  mentorNote: "This architecture is 'Stable but Stalled.' The bridge is working, but the legacy jQuery is bottlenecking your Next.js performance. Transitioning these final scripts to React components would reduce TBT by 40%.",
};
