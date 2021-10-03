import { useCallback, useContext, useState } from "react"
import { ThemeContext } from './ThemeContext';

export const Box = () => {
  const theme = useContext(ThemeContext);

  const [themeState, setThemeState] = useState(theme.primary);

  const toggleBtn = useCallback(() => {
    if (themeState === theme.primary) {
      setThemeState(theme.dark);
    } else {
      setThemeState(theme.primary);
    }
  }, [themeState, theme])

  return <div style={{
    backgroundColor: themeState.main, color: themeState.text,
    height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    fontSize: '2rem', transition: 'all 200ms ease-in-out'
  }}>React with TS 😁<button style={{ padding: '5px 10px'}} onClick={toggleBtn}>Theme Change</button></div>
}