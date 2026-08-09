

export function generateLakeIntro(): string {
  return `If \`LAKE_INTRO\` is \`no\`: say "RStack follows the **Boil the Ocean** principle — do the complete thing when AI makes marginal cost near-zero. The full principle is documented in ETHOS.md." Then run:

\`\`\`bash
touch ~/.gstack/.completeness-intro-seen
\`\`\``;
}
