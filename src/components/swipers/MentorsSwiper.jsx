import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MentorCard from "src/components/cards/MentorCard";
import { mentors } from "src/data";

const MentorsSwiper = ({ mentors: mentorsProp, headerLabel }) => {
  const mentorsToDisplay = mentorsProp || mentors;

  return (
    <div className="mentors-swiper-wrapper">
      {headerLabel && (
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">{headerLabel}</h2>
          <div className="flex items-center">
            <button className="mentors-swiper-button-prev text-secondary-400 text-2xl mr-3 cursor-pointer hover:text-secondary-500 transition-colors">
              <i className="fa fa-angle-left"></i>
            </button>
            <button className="mentors-swiper-button-next text-secondary-400 text-2xl cursor-pointer hover:text-secondary-500 transition-colors">
              <i className="fa fa-angle-right"></i>
            </button>
          </div>
        </div>
      )}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".mentors-swiper-wrapper .mentors-swiper-button-next",
          prevEl: ".mentors-swiper-wrapper .mentors-swiper-button-prev",
        }}
        spaceBetween={16}
        slidesPerView="auto"
        className="mentors-swiper"
      >
        {mentorsToDisplay.map((mentor) => (
          <SwiperSlide key={mentor.id}>
            <MentorCard mentor={mentor} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MentorsSwiper;
