import React from "react";

export const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-purple-500"
    : " text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      onClick={() => onClick(name)}
      className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${buttonStyles}`}
    >
      {name}
    </button>
  );
};
