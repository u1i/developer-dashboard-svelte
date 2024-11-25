import { writable } from 'svelte/store';

const createThemeStore = () => {
    const { subscribe, set, update } = writable('light');

    return {
        subscribe,
        toggleTheme: () => {
            update(currentTheme => {
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', newTheme);
                return newTheme;
            });
        },
        setTheme: (theme) => {
            set(theme);
            document.documentElement.setAttribute('data-theme', theme);
        }
    };
};

export const theme = createThemeStore();
