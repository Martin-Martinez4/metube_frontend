import { useContext } from "react";
import { ThemeContext } from "../../../App";

// Create a ThemeSwitcher component that consumes the context value
export const ThemeSwitcher: React.FC = () => {
    // Use the useContext hook to access the context value
    const { theme, toggleTheme } = useContext(ThemeContext);
  
    return (
      <div>
        {/* <p className='themeTitleText'>Current theme: {theme}</p> */}
        <button onClick={toggleTheme} className={theme + 'ButtonTheme'} >Toggle Theme</button>
      </div>
    );
  };