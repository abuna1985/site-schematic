# Sprint 2: Interactive Foundation & Service Layer

**Goal:** Implement the technical URL input system, encapsulate scanning logic in a service, and render visual "Nodes" using mock data.

---

## 1. Architectural Strategy: Clean Separation
Following the **Senior Mentor** protocol, we are strictly separating concerns:
- **UI (Skin)**: `InputBar`, `StatusNode`, `AnalysisBox` (Presentational).
- **Coordinator (Skeleton)**: `page.tsx` (State Orchestration).
- **Service (Brain)**: `src/services/scannerService.ts` (Business Logic).

---

## 2. Technical Specs

### A. The Service Layer (`src/services/scannerService.ts`)
We will use the **Result Pattern** to handle errors gracefully without throwing.
```typescript
import { AuditReport } from "@/types/audit";

type ScanResult = { data: AuditReport; error: null } | { data: null; error: string };

export const scanUrl = async (url: string): Promise<ScanResult> => {
  // Logic: Simulation with setTimeout + MOCK_DATA
}
```

### B. StatusNode Component
- **Props**: `label`, `value`, `status` ('legacy' | 'modern' | 'unknown').
- **Styling**: Concentric CSS (Positioning -> Box Model -> Typography -> Visuals).

### C. page.tsx Coordinator
- **State**: `isLoading`, `report`, `error`.
- **Transitions**: Smooth slide from `.idle` (centered) to `.active` (top-aligned).

---

## 3. Implementation Backlog
See [BACKLOG.md](../BACKLOG.md) for task tracking.
