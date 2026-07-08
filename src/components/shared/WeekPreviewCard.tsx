import { Link } from "react-router-dom";

interface Props {
  number: number;
  date: string;
  title: string;
}

export default function WeekPreviewCard({
  number,
  date,
  title,
}: Props) {
  return (
    <Link
      to={`/journey#week-${number}`}
      className="group block rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-6 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-secondary/40 hover:-translate-y-1 hover:shadow-sm active:scale-[0.98]"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-outline-variant/30 text-text-muted transition-colors duration-300">
          Week {number}
        </span>
      </div>
      <p className="text-xs text-text-muted mb-1">{date}</p>
      <p className="text-sm leading-snug font-medium text-on-surface transition-colors duration-300 group-hover:text-primary">
        {title}
      </p>
    </Link>
  );
}
