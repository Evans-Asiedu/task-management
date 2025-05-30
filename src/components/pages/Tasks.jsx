import Header from "src/components/layout/Header";
import UpcomingTask from "../UpcomingTask";
import SliderHeader from "../SliderHeader";

const Tasks = () => {
  return (
    <>
      <Header showActions={true} title="Explore Tasks" />
      <main className="h-full flex bg-n-2">
        <div className="px-6 lg:px-8 space-y-6 lg:space-y-4">
          <section className="space-y-6">
            {/* Shrink each UpcomingTask */}
            <div>
              <UpcomingTask taskPerViewOverride={3} sliderHeaderProps={{title:'Time Limit'}} />
            </div>
            <div>
              <UpcomingTask taskPerViewOverride={3} sliderHeaderProps={{title:'New Tasks'}}/>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Tasks;
