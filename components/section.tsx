// Marks where a section rule meets the frame's vertical lines.
const Cross = ({ className }: { className: string }) => (
  <svg
    aria-hidden
    viewBox="0 0 11 11"
    className={`text-muted-foreground/70 absolute z-10 size-[11px] ${className}`}
  >
    <path d="M5.5 0v11M0 5.5h11" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const Section = ({
  index,
  title,
  action,
  flush = false,
  children,
}: {
  index?: string;
  title?: string;
  action?: React.ReactNode;
  flush?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <section className="relative border-t">
      <Cross className="-top-[6px] -left-[6px]" />
      <Cross className="-top-[6px] -right-[6px]" />

      {title && (
        <div className="flex items-end justify-between gap-4 border-b px-6 py-5 md:px-10">
          <div className="flex items-baseline gap-3">
            {index && (
              <span className="text-muted-foreground font-mono text-xs">
                {index}
              </span>
            )}
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          </div>
          {action}
        </div>
      )}

      <div className={flush ? "" : "px-6 py-10 md:px-10"}>{children}</div>
    </section>
  );
};
export default Section;
