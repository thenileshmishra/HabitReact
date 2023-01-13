import nilesh from "../style/header.module.css";
const Header = () => {
  const date = new Date();

  return (
    <div className={nilesh.wrapper}>
      <div className={nilesh.nav}>
        <h1>Habit Tracker</h1>
        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
};

export default Header;
