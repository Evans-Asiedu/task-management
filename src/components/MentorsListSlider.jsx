import Slider from "src/components/slider/Slider";
import MentorCard from "src/components/cards/MentorCard";
import { mentors } from "src/data";

const MentorsListSlider = ({ title = "Monthly Mentors", mentors: mentorsProp }) => {
  const mentorsToDisplay = mentorsProp || mentors;

  const mentorCard = (mentor) => {
    return <MentorCard mentor={mentor} />;
  };

  return (
    <Slider
      title={title}
      data={mentorsToDisplay}
      component={mentorCard}
      itemsPerViewDesktop={2}
      itemsPerViewMobile={1}
    />
  );
};

export default MentorsListSlider;
