import { useCallback } from 'react';
import { useAtom } from 'jotai';
import { ThemeMode, themeModeAtom } from '../state';

export default function useThemeMode(): readonly [ThemeMode, () => void] {
  const [theme, setTheme] = useAtom(themeModeAtom);

  const toggle = useCallback(() => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, [setTheme, theme]);

  return [theme, toggle] as const;
}
