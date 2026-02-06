# Sprint 1: SiteSchematic Foundation

**Goal:** Establish the DX (Developer Experience), set up the visual foundation, and render a "Mock Scan" result.

---

## 1. Environment Setup
- **Framework:** Next.js 14+ (App Router).
- **Language:** TypeScript (Strict Mode).
- **Styling:** CSS Modules + CSS Variables (Custom Properties).
- **Animation:** GSAP (`gsap` and `@gsap/react`).
- **Validation:** Zod (for the Data Contract schema).
- **Icons:** Lucide React (Blueprint-style stroke icons).
- **Utilities:** `clsx` (for clean class management).

## 2. The Data Contract (Logic Foundation)
Create a `src/types/audit.ts` using Zod to define and validate the "Bridge" structure:
```typescript
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
```

## 3. The Blueprint Foundation (CSS)
Set up `globals.css` with the "Engineering Schematic" variables:
- `--bg-blueprint`: Deep Navy.
- `--line-cyan`: Neon Cyan.
- `--line-white`: Soft technical white.
- `--font-mono`: A fixed-width font (JetBrains Mono or similar).
- **Background Grid:** Implement a `background-image` linear-gradient to create the "Drafting Paper" look.

## 4. Components to Build
1. **`InputBar`:** A simple, high-end URL entry field with a "Scan" button.
2. **`AuditMap`:** The core visualizer. For Sprint 1, this will be a static "Blueprint" layout using Flex/Grid.
3. **`StatusCard`:** A component to display the Score and the Backend/Frontend labels.

## 5. The "Mock" Workflow
- Create a `constants/mockData.ts` file containing a sample `AuditReport` for an agency like "Red Door Interactive."
- Pass this mock data into the UI components to ensure the "Blueprint" looks impressive before we even touch the scraper logic.

---

## Success Criteria for Sprint 1
- [ ] Next.js app running on `localhost:3000`.
- [ ] CSS Modules scoped correctly for each component.
- [ ] Page displays a grid background and a "Mock" architecture map.
- [ ] The "Score" counter is visible and styled.
