import { useEffect } from 'react';
import { useGlobal, setGlobal} from "reactn";


const useDarkMode = () => {
  const [theme, setMode] = useGlobal("theme");
  
  const setTheme = (mode) => {
    window.localStorage.setItem("theme", mode)
    setMode(mode)
  };

  useEffect(() => {
    setGlobal({
      theme: window.localStorage.getItem("theme") 
    });
  }, []);

  return [theme, setTheme]
};

export default useDarkMode;