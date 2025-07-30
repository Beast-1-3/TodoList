import React from "react";

const colorMap = {
  High: "bg-red-500",
  Medium: "bg-yellow-400",
  Low: "bg-green-500",
};

const PriorityTag = ({ priority }) => {
  return (
    <span
      className={`ml-2 text-xs font-semibold text-white px-2 py-1 rounded-full ${colorMap[priority] || "bg-gray-400"}`}
    >
      {priority}
    </span>
  );
};

export default PriorityTag;