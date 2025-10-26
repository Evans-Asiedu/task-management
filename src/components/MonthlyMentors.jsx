import Slider from "src/components/slider/Slider";
import MentorCard from "components/MentorCard";
import { mentors } from "src/data";

const MonthlyMentors = () => {
  const mentorCard = (mentor) => {
    return <MentorCard mentor={mentor} />;
  };

  return (
    <Slider
      title="Monthly Mentors"
      data={mentors}
      component={mentorCard}
      itemsPerViewDesktop={2}
      itemsPerViewMobile={1}
    />
  );
};

export default MonthlyMentors;
