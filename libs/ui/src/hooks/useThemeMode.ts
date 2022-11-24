import { useCallback, useEffect } from 'react';
import { useAtom } from 'jotai';
import { ThemeMode, themeModeAtom } from '../state';

const THEME_MODE = 'themeMode';

export default function useThemeMode(): readonly [ThemeMode, () => void] {
  const [theme, setTheme] = useAtom(themeModeAtom);

  useEffect(() => {
    const _mode = localStorage.getItem(THEME_MODE);
    if (!_mode) {
      localStorage.setItem(THEME_MODE, theme);
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
