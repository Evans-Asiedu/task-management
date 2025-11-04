import useStorage from "src/hooks/useStorage";
import { data } from "src/data";

const MentorCardDetailed = ({ mentor }) => {
  const { id, name, role, tasks, stars, reviews, bio, avatar } = mentor;
  const [following, setFollowing] = useStorage(
    "following",
    data.loggedInUser.following
  );
  const isFollowing = following.includes(id);

  const handleFollowToggle = (e) => {
    e.stopPropagation();
    setFollowing((prevFollowing) => {
      if (prevFollowing.includes(id)) {
        return prevFollowing.filter((mentorId) => mentorId !== id);
      } else {
        return [...prevFollowing, id];
      }
    });
  };

  return (
    <div className="bg-primary-0 rounded-r-1">
      <div className="flex flex-col justify-between p-5">
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
            onClick={handleFollowToggle}
            className={`cursor-pointer hover:text-primary-300  ${
              isFollowing ? "text-secondary-400" : "text-primary-500"
            }`}
          >
            {isFollowing ? "following" : "+ follow"}
          </button>
        </div>

        <p className="text-secondary-300 text-sm my-5 line-clamp-2 leading-relaxed">
          {bio}
        </p>
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

export default MentorCardDetailed;
