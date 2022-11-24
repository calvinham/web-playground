import { useCallback, useEffect } from 'react';
import { useAtom } from 'jotai';
import { ThemeMode, themeModeAtom } from '../state';

export default function useThemeMode(): readonly [ThemeMode, () => void] {
  const [theme, setTheme] = useAtom(themeModeAtom);

  useEffect(() => {
    const _mode = localStorage.getItem('themeMode');
    if (!_mode) {
      localStorage.setItem('themeMode', theme);
    }
  }, [theme]);

  const toggle = useCallback(() => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, [setTheme, theme]);

  return [theme, toggle] as const;
}
