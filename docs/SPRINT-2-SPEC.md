# Sprint 2: The Structural Blueprint & Diagnostic Service

**Goal:** Implement the "Fragility Triad" diagnostic engine, GSAP complexity heatmap, and a responsive AuditMap visualizing structural liabilities.

---

## 1. Architectural Strategy: The Simple Pipe
We strictly separate the "Brain" from the "Skin" using a direct service-to-component flow:
- **Domain (The Truth):** `src/types/audit.ts` defining the "Fragility Triad" schema (Architecture, Operational Risk, User Experience).
- **Service (The Brain):** `src/services/diagnosticService.ts` via a simple `audit(url)` function that fingerprints site types.
- **UI (The Skin):** `StatusNode.tsx` and `AuditMap.tsx`. Humble components that render the blueprint aesthetic based on passed props.

---

## 2. Technical Specs

### A. The Fragility Triad (Categories)
1. **Architecture (The Foundation):** Identifies Monolith vs. SPA vs. Static. Highlights the "Agility Tax."
2. **Operational Risk (The Safety):** Detects Vendor Lock-in (Page Builders) and Compliance/Accessibility gaps. Highlights the "Ownership Gap."
3. **User Experience (The Impact):** Measures Performance Gravity (TBT/Hydration Tax). Highlights "Customer Churn."

### B. GSAP Complexity Heatmap
- **Stable Site:** Lines are straight, clean, and orthogonal.
- **Burdened Site:** Lines become "tangled" (Bezier curves) and pulse with warning colors to represent roadblocks.
- **Transition State:** Lines begin to "straighten" as the scan completes toward an Astro-based target.

### C. Diagnostic Logic
A simple profile-based scanner that looks for:
- **WordPress:** `/wp-content`, `wp-json` headers, plugin signatures.
- **Headless/SPA:** `__NEXT_DATA__`, high JS-to-HTML ratio, client-side routing.
- **Static/Astro:** Low JS footprint, modern meta signatures.

---

## 3. Implementation Steps
1. **The Contract:** Update `src/types/audit.ts` with the Fragility Triad Zod schema.
2. **The Sample:** Update `src/constants/mockData.ts` with WP and Headless profiles.
3. **The Skin:** Refactor `StatusNode` to handle `evidence` and `description` props.
4. **The Visuals:** Implement the `AuditMap` grid and the GSAP "Tangled Line" logic.
