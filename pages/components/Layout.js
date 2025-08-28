import { AppBar, Box, Stack, Toolbar, Typography, Button, List, ListItem, ListItemText, Drawer, IconButton, Divider, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, ToggleButtonGroup, ToggleButton, FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";
import Link from "next/link";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Layout = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedForm, setSelectedForm] = useState("user");
    const [authMode, setAuthMode] = useState("signin");
    const [open, setOpen] = useState(false)
    const [age, setAge] = useState('10');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleClose = () => {
        setOpen(false);
        setSelectedForm("user");
        setAuthMode("signin");
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };


    // Dependency array, call whenever `user` changes

    const drawerContent = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem>
                    <ListItemText primary={
                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} sx={{ pr: 2 }}>
                            <img src="/images/logo.svg" alt="" width={90} height={90} />
                            <IconButton size="small" aria-label="" onClick={toggleDrawer(false)} sx={{ border: "1px solid #000", }}>
                                <CloseIcon sx={{ fontSize: 15, color: "#000", }} />
                            </IconButton>
                        </Stack>} />
                </ListItem>

                {['Platform', 'Solutions', 'Resources', 'Pricing', 'Help center',].map((text) => (
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} href={text === 'Home' ? '/' : `/${text.toLowerCase().replace(/\s+/g, '-')}`} passHref key={text}>
                        <ListItem button key={text} className="bold" >
                            <ListItemText className="bold" primary={text} />
                        </ListItem>
                    </Link>
                ))}

                {/* {userId ? (
                    <>
                        <Link href={"/"} passHref>
                            <ListItem button >
                                <UserButton />
                            </ListItem>
                        </Link>
                        <ListItem button >
                            <ListItemText primary="Sign Out" />
                        </ListItem>
                    </>
                ) : (
                    <Link href="/sign-in" passHref style={{ textDecoration: "none", color: "inherit" }}>
                        <ListItem button>
                            <ListItemText primary="Sign In" />
                        </ListItem>
                    </Link>
                )} */}
            </List>
        </Box>
    );

    return (
        <Box>
            <AppBar position="sticky" sx={{
                padding: "0px", boxShadow: "none", borderBottom: "1px solid #f6f6f6",  // Ensure the image covers the whole area
                backgroundColor: "#fff", color: "#000"
            }}>
                <Toolbar sx={{
                    width: "90%", maxWidth: "1500px", margin: "0 auto", padding: "0px", '@media (min-width: 600px)': {
                        paddingLeft: '0px',
                        paddingRight: '0px',
                    },
                    height: 94
                }}>
                    <Stack direction={"row"} width={"100%"} justifyContent={"space-between"} alignItems={"center"}>
                        <Stack direction={"row"} alignItems={"center"} spacing={6}>
                            <img src="/images/logo.svg" alt="" width={90} height={90} />
                            <Stack direction={"row"} alignItems={"center"} spacing={3} sx={{ display: { xs: 'none', md: "flex" } }}>
                                <Typography className="bold" fontSize={15} fontWeight={700} color="#000" component={Button} textTransform={"capitalize"} endIcon={<ExpandMoreIcon sx={{ color: "gray" }} />}>Platform</Typography>
                                <Typography className="bold" fontSize={15} fontWeight={700} color="#000" component={Button} textTransform={"capitalize"} endIcon={<ExpandMoreIcon sx={{ color: "gray" }} />}>Solutions</Typography>
                                <Typography className="bold" fontSize={15} fontWeight={700} color="#000" component={Button} textTransform={"capitalize"} endIcon={<ExpandMoreIcon sx={{ color: "gray" }} />}>Resources</Typography>
                                <Typography className="bold" fontSize={15} fontWeight={700}>Pricing</Typography>
                                <Typography className="bold" fontSize={15} fontWeight={700}>Help center</Typography>
                            </Stack>

                        </Stack>

                        {/* Hamburger menu for mobile */}
                        <Stack direction={"row"} alignItems={"center"} spacing={2}>
                            <Button variant="outlined" color="ash" sx={{ textTransform: "capitalize", color: "#000", display: { xs: 'none', md: "flex" }, border: "none" }} endIcon={<ExpandMoreIcon sx={{ color: "gray" }} />}>
                                <img src="../images/en.png" alt="" width={24} />
                            </Button>
                            <Button variant="outlined" color="ash" sx={{ textTransform: "capitalize", color: "#000", display: { xs: 'none', md: "flex" }, borderRadius: "8px" }} endIcon={<ExpandMoreIcon sx={{ color: "gray" }} />}>
                                Go to
                            </Button>
                            <Button variant="contained" color="primary" onClick={() => setOpen(true)} sx={{ textTransform: "capitalize", borderRadius: "8px", display: { xs: 'none', md: "flex" } }}>
                                Try for free
                            </Button>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ display: { xs: 'flex', md: "none" } }}
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>

                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>

            {/* Drawer for mobile menu */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerContent}
            </Drawer>

            <Box sx={{ width: "90%", maxWidth: "1500px", margin: "0 auto", py: 2 }}>
                {children}
            </Box>

            <Box sx={{ backgroundColor: "#dc3173", py: 6, color: "#fff" }}>
                <Stack direction={"column"} spacing={3} sx={{ width: "90%", maxWidth: "1500px", margin: "0 auto", }} >

                    <Typography className="bold" fontSize={16}  >
                        Get advanced tools to build your ride-hailing brand
                    </Typography>
                    <Stack direction={"row"} spacing={2}>
                        <Button variant="contained" color="ash" sx={{ color: "#000", textTransform: "capitalize" }}>
                            Platform demo
                        </Button>
                        <Button variant="contained" color="ash" sx={{ color: "#000", textTransform: "capitalize" }}>
                            Try Dispatch system
                        </Button>
                    </Stack>
                </Stack>
                <br />
                <br />
                <Divider

                    sx={{ width: "90%", maxWidth: "1500px", margin: "0 auto", }}
                    //   variant="fullWidth"
                    orientation="horizontal"

                />
                <br />
                <Stack direction={{ lg: "row", xs: "column" }} justifyContent={"space-between"} sx={{ pb: 3, width: "90%", maxWidth: "1500px", margin: "0 auto", }}>
                    <Stack direction={"column"} spacing={2} width={"100%"}  >
                        <Typography className="bold" fontSize={16} color="#808080" >
                            Company
                        </Typography>
                        <Typography className="bold" fontSize={16} >
                            About us
                        </Typography>
                        <Typography className="bold" fontSize={16} >
                            Careers
                        </Typography>
                        <Typography className="bold" fontSize={16} >
                            Leader Board
                        </Typography>
                    </Stack>
                    <Stack direction={"column"} spacing={2} width={"100%"} >
                        <Typography className="bold" fontSize={16} color="#808080" >
                            Product
                        </Typography>
                        <Typography className="bold" fontSize={16} >
                            Platform overview
                        </Typography>
                        <Typography className="bold" fontSize={16} >
                            Features overview
                        </Typography>
                        <Typography className="bold" fontSize={16} >
                            Pricing
                        </Typography>
                    </Stack>
                    <Stack direction={"column"} spacing={2} width={"100%"} >
                        <Typography className="bold" fontSize={16} color="#808080" >
                            Compare
                        </Typography>
                        <Typography className="bold" fontSize={16} >
                            Ride-hailing apps overview
                        </Typography>
                        <Typography className="bold" fontSize={16} >
                            Top Ride-Hailing Platforms in Asia
                        </Typography>
                        <Typography className="bold" fontSize={16} >
                            Top Dispatch Systems
                        </Typography>
                        <Typography className="bold" fontSize={16} >
                            vs. Atom Mobility
                        </Typography>
                        <Typography className="bold" fontSize={16} >
                            Mobility Infotech
                        </Typography>
                        <Typography className="bold" fontSize={16} >
                            vs. Jugnoo
                        </Typography>
                    </Stack>
                    <Stack direction={"column"} spacing={2} width={"100%"} >
                        <Typography className="bold" fontSize={16} color="#808080" >
                            Resources
                        </Typography>
                        <Typography className="bold" fontSize={16} >
                            Help center
                        </Typography>
                        <Typography className="bold" fontSize={16} >
                            Blog
                        </Typography>
                        <Typography className="bold" fontSize={16} >
                            Case studies
                        </Typography>
                        <Typography className="bold" fontSize={16} >
                            Webinars
                        </Typography>
                        <Typography className="bold" fontSize={16} >
                            Contact us
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction={"row"} spacing={8} alignItems={"center"} justifyContent={"space-between"} sx={{ pb: 3, width: "90%", maxWidth: "1500px", margin: "0 auto", }}>

                    <Stack direction={"column"} spacing={2}>
                        <Typography className="bold" fontSize={16} color="#808080" >
                            try customer app
                        </Typography>
                        <Stack direction={"row"} spacing={2}>
                            <img src="../images/SVG (3).png" alt="" width={141} />
                            <img src="../images/Group (5).png" alt="" width={141} />
                        </Stack>
                    </Stack>
                    <Stack direction={"column"} spacing={2}>
                        <img src="../images/logo1.png" alt="" width={141} />
                    </Stack>
                </Stack>
                <br />
                <Stack direction={"row"} spacing={8} alignItems={"center"} justifyContent={"space-between"} sx={{ pb: 3, width: "90%", maxWidth: "1500px", margin: "0 auto", }}>

                    <Stack direction={"column"} spacing={2} >
                        <Stack direction={"row"} spacing={2}>
                            <img src="../images/SVG (4).png" alt="" width={36} />
                            <img src="../images/SVG (5).png" alt="" width={36} />
                            <img src="../images/SVG (6).png" alt="" width={36} />
                        </Stack>
                    </Stack>

                </Stack>
                <Typography className="bold" fontSize={16} pt={3} textAlign={"center"} >
                    Copyright©2025 Made By EtherTech
                </Typography>
            </Box>
            <Dialog open={open} onClose={() => setOpen(false)} >
                <DialogTitle>
                    {authMode === "signin" ? "Sign In" : "Sign Up"} as{" "}
                    {selectedForm === "user" ? "User" : "Driver"}
                </DialogTitle>

                <DialogContent>
                    {/* Switch User/Driver */}
                    <ToggleButtonGroup
                        value={selectedForm}
                        exclusive
                        onChange={(e, val) => val && setSelectedForm(val)}
                        sx={{ mb: 2 }}
                        fullWidth
                    >
                        <ToggleButton
                            value="user"
                            sx={{
                                "&.Mui-selected": {
                                    backgroundColor: "#DC3173",
                                    color: "#fff",
                                    "&:hover": { backgroundColor: "#c02b66" }, // Hover color
                                },
                            }}
                        >
                            User
                        </ToggleButton>
                        <ToggleButton
                            value="driver"
                            sx={{
                                "&.Mui-selected": {
                                    backgroundColor: "#DC3173",
                                    color: "#fff",
                                    "&:hover": { backgroundColor: "#c02b66" },
                                },
                            }}
                        >
                            Driver
                        </ToggleButton>
                    </ToggleButtonGroup>

                    {/* Switch SignIn/SignUp */}
                    <ToggleButtonGroup
                        value={authMode}
                        exclusive
                        onChange={(e, val) => val && setAuthMode(val)}
                        sx={{ mb: 2 }}
                        fullWidth
                    >
                        <ToggleButton
                            value="signin"
                            sx={{
                                "&.Mui-selected": {
                                    backgroundColor: "#DC3173",
                                    color: "#fff",
                                    "&:hover": { backgroundColor: "#c02b66" },
                                },
                            }}
                        >
                            Sign In
                        </ToggleButton>
                        <ToggleButton
                            value="signup"
                            sx={{
                                "&.Mui-selected": {
                                    backgroundColor: "#DC3173",
                                    color: "#fff",
                                    "&:hover": { backgroundColor: "#c02b66" },
                                },
                            }}
                        >
                            Sign Up
                        </ToggleButton>
                    </ToggleButtonGroup>


                    {/* Form Fields */}
                    {authMode === "signup" && (
                        <TextField margin="dense" label="Full Name" fullWidth variant="outlined" size="small" />
                    )}
                    <TextField margin="dense" label="Email" type="email" fullWidth variant="outlined" size="small" />
                    {authMode === "signup" && (
                        <TextField margin="dense" label="Phone" fullWidth variant="outlined" size="small" />
                    )}
                   
                    {authMode === "signup" && (

                        <Select
                            labelId="demo-simple-select-label"
                            size="small"
                            id="demo-simple-select"
                            value={age}
                            // label="Age"
                            fullWidth
                            onChange={handleChange}
                           sx={{mt:1}}
                        >
                            <MenuItem value={10}>Gender</MenuItem>
                            <MenuItem value={20}>Male</MenuItem>
                            <MenuItem value={30}>Female</MenuItem>
                        </Select>

                    )}
                    <TextField margin="dense" label="Password" type="password" fullWidth variant="outlined" size="small" />

                    {authMode === "signup" && selectedForm === "driver" && (
                        <>

                            <Typography mt={1}>Diving License :</Typography>
                            <TextField margin="dense" type="file" fullWidth variant="outlined" size="small" /></>

                    )}
                    {authMode === "signup" && selectedForm === "driver" && (
                        <TextField margin="dense" label="Model Number" fullWidth variant="outlined" size="small" />

                    )}

                    {authMode === "signup" && selectedForm === "driver" && (
                        <>
                            <Typography mt={1}>Other Information :</Typography>
                            <TextField margin="dense" type="file" fullWidth variant="outlined" size="small" /></>

                    )}
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" onClick={handleClose}>
                        {authMode === "signin" ? "Sign In" : "Sign Up"}
                    </Button>
                </DialogActions>

            </Dialog>
        </Box>
    );
};

export default Layout;
