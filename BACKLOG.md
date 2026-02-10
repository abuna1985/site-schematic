# SiteSchematic Project Backlog

## Sprint 2: Interactive Foundation & Service Layer
**Goal**: Transition from static layout to a functional, simulated interactive experience following Clean Architecture.

### Task 2.1: Implement Service Layer (Scraping Simulation)
- **Dependency**: `types/audit.ts`
- **Description**: Create a pure TypeScript service to handle the "scanning" logic. This moves business logic out of the React lifecycle.
- **Subtasks**:
  - [ ] Create `src/services/scannerService.ts`.
  - [ ] Define `scanUrl` function using the **Result Pattern** (`{ data, error }`).
  - [ ] Implement `setTimeout` simulation and return `MOCK_AUDIT_REPORT`.
  - [ ] Document the service with TSDoc comments for technical clarity.

### Task 2.2: Refactor UI Components (Status & Analysis)
- **Dependency**: Task 2.1
- **Description**: Finalize the implementation of `StatusNode` and `AnalysisBox` using the agreed-upon "Blueprint" styling.
- **Subtasks**:
  - [ ] Implement `StatusNode.tsx` logic (Props: label, value, status).
  - [ ] Style `StatusNode.module.css` using the **Outside-In** concentric pattern.
  - [ ] Implement `AnalysisBox.tsx` for displaying `mentorNote`.
  - [ ] Add technical annotations/labels to components to match the blueprint vibe.

### Task 2.3: Wire Coordinator (Page State Management)
- **Dependency**: Task 2.1, Task 2.2
- **Description**: Connect the `InputBar` to the `scannerService` within `page.tsx`.
- **Subtasks**:
  - [ ] Update `page.tsx` to use the new `scannerService`.
  - [ ] Handle "Scanning" HUD status display.
  - [ ] Implement conditional rendering for results area.
  - [ ] Implement "NEW SCAN" reset logic.

### Task 2.4: Motion Design (GSAP Reveal)
- **Dependency**: Task 2.3
- **Description**: Add the "Wow" factor using GSAP to animate the blueprint drawing itself.
- **Subtasks**:
  - [ ] Create `useRevealAnimation` custom hook or implement in-component GSAP logic.
  - [ ] Animate `StatusNode` entrance (staggered fade/slide).
  - [ ] Animate the "Bridge" line drawing effect.

---

## Future Sprints
- **Sprint 3**: Real Scraper Implementation (Server Actions + Cheerio).
- **Sprint 4**: Advanced Diagnostics & Sharing (URL Base64 encoding).
- **Sprint 5**: Content Engine Integration (Blog/Fables).
