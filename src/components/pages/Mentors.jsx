import Header from "src/components/layout/Header";
import MentorsListSlider from "src/components/MentorsListSlider";
const Mentors = () => {
  return (
    <>
      <Header showActions={true} title="Mentors" />
      <main className="h-full flex bg-n-2">
        <div className="p-6 lg:p-8 space-y-6 lg:space-y-8">
          <MentorsListSlider title="Recent Mentors" />
        </div>
      </main>
    </>
  );
};

export default Mentors;
