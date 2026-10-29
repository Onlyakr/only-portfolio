import { skills } from "@/lib/data";

const SkillGrid = () => (
  <dl className="divide-y">
    {skills.map((group) => (
      <div
        key={group.category}
        className="grid sm:grid-cols-[11rem_minmax(0,1fr)] sm:divide-x"
      >
        <dt className="text-muted-foreground px-6 pt-4 font-mono text-xs sm:py-4 md:px-10">
          {group.category}
        </dt>
        <dd className="flex flex-wrap gap-x-4 gap-y-1 px-6 pt-2 pb-4 text-sm sm:py-4 md:px-6">
          {group.items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </dd>
      </div>
    ))}
  </dl>
);
export default SkillGrid;
