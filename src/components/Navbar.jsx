import React from "react"; 
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { Menu } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.Toolbar,
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <IconButton color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h4" className={classes.title}>
                        Menu
                    </Typography>

                    <Button variant="text" color="inherit">
                        Login</Button>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
};

export default Navbar;