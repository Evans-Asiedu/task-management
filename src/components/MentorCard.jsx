import React, { Component } from "react";

const MentorCard = ({ mentor }) => {
  const { name, role, tasks, stars, reviews } = mentor;
  return (
    <div className="bg-primary-0 rounded-r-1">
      <div className="h-[140px] flex flex-col justify-between p-4">
        <div className="flex justify-between">
          <div className="flex">
            <img src="/Profil.png" alt="" className="" />
            <span className="mx-2 self-center">
              <h3 className="font-semibold text-secondary-500">{name}</h3>
              <p className="text-sm text-secondary-400 truncate w-full">
                {role}
              </p>
            </span>
          </div>
          <button className="font-semibold text-primary-500 cursor-pointer hover:text-primary-300">
            + Follow
          </button>
        </div>
        <div className="flex justify-between text-secondary-500 text-sm">
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
    </div>
  );
};

export default MentorCard;
