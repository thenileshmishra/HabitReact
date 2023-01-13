import Header from "./components/Header";
import Overview from "./components/Overview";
import HabitDisplay from "./components/HabitDisplay";
import nilesh from "./style/app.module.css";

function App() {
  return (
    <div className={nilesh.App}>
      <Header />
      <div className={nilesh.wrapper}>
        <div className={nilesh.container}>
          <div className={nilesh.row}>
            <div className={nilesh.Overview}>
              <Overview />
            </div>
            <div className={nilesh.HabitDetails}>
              <HabitDisplay />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
