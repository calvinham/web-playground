import { atomWithStorage } from 'jotai/utils';

export type ThemeMode = 'dark' | 'light';

export const themeModeAtom = atomWithStorage<ThemeMode>('themeMode', 'light');
