import React from "react";
import { FaStar } from "react-icons/fa";
import { Check } from "lucide-react";

const TechnologyCard = ({ technology, onAdd, isAdded }) => {
  const { name, category, description, icon, rating, difficulty, badge } =
    technology;

  // Badge styles based on badge type
  const badgeStyles = {
    Popular: "border-sky-100 bg-sky-50 text-sky-500",
    Versatile: "border-emerald-100 bg-emerald-50 text-emerald-500",
    Fast: "border-orange-100 bg-orange-50 text-orange-500",
    "Full-Stack": "border-sky-100 bg-sky-50 text-sky-500",
    Standard: "border-emerald-100 bg-emerald-50 text-emerald-500",
    "Top SQL": "border-blue-100 bg-blue-50 text-blue-500",
    Cache: "border-red-100 bg-red-50 text-red-500",
    Ubiquitous: "border-orange-100 bg-orange-50 text-orange-500",
    Essential: "border-sky-100 bg-sky-50 text-sky-500",
    Robust: "border-sky-100 bg-sky-50 text-sky-500",
    Modern: "border-cyan-100 bg-cyan-50 text-cyan-500",
    Containers: "border-sky-100 bg-sky-50 text-sky-500",
    NoSQL: "border-violet-100 bg-violet-50 text-violet-500",
    Orchestration: "border-purple-100 bg-purple-50 text-purple-500",
    Lightweight: "border-slate-200 bg-slate-50 text-slate-500",
    "Version Control": "border-orange-100 bg-orange-50 text-orange-500",
    Collaboration: "border-sky-100 bg-sky-50 text-sky-500",
    Cloud: "border-indigo-100 bg-indigo-50 text-indigo-500",
  };

  const currentBadgeStyle =
    badgeStyles[badge] || "border-slate-200 bg-slate-50 text-slate-500";

  return (
    <div
      className={`rounded-xl border bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md ${
        isAdded ? "border-pink-500" : "border-slate-200"
      }`}
    >
      {" "}
      {/* Top */}
      <div className="flex items-start justify-between gap-2">
        {/* Icon */}
        <div className="flex h-7 w-7 items-center justify-center">
          <img src={icon} alt={name} className="h-6 w-6 object-contain" />
        </div>

        {/* Badge */}
        <span
          className={`rounded-full border px-2 py-1 text-[7px] font-medium ${currentBadgeStyle}`}
        >
          {badge}
        </span>
      </div>
      {/* Name */}
      <h2 className="mt-4 text-sm font-bold text-slate-900">{name}</h2>
      {/* Description */}
      <p className="mt-1.5 line-clamp-3 min-h-[48px] text-[8px] leading-[1.5] text-slate-500">
        {description}
      </p>
      {/* Divider */}
      <div className="my-3 border-t border-slate-100" />
      {/* Info */}
      <div className="flex items-center justify-between gap-1 text-[7px]">
        <span className="rounded bg-slate-100 px-2 py-1 font-medium text-slate-500">
          {category}
        </span>

        <span className="text-slate-500">{difficulty}</span>

        <span className="flex items-center gap-1 font-semibold text-slate-600">
          <FaStar className="text-[8px] text-yellow-400" />
          {rating}
        </span>
      </div>
      {/* Button */}
      <button
        onClick={() => onAdd(technology)}
        // disabled={isAdded}
        className={`mt-3 h-7 w-full rounded-md border text-[8px] font-medium transition ${
          isAdded
            ? "border-pink-200 bg-pink-50 text-pink-500"
            : "border-transparent bg-[#080d1b] text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
