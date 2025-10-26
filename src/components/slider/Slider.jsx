import { useState, useEffect } from "react";
import SliderHeader from "src/components/slider/SliderHeader";
import SliderBody from "src/components/slider/SliderBody";

const Slider = ({
  title,
  data,
  component,
  itemsPerViewDesktop = 2,
  itemsPerViewMobile = 1,
  breakpoint = "1024px",
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(itemsPerViewMobile);

  // function to check screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.matchMedia(`(min-width: ${breakpoint})`).matches) {
        setItemsPerView(itemsPerViewDesktop);
      } else {
        setItemsPerView(itemsPerViewMobile);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [breakpoint, itemsPerViewDesktop, itemsPerViewMobile]);

  const start = startIndex + 1;
  const current = startIndex + itemsPerView;
  const end = data.length;

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + itemsPerView < data.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div>
      <SliderHeader
        title={title}
        onNext={handleNext}
        onPrevious={handlePrevious}
        start={start}
        current={current}
        end={end}
      />
      <SliderBody
        slides={data}
        startIndex={startIndex}
        slidePerView={itemsPerView}
        component={component}
      />
    </div>
  );
};

export default Slider;
