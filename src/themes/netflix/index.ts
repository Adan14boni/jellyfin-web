import createTheme, { type ThemeOptions } from '@mui/material/styles/createTheme';
import merge from 'lodash-es/merge';

import { DEFAULT_THEME_OPTIONS } from 'themes/defaults';

const options: ThemeOptions = {
    palette: {
        background: {
            default: '#141414',
            paper: '#141414'
        },
        primary: {
            main: '#e50914'
        },
        secondary: {
            main: '#e50914'
        }
    }
};

const theme = createTheme(merge({}, DEFAULT_THEME_OPTIONS, options));

export default theme;
