import { z } from "zod";

/**
 * The "Individual Box"
 * Defines he data for one specific category
 * example: Architecture, Risk, User Experience, etc (future categories)
 */
export const StressFactorSchema = z.object({
  id: z.string(), // unique name to track
  label: z.string(), // name of the category
  status: z.enum(["stable", "burden", "transition"]), // controls the colors
  value: z.string(), // the proof/metric
  description: z.string(), // the business impact (the "so what?")
});
/**
 * The "Full Report"
 * Parent container that holds site info and list of categories
 */
export const AuditReportSchema = z.object({
  url: z.string().url(),
  siteType: z.enum(["wordpress", "headless", "static", "unknown"]),
  factors: z.array(StressFactorSchema), // the list of categories
  recommendations: z.array(z.string()), // the list of recommendations
});

export type StressFactor = z.infer<typeof StressFactorSchema>;
export type AuditReport = z.infer<typeof AuditReportSchema>;
