import Slider from "src/components/slider/Slider";
import MentorCard from "src/components/cards/MentorCard";
import { mentors } from "src/data";

const MentorsListSlider = ({ title = "Monthly Mentors" }) => {
  const mentorCard = (mentor) => {
    return <MentorCard mentor={mentor} />;
  };

  return (
    <Slider
      title={title}
      data={mentors}
      component={mentorCard}
      itemsPerViewDesktop={2}
      itemsPerViewMobile={1}
    />
  );
};

export default MentorsListSlider;
