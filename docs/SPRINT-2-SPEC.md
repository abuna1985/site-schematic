# Sprint 2: SiteSchematic Interactive Interface

**Goal:** Implement the technical URL input system and render the visual "Nodes" using mock audit data.

---

## 1. Components to Build

### A. `InputBar` (`src/components/InputBar.tsx`)
- **Purpose:** Capture the target URL and initiate the "Scan."
- **Props:** `onScan: (url: string) => void`.
- **Interaction:** 
  - Input field should have a "Technical Annotation" style error state.
  - Button should use a Lucide icon (e.g., `Scan` or `Zap`).
  - Disable input/button when a scan is "active."

### B. `StatusNode` (`src/components/StatusNode.tsx`)
- **Purpose:** A technical "Module" box that shows a piece of the tech stack.
- **Props:** `label: string`, `value: string`, `status: 'legacy' | 'modern' | 'unknown'`.
- **Visuals:** 
  - Framed box with a "Header" strip.
  - Status-based colors (Cyan for modern, Yellow/Red for legacy).
  - Use `clsx` for conditional styling.

## 2. Page Integration (`src/app/page.tsx`)
- **State Management:**
  - `const [isScanning, setIsScanning] = useState(false)`
  - `const [report, setReport] = useState<AuditReport | null>(null)`
- **Workflow:**
  - On `onScan`, set `isScanning` to true.
  - Use a `setTimeout` (e.g., 1500ms) to simulate a "Technical Analysis."
  - Set `report` to our `MOCK_AUDIT_REPORT`.
  - Toggle `isScanning` to false.

## 3. Motion & Animation (GSAP)
- **The "Drawing" Sequence:**
  - When `report` is present, use `useGSAP` to animate the `StatusNode` boxes into view.
  - Suggestion: A staggered "fade-and-slide" from the center outward.

---

## 4. Success Criteria for Sprint 2
- [ ] User can type a URL and click "Run Scan."
- [ ] App displays a "Scanning..." state.
- [ ] Technical boxes (Nodes) appear on the blueprint grid after the "Scan."
- [ ] The `mentorNote` from our mock data is displayed in a technical "Analysis" box.
