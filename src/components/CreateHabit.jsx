import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/features/habitsSlice";
import { details } from "../redux/features/habitsSlice";
import nilesh from "../style/createHabit.module.css";

const CreateHabit = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // handle new habits
  const AddHabitHandler = () => {
    dispatch(addHabit({ title, description, details }));
    props.onHide();
  };

  return (
    // Modal Component
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={nilesh.modal}
    >
      <div className={nilesh.body}>
        <form className={nilesh.form} onSubmit={() => AddHabitHandler}>
          <div className={nilesh.title} controlid="title">
            <label className={nilesh.label}>Habit Title</label>
            <input
              className={nilesh.input}
              type="text"
              placeholder="enter title"
              value={title}
              autoFocus={true}
              required={true}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>

          <div className={nilesh.describe} controlid="description">
            <label className={nilesh.label}>Describe Your Habit </label>
            <input
              className={nilesh.input}
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </div>

          <div className={nilesh.footer}>
            <button className={nilesh.btn} onClick={() => AddHabitHandler()}>
              Add Habit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreateHabit;
