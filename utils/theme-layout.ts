import {createMuiTheme} from '@material-ui/core/styles';
import {theme as defaultTheme} from './theme';

export const layoutTheme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            root: {
                width: '100%',
            },
            paper: {
                width: '100%',
                background: '#fff',
                boxShadow: '1px 0 2px rgba(0, 0, 0, 0.2)',
            },
        },
        MuiAppBar: {
            root: {
                backgroundColor: '#fff !important',
                [defaultTheme.breakpoints.up('md')]: {
                    backgroundColor: 'transparent !important',
                },
            },
        },
        MuiToolbar: {
            root: {
                justifyContent: 'space-between',
                [defaultTheme.breakpoints.up('md')]: {
                    justifyContent: 'flex-end',
                }
            },
        },
        MuiListItem: {
            root: {
                borderLeft: `2px solid transparent`,
                color: defaultTheme.palette.secondary.main,
                '&:hover': {
                    color: defaultTheme.palette.primary.light,
                },
                '&$selected': {
                    color: defaultTheme.palette.primary.main,
                    backgroundColor: 'rgba(3, 147, 212, 0.05)',
                    borderLeftColor: defaultTheme.palette.primary.main,
                    '&:hover': {
                        backgroundColor: 'rgba(3, 147, 212, 0.05)',
                    },
                },
            },
            button: {
                paddingLeft: defaultTheme.spacing(2),
                paddingRight: defaultTheme.spacing(2),
                '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
            },
        },
        MuiListItemIcon: {
            root: {
                minWidth: 0,
                marginRight: defaultTheme.spacing(1),
                color: 'inherit',
            },
        },
    },
}, defaultTheme);
