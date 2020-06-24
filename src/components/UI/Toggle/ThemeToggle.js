import React, { useContext } from "react";


import { ThemeSelectorContext } from "../../../utils/themer"
const ThemeToggle = (props) => {

  const { toggleTheme } = useContext(ThemeSelectorContext);
  return (
    <>
      <i className="fas fa-palette" title="Change Theme" onClick={toggleTheme}></i>
    </>
  )

}
export default ThemeToggle