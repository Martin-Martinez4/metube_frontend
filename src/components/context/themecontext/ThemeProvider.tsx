import { useState } from "react";
import { ThemeContext } from "../../../App";

export interface ThemeProviderProps {
  children: React.ReactNode | React.ReactNode[] | null;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) =>  {
  const [theme, setTheme] = useState(localStorage.getItem('theme') == null ? "light": localStorage.getItem('theme'));

  console.log(theme)

  const toggleTheme = () => {
    setTheme((prevTheme) => {
        let tempTheme = prevTheme === "light" ? "dark" : "light"
        if(prevTheme){

          localStorage.setItem('theme', tempTheme);
        }
        return tempTheme
    });
  };

  const styleVars = {
    "--top-nav-color": "var(--dark-blue)",
    "--body-color":"var(--black)",
    "--text-color": "var(--white)",
    "--accent-1":"var(--dark-blue)",
    "--input-background":"var(--body-color)",
    "background": "var(--body-color)",
    "color":"var(--text-color)"
  }

  // document.getElementById("root")?.classList.add("dark-theme");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={theme == 'dark' ? styleVars: {}}>
        {children}
      </div>

    </ThemeContext.Provider>
  )
}
