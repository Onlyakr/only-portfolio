import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // Vendored React Bits components keep upstream code so `shadcn add` can update them.
    // They sync settings into refs during render, which the React Compiler rules flag.
    files: [
      "components/ui/blur-text.tsx",
      "components/ui/cursor-grid.tsx",
      "components/ui/specular-button.tsx",
      "components/ui/spotlight-card.tsx",
    ],
    rules: {
      "react-hooks/refs": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
