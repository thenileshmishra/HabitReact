import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { changeStatus } from "../redux/features/habitsSlice";
import iddu from "../style/habitDetails.module.css";

const HabitDetails = ({ habit, habit: { details } }) => {
  const dispatch = useDispatch();

  // handlers to change status on click
  const checkStatusHandler = (info) => {
    dispatch(
      changeStatus({
        title: info[0],
        details: [
          {
            day: info[1],
            status: "done",
          },
        ],
      })
    );
  };

  const doneStatusHandler = (info) => {
    dispatch(
      changeStatus({
        title: info[0],
        details: [
          {
            day: info[1],
            status: "fail",
          },
        ],
      })
    );
  };

  const failStatusHandler = (info) => {
    dispatch(
      changeStatus({
        title: info[0],
        details: [
          {
            day: info[1],
            status: "none",
          },
        ],
      })
    );
  };
  return (
    <div className={iddu.row}>
      {details.map((detail) => (
        <Fragment key={detail.day}>
          <div className={iddu.col}>
            <p className={iddu.dayHeadings}>{detail.day}</p>

            {detail.status === "none" && (
              <img
                src="https://cdn-icons-png.flaticon.com/512/43/43625.png"
                alt=""
                className={iddu.btn}
                onClick={() => checkStatusHandler([habit.title, detail.day])}
              />
            )}

            {detail.status === "done" && (
              <img
                src="https://cdn-icons-png.flaticon.com/128/1055/1055183.png"
                alt=""
                className={iddu.btn}
                onClick={() => doneStatusHandler([habit.title, detail.day])}
              />
            )}

            {detail.status === "fail" && (
              <img
                src="https://cdn-icons-png.flaticon.com/512/87/87251.png"
                alt=""
                className={iddu.btn}
                onClick={() => failStatusHandler([habit.title, detail.day])}
              />
            )}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default HabitDetails;
