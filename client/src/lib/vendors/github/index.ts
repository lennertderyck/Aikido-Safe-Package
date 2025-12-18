import { VulnerabilityType } from "@/src/types/general";

export const getPackageVulnerabilityTypeFromGithubAdvisory = (
  advisory: GitHubSecurity.AdvisoryResponse
): VulnerabilityType => {
  return (
    (
      {
        malware: "malware",
        reviewed: "vulnerability",
        unreviewed: "untrusted"
      } satisfies Record<string, VulnerabilityType>
    )[advisory.type] || "unknown"
  );
};
