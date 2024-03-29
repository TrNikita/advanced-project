import { useContext } from 'react';
import { Theme } from '../../../const/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface UseThemeResult {
	theme: Theme;
	toggleTheme: (saveAction?: (theme: Theme) => void) => void;
}

export function useTheme(): UseThemeResult {
	const { theme, setTheme } = useContext(ThemeContext);

	if (theme) {
		console.log('theme', theme);
		document.body.className = theme;
	}

	const toggleTheme = (saveAction?: (theme: Theme) => void) => {
		let newTheme: Theme;
		switch (theme) {
			case Theme.DARK:
				newTheme = Theme.LIGHT;
				break;
			case Theme.LIGHT:
				newTheme = Theme.MAGENTA;
				break;
			case Theme.MAGENTA:
				newTheme = Theme.DARK;
				break;
			default:
				newTheme = Theme.LIGHT;
		}

		console.log('newTheme', newTheme);

		setTheme?.(newTheme);
		document.body.className = newTheme;
		// localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);

		saveAction?.(newTheme);
	};
	return {
		theme: theme || Theme.LIGHT,
		toggleTheme,
	};
}
