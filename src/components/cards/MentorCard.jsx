import { data } from "src/data";

const MentorCard = ({ mentor }) => {
  const { id, name, role, tasks, stars, reviews, avatar } = mentor;
  const { following } = data.loggedInUser;

  return (
    <div className="bg-primary-0 rounded-r-1">
      <div className="h-[140px] flex flex-col justify-between p-4">
        <div className="flex justify-between">
          <div className="flex">
            <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
            <span className="mx-2 self-center">
              <h3 className="font-semibold text-secondary-500">{name}</h3>
              <p className="text-xs text-secondary-400 truncate w-full">
                {role}
              </p>
            </span>
          </div>
          <button
            className={`cursor-pointer hover:text-primary-300  ${
              following.includes(id) ? "text-secondary-400" : "text-primary-500"
            }`}
          >
            {following.includes(id) ? "following" : "+ follow"}
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
