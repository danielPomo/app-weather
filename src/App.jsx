import "./App.css";
import Card from "./components/Card";
import Logo from "./components/Logo";
import DarkModeButton from "./components/DarkModeButton";
import Loader from "./components/Loader";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const switchMode = () => {
    setDarkMode(!darkMode);
  };
  const [isLoading, setIsLoading] = useState(true);
  const finishedLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className={darkMode ? "App dark-app" : "App light-app"}>
        <Logo />
        <DarkModeButton mode={switchMode} />
        <Card loading={finishedLoading} isDark={darkMode} />
      </div>
    </>
  );
}

export default App;
