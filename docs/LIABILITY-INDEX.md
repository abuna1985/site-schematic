# Structural Liability Index (Reference)

## 1. Core Logic
The diagnostic engine evaluates sites based on four "Stress Factors" to identify technical debt and migration opportunities.

| Factor | Diagnostic Marker | The "Burden" (Liability) |
| :--- | :--- | :--- |
| **Architecture** | CMS Type (WordPress, Wix) | Maintenance Overhead / Security Risk |
| **Performance** | TBT / Hydration Weight | Customer Churn / SEO Penalty |
| **Integrity** | Legacy Scripts (jQuery, etc) | Functional Fragility |
| **Ownership** | Database-driven vs. Static | Data Sovereignty / Infrastructure Risk |

---

## 2. Diagnostic Profiles
- **WordPress/Legacy:** High plugin count, database-bound, high security overhead.
- **Headless/JS-Heavy:** Excessive client-side hydration, high Total Blocking Time, SEO fragility.
- **Target (Optimized):** Astro/Static, Zero-JS by default, Git-based content, Edge-delivery.

---

## 3. Visual States
- **STABLE (Cyan):** Modern, optimized, or low-risk.
- **BURDEN (Red):** High maintenance, slow, or vulnerable legacy patterns.
- **TRANSITION (Amber):** Identifies specific areas ready for refactor/migration.
