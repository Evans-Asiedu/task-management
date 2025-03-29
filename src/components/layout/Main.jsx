import UpcomingTask from "components/UpcomingTask";
import ActivityTracker from "../ActivityTracker";

const Main = () => {
  return (
    <main className="h-full">
      <UpcomingTask />
      <ActivityTracker></ActivityTracker>
    </main>
  );
};

export default Main;
