"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const subscribe = () => () => {};

// Canvas-based components take colors as props, not CSS variables.
// Report dark until mounted so server and first client render match.
export function useIsDark() {
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  return !mounted || resolvedTheme !== "light";
}
