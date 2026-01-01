import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import TaskCard from "src/components/cards/TaskCard";
import { data } from "src/data";

const TasksSwiper = ({ tasks: tasksProp, headerLabel }) => {
  const tasksToDisplay = tasksProp || data.tasks;

  return (
    <div className="tasks-swiper-wrapper">
      {headerLabel && (
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">{headerLabel}</h2>
          <div className="flex items-center">
            <button className="tasks-swiper-button-prev text-secondary-400 text-2xl mr-3 cursor-pointer hover:text-secondary-500 transition-colors">
              <i className="fa fa-angle-left"></i>
            </button>
            <button className="tasks-swiper-button-next text-secondary-400 text-2xl cursor-pointer hover:text-secondary-500 transition-colors">
              <i className="fa fa-angle-right"></i>
            </button>
          </div>
        </div>
      )}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".tasks-swiper-wrapper .tasks-swiper-button-next",
          prevEl: ".tasks-swiper-wrapper .tasks-swiper-button-prev",
        }}
        spaceBetween={16}
        slidesPerView="auto"
        className="tasks-swiper"
      >
        {tasksToDisplay.map((task) => (
          <SwiperSlide key={task.id}>
            <TaskCard task={task} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TasksSwiper;
