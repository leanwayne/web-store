import {createMuiTheme} from '@material-ui/core/styles';

// const defaultTheme = createMuiTheme({});

const colorTheme = createMuiTheme({
    palette: {
        text: {
            primary: '#FFF',
        },
        primary: {
            light: '#0ABDF7',
            main: '#0393D4',
            dark: '#023877',
        },
        secondary: {
            light: '#BECFD7',
            main: '#7DA0B0',
            dark: '#475A63',
        },
    },
})

export const theme = createMuiTheme({
    ...colorTheme,
    shape: {
        borderRadius: 5,
    },
});
