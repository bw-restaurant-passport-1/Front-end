import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = () => {
	const [ darkMode, setDarkMode ] = useLocalStorage('darkMode', true);
	useEffect(
		() => {
			if (darkMode === true) {
				document.body.classList.add('dark-mode');
				document.querySelector('.nav_bar').classList.add('dark-mode-nav');
			} else {
				document.body.classList.remove('dark-mode');
				document.querySelector('.nav_bar').classList.remove('dark-mode-nav');
			}
		},
		[ darkMode ],
	);
	return [ darkMode, setDarkMode ];
};
