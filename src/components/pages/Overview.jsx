import ActivityTracker from "components/ActivityTracker";
import RunningTask from "components/RunningTask";
import { Calendar } from "components/Calendar";
import TodayTask from "components/TodayTask";
import MentorsSwiper from "src/components/swipers/MentorsSwiper";
import TasksSwiper from "src/components/swipers/TasksSwiper";
import Header from "src/components/layout/Header";
import { data } from "src/data";

const Overview = () => {
  const currentUserName = data.loggedInUser.name;
  return (
    <>
      <main className="h-full flex">
        <div className="flex-grow bg-n-2 max-w-[calc(100dvw-624px)]">
          <Header
            showActions={false}
            title={`Hi ${currentUserName}`}
            subText="Let's finish task today"
            className="!bg-n-2"
          />

          <div className="px-6 lg:px-8 space-y-6 lg:space-y-8">
            <div className="flex flex-col md:flex-row gap-8 grow">
              <RunningTask />
              <ActivityTracker />
            </div>
            <MentorsSwiper mentors={data.mentors} headerLabel="Monthly Mentors" />
            <TasksSwiper tasks={data.tasks} headerLabel="Upcoming Task" />
          </div>
        </div>

        <div className="hidden xl:flex flex-col p-6 lg:p-8 gap-6 xl:gap-8 bg-n-1 min-w-[372px]">
          <Calendar />
          <TodayTask />
        </div>
      </main>
    </>
  );
};

export default Overview;
