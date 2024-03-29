import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { MainContext } from "./components/Context";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  const datas = {
    theme,
    setTheme,
  };
  return (
    <MainContext.Provider value={datas}>
      <Header />
      <Footer />
    </MainContext.Provider>
  );
}

export default App;
