import React from "react";
import {
    Logout,
    Mail,
    Notifications,
    PersonAdd,
    SearchRounded,
    Settings,
} from "@mui/icons-material";
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    Divider,
    InputBase,
    ListItemIcon,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    Typography,
} from "@mui/material";
import { useState } from "react";
import Logo from "../assets/img/logoD.png";
import ManImg from "../assets/img/man.jpg";

const StyledToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`;

const DivLogo = styled(Box)`
    display: flex;
    align-items: center;
`;

const TypographyLogo = styled(Typography)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.up("sm")]: {
        display: "block",
    },
}));

const ImgLogo = styled("img")`
    width: 100%;
    height: 25px;
`;

const Search = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

const MenuBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "15px",
});

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "15px",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "5px",
}));

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <DivLogo>
                    <ImgLogo src={Logo} alt="LogoDoglez" />
                    <TypographyLogo variant="h6">Navbar</TypographyLogo>
                </DivLogo>
                <Search>
                    <SearchRounded sx={{ color: "primary.main" }} />
                    <InputBase fullWidth placeholder="search..." />
                </Search>
                <MenuBox>
                    <Icons>
                        <Badge badgeContent={4} color="error">
                            <Notifications />
                        </Badge>
                        <Badge badgeContent={2} color="error">
                            <Mail />
                        </Badge>
                    </Icons>
                    <UserBox
                        onClick={handleClick}
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                    >
                        <Avatar
                            alt="Man"
                            src={ManImg}
                            sx={{ width: "30px", height: "30px" }}
                        />
                        <Typography variant="body1">Dany</Typography>
                    </UserBox>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: "visible",
                                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                mt: 1.5,
                                "& .MuiAvatar-root": {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                "&:before": {
                                    content: '""',
                                    display: "block",
                                    position: "absolute",
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: "background.paper",
                                    transform: "translateY(-50%) rotate(45deg)",
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{
                            horizontal: "right",
                            vertical: "top",
                        }}
                        anchorOrigin={{
                            horizontal: "right",
                            vertical: "bottom",
                        }}
                    >
                        <MenuItem>
                            <Avatar /> Profile
                        </MenuItem>
                        <MenuItem>
                            <Avatar /> My account
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemIcon>
                                <PersonAdd fontSize="small" />
                            </ListItemIcon>
                            Add another account
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </MenuBox>
            </StyledToolbar>
        </AppBar>
    );
};

export default Navbar;
