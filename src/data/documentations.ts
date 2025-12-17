export type Documentation = {
  slug: string;
  file: string;
  title: string;
  description: string;
};

export const DOCUMENTATIONS: Documentation[] = [
  {
    slug: "professor-alain-profile-2025",
    file: "2025_Update_Academic_and_Professional_Profile_of_Professor_Alain.pdf",
    title: "2025 Academic and Professional Profile of Professor Alain",
    description:
      "Updated 2025 overview of Professor Alain's academic background, professional experience, and key contributions to Eva Helpful Foundation.",
  },
  {
    slug: "about-us-appendix-iii-eva-helpful-way",
    file: "Approved_Approved_Appendix III_ About Us_Eva Helpful_Way.pdf",
    title: "Appendix III – About Us: The Eva Helpful Way",
    description:
      "Detailed narrative about who Eva Helpful Foundation is, our philosophy, and the distinctive 'Eva Helpful Way' of working with children, schools, and communities.",
  },
  {
    slug: "statement-of-problem-and-policy",
    file: "Approved_Approved_Appendix_II_Statement_of_the_Problem_and_Policy.pdf",
    title: "Appendix II – Statement of the Problem and Policy",
    description:
      "Formal statement describing the core social and moral challenges affecting children and adolescents, and the policy framework guiding Eva Helpful Foundation's response.",
  },
  {
    slug: "sdgs-versus-ehf",
    file: "Official_SDGs Versus EHF (2).pdf",
    title: "Official Document – SDGs Versus Eva Helpful Foundation",
    description:
      "Explains how Eva Helpful Foundation's programs align with and contribute to the United Nations Sustainable Development Goals (SDGs).",
  },
];

export function getDocumentation(slug: string): Documentation | undefined {
  return DOCUMENTATIONS.find((doc) => doc.slug === slug);
}
