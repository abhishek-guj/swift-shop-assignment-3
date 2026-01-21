import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const useTheme = () => {
  const context = useContext(ThemeContext)
  if(!context) throw new Error("useTheme must be used in themeContext provider");

  return context
}

export default useTheme