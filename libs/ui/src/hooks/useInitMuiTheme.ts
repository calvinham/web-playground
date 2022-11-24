import { useMemo } from 'react';
import { themeOptions } from "../theme";
import useThemeMode from "./useThemeMode";
import { responsiveFontSizes, createTheme } from "@mui/material/styles";

export default function useInitMuiTheme() {
  const [themeMode] = useThemeMode();
  
  const _theme = useMemo(() => {
    let theme = createTheme(themeOptions(themeMode));
    theme = responsiveFontSizes(theme);
    return theme;
  }, [themeMode]);
  
  return _theme;
}