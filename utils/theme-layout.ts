import {createMuiTheme} from '@material-ui/core/styles';
import {theme as defaultTheme} from './theme';

export const layoutTheme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            root: {
                width: '100%',
                height: '58px !important'
            },
            paper: {
                width: '100%',
                backgroundColor: "#fd3c3d",
                boxShadow: '1px 0 2px rgba(0, 0, 0, 0.2)',
                height: '58px !important'
            },
        },
        MuiGrid:{
            root:{
                justifyContent: 'center',
            }
        }
    },
}, defaultTheme);
