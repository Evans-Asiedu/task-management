import UpcomingTask from "components/UpcomingTask";
import ActivityTracker from "components/ActivityTracker";
import RunningTask from "components/RunningTask";
import { Calendar } from "components/Calendar";
import TodayTask from "components/TodayTask";
import MonthlyMentors from "components/MonthlyMentors";
import Header from "src/components/layout/Header";
import { data } from "src/data";

const Overview = () => {
  const currentUserName = data.loggedInUser.name;
  return (
    <>
      <main className="h-full flex bg-n-2">
        <div className="flex-grow">
          <Header
            showActions={false}
            title={`Hi ${currentUserName}`}
            subText="Let's finish task today"
          />

          <div className="flex flex-col md:flex-row">
            <RunningTask />
            <ActivityTracker />
          </div>
          <MonthlyMentors />
          <UpcomingTask />
        </div>

        <div className="basis-[436px] p-8">
          <Calendar />
          <TodayTask />
        </div>
      </main>
    </>
  );
};

export default Overview;
