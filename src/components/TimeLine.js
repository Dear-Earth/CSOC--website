import { Chrono } from "react-chrono";
import items from "../assets/Eventsdata.js"

const VerticalAlternatingTimeline = () => {
  return (
    <Chrono
      items={items}
      mode="VERTICAL_ALTERNATING"
      itemWidth={150}
    />
  );
};

export default VerticalAlternatingTimeline;