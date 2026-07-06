import { Link } from "react-router-dom";

interface Props {
  number: number;
  date: string;
  title: string;
  status: "ready" | "pending";
  accentColor?: string;
  quiet?: boolean;
}

export default function WeekPreviewCard({
  number,
  date,
  title,
  status,
  accentColor,
  quiet,
}: Props) {
  const isReady = status === "ready";
  const accent = quiet ? "#6B7B70" : (accentColor ?? "#9E4126");

  return (
    <Link
      to={isReady ? `/journey#week-${number}` : "#"}
      className="group block rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-6 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-secondary/40 hover:-translate-y-1 hover:shadow-sm active:scale-[0.98]"
      onClick={(e) => {
        if (!isReady) e.preventDefault();
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-full border transition-colors duration-300"
          style={{
            backgroundColor: `${accent}15`,
            borderColor: `${accent}30`,
            color: accent,
          }}
        >
          Week {number}
        </span>
        {!isReady && (
          <span className="text-[10px] uppercase tracking-wider text-outline font-medium">
            Soon
          </span>
        )}
      </div>
      <p className="text-xs text-text-muted mb-1">{date}</p>
      <p className="text-sm leading-snug font-medium text-on-surface transition-colors duration-300 group-hover:text-primary">
        {title}
      </p>
    </Link>
  );
}
