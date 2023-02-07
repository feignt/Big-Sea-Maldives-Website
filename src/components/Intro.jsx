import React from "react";
import { AppBar, Box, Button, Toolbar, Typography, Avatar, IconButton, Menu, MenuItem} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import '../styles.css'

function Intro(){
    const img = require("../img/logo.png");
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleClick = (event) => {
    const name = event.target.value
    const element = document.getElementById(name);
    if (element) {
        console.log(event.target.value)
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return( 
            <AppBar position = 'absolute' elevation={0} color="transparent">
                <Toolbar>
                    <Avatar
                        sx={{ mr: 1, display:{xs:'none', md:'flex'}}}
                        src={img}
                    />
                    <Typography variant = "h6" component="div" flexGrow={1} sx = {{color:'white', display:{xs:'none', md:'flex'}}} >
                    Big Sea Maldives
                    </Typography>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                        value = "seafood"
                        onClick={handleClick}
                        sx={{ mx: 1, my: 2, color: 'white', display: 'block' }}
                        >
                            Sea Food
                        </Button>
                        <Button
                        value = "castello"
                        onClick={handleClick}
                        sx={{ mx: 1, my: 2, color: 'white', display: 'block' }}
                        >
                            Castello
                        </Button>
                        <Button
                        sx={{ mx: 1, my: 2, color: 'white', display: 'block' }}
                        >
                            Vasorient
                        </Button>
                        <Button
                        sx={{ mx: 1, my: 2, color: 'white', display: 'block' }}
                        >
                            Other Items
                        </Button>
                        <Button
                        sx={{ mx: 1, my: 2, color: 'white', display: 'block' }}
                        >
                            Contact
                        </Button>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        sx={{color:'white'}}
                        >
                        <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                            >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Sea Food</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Castello</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Vasorient</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Other Items</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Contact</Typography>
                            </MenuItem>
                            </Menu>
                    </Box>
                         <Avatar
                            sx={{mr: 1, display:{xs:'flex', md:'none'}}}
                            src={img}
                        />
                    <Typography variant = "h6" component="div" flexGrow={1.5} sx = {{color:'white', display:{xs:'flex', md:'none'}}} >
                    Big Sea Maldives
                    </Typography>
                </Toolbar>

            </AppBar>
            
    );
}
export default Intro;