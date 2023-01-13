import React from "react";
import CreateHabit from "./CreateHabit";
import { deleteHabit } from "../redux/features/habitsSlice";
import { useDispatch, useSelector } from "react-redux";
import nilesh from "../style/overview.module.css";

const Overview = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const dispatch = useDispatch();
  const { habits } = useSelector((state) => state.allHabits);

  // deleteHabit Handler
  const deleteHandler = (name) => {
    dispatch(deleteHabit(name));
  };

  return (
    <>
      <div className={nilesh.row}>
        <h4>Habits</h4>
      </div>
      <div className={nilesh.ListGroup}>
        {habits.map((habit, index) => (
          <div key={index} className={nilesh.list}>
            <div className={nilesh.content}>
              <div className={nilesh.habitTitle}>{habit.title}</div>
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/9364/9364951.png"
                  className={nilesh.delete}
                  alt=""
                  onClick={() => deleteHandler(habit.title)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={nilesh.rowHabit}>
        <button
          type="button"
          className={nilesh.btn}
          onClick={() => setModalShow(true)}
        >
          Add Habit
        </button>
        <CreateHabit show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </>
  );
};

export default Overview;
