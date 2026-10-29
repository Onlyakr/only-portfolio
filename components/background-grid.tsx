"use client";

import CursorGrid from "@/components/ui/cursor-grid";
import { useIsDark } from "@/hooks/use-is-dark";

const BackgroundGrid = () => {
  const isDark = useIsDark();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]"
    >
      <CursorGrid
        cellSize={48}
        lightMode={!isDark}
        gridOpacity={isDark ? 0.1 : 0.08}
        fillOpacity={0.05}
        radius={160}
        edgeFade={0}
        clickPulse={false}
      />
    </div>
  );
};
export default BackgroundGrid;
