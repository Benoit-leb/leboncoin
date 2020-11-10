import { useEffect } from 'react';
import { useGlobal, setGlobal} from "reactn";


const useDarkMode = () => {
  const [theme, setTheme] = useGlobal("theme");
  
  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode)
    setTheme(mode)
  };

  useEffect(() => {
    setGlobal({
      theme: window.localStorage.getItem("theme") 
    });
  }, []);

  useEffect(() => {
    if(theme) {
      setMode(theme);
    }
  }, [theme]);
  return [theme]
};

export default useDarkMode;