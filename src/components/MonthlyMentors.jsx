import { useState, useEffect } from "react";
import SliderHeader from "components/SliderHeader";
import SliderBody from "components/SliderBody";
import MentorCard from "components/MentorCard";
import { mentors } from "src/data";

const MonthlyMentors = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [mentorPerView, setMentorPerView] = useState(1);

  // function to check screen size
  useEffect(() => {
    const updateMentorPerView = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setMentorPerView(2);
      } else {
        setMentorPerView(1);
      }
    };

    updateMentorPerView();
    window.addEventListener("resize", updateMentorPerView);

    return () => window.removeEventListener("resize", updateMentorPerView);
  }, []);

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + mentorPerView < mentors.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const start = startIndex + 1;
  const current = startIndex + mentorPerView;
  const end = mentors.length;

  const mentorCard = (mentor) => {
    return <MentorCard mentor={mentor} />;
  };

  return (
    <div>
      <SliderHeader
        title={"Monthly Mentors"}
        onNext={handleNext}
        onPrevious={handlePrevious}
        start={start}
        current={current}
        end={end}
      />
      <div>
        <SliderBody
          slides={mentors}
          startIndex={startIndex}
          slidePerView={mentorPerView}
          component={mentorCard}
        />
      </div>
    </div>
  );
};

export default MonthlyMentors;
