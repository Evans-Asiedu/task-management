import UpcomingTask from "components/UpcomingTask";
import ActivityTracker from "components/ActivityTracker";
import RunningTask from "../RunningTask";

const Main = () => {
  return (
    <main className="h-full">
      <div className="flex flex-col md:flex-row">
        <RunningTask />
        <ActivityTracker />
      </div>
      {/* Needs to be replace with monthly mentors component */}
      <UpcomingTask />
      <UpcomingTask />
    </main>
  );
};

export default Main;
