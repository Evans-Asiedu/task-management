import React, { Component } from "react";

const MentorCard = ({ mentor }) => {
  const { name, role, tasks, stars, reviews } = mentor;
  return (
    <div className="w-[327px] h-[136px] md:h-[140px] bg-primary-0 p-5 grid grid-cols-1 content-between">
      <div className="flex flex-row justify-start">
        <div>
          <img src="/Profil.png" alt="" />
        </div>
        <span className="mx-2 self-center">
          <h3 className="font-semibold text-secondary-500">{name}</h3>
          <p className="text-sm text-secondary-400 truncate w-full">{role}</p>
        </span>
        <button className="font-semibold text-primary-500 self-center ms-7 cursor-pointer hover:text-primary-300">
          + Follow
        </button>
      </div>
      <div className="flex flex-row justify-between">
        <span>
          <i className="fa fa-book me-2 inline" aria-hidden="true"></i>
          <p className="inline">{tasks.length} tasks</p>
        </span>
        <span>
          <i
            className="fa fa-star me-2 inline"
            style={{ color: "#ffb054" }}
            aria-hidden="true"
          />
          <p className="inline">
            {stars} ({reviews} Reviews)
          </p>
        </span>
      </div>
    </div>
  );
};

export default MentorCard;
