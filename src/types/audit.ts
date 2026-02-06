import { z } from 'zod';

export const AuditReportSchema = z.object({
  url: z.string().url(),
  score: z.number().min(0).max(100),
  stack: z.object({
    backend: z.object({
      name: z.string(),
      version: z.string(),
      status: z.enum(['legacy', 'modern', 'unknown']),
    }),
    frontend: z.object({
      name: z.string(),
      version: z.string(),
      status: z.enum(['legacy', 'modern', 'unknown']),
    }),
    bridge: z.string(), 
  }),
  warnings: z.array(z.object({
    type: z.string(),
    label: z.string(),
    severity: z.enum(['low', 'medium', 'high']),
  })),
  mentorNote: z.string(),
});

export type AuditReport = z.infer<typeof AuditReportSchema>;
