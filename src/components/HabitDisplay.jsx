import { useSelector } from "react-redux";
import HabitDetails from "./HabitDetails";
import nilesh from "../style/habitDisplay.module.css";

const HabitDisplay = () => {
  const { habits } = useSelector((state) => state.allHabits);

  return (
    <div className={nilesh.wrapper}>
      {habits.map((habit, index) => (
        <div key={index} className={nilesh.listGroup}>
          <p>
            <strong className={nilesh.title}>{habit.title}</strong>&nbsp;
            :&nbsp;
            <i className={nilesh.description}>{habit.description}</i>
          </p>

          <HabitDetails key={habit.title} habit={habit} />
        </div>
      ))}
    </div>
  );
};

export default HabitDisplay;
