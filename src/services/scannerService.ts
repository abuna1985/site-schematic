import { AuditReport } from "@/types/audit";
import { MOCK_AUDIT_REPORT } from "@/constants/mockData";

export type ScanResult =
  | { data: AuditReport; error: null }
  | { data: null; error: string };

export const scanUrl = async (url: string): Promise<ScanResult> => {
  try {
    // 1. Simulate the data gahering and report building
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // 2. Map the mock data to the requested url
    const result: AuditReport = {
      ...MOCK_AUDIT_REPORT,
      url,
    };
    // 3. Return the successful result
    return { data: result, error: null };
  } catch (error) {
    // 4. handle the unexpected failures gracefully
    return { data: null, error: "SYSTEM::CRITICAL_FAILURE" };
  }
};
