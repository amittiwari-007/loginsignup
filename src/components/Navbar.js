import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { ContactPage, Home, Login } from '@mui/icons-material';
import '@fontsource/roboto';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));


export default function Navbar() {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };


    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <div>
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            
            <MenuItem>
                <IconButton component={NavLink} to='/' size="large" aria-label="" color="inherit">
                    <Home />
                </IconButton>
                <p>Home</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    component={NavLink} to='/contact'
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <ContactPage />
                </IconButton>
                <p>Contact</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    component={NavLink} to='/login'
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <Login />
                </IconButton>
                <p>Login</p>
            </MenuItem>
        </Menu>
        </div>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{fontFamily: 'Roboto, sans-serif',  display: { xs: 'none', sm: 'block' } }}
                    >
                        CRUD app with Authentication
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton component={NavLink} to='/' size="large" aria-label="" color="inherit">
                            <Home /> <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                ml={1}
                                mt={0.5}
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                Home
                            </Typography>
                        </IconButton>
                        <IconButton
                            component={NavLink} to='/contact'
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <ContactPage /> <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                ml={1}
                                mt={0.5}
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                Contact
                            </Typography>
                        </IconButton>
                        <IconButton
                            component={NavLink} to='/login'
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Login /> <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                ml={1}
                                mt={0.5}
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                Login
                            </Typography>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Box>
    );
}