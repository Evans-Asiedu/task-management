import UpcomingTask from "components/UpcomingTask";
import ActivityTracker from "components/ActivityTracker";
import RunningTask from "components/RunningTask";
import { Calendar } from "components/Calendar";
import TodayTask from "components/TodayTask";
import MentorCard from "components/MentorCard";

const Main = () => {
  return (
    <main className="h-full flex bg-n-2">
      {/* TODO: move these to overview component and improve styles  */}

      <div>
        <div className="flex flex-col md:flex-row">
          <RunningTask />
          <ActivityTracker />
        </div>
        {/* Needs to be replace with monthly mentors component */}
        <MentorCard />
        <UpcomingTask />
      </div>

      <div>
        <div className="mt-5 ps-4 md:mt-0">
          <Calendar />
          <TodayTask />
        </div>
      </div>
    </main>
  );
};

export default Main;
