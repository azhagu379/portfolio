import React from "react";
import { styled, Theme, useTheme } from "@mui/material/styles";
import Link from "next/link";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Icon } from "@iconify/react";
import { CSSObject } from "@emotion/react";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  position: "relative",
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  right: "-15px",
  transform: "translateY(-50%)",
  borderRadius: "50%",
  boxShadow: theme.shadows[3],
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth - 20,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  // border: `2px solid ${theme.palette.secondary.main}`, // Yellow outline for drawer
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  // border: `2px solid ${theme.palette.secondary.main}`, // Yellow outline for drawer
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface SideDrawerProps {
  open: boolean;
  handleDrawerClose: () => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ open, handleDrawerClose }) => {
  const theme = useTheme();

  const iconSize = 28; // Adjust size as needed

  const menuItems = [
    {
      text: "Home",
      icon: <Icon icon="ic:round-home" width={iconSize} height={iconSize} />,
      link: "/",
    },
    {
      text: "About",
      icon: (
        <Icon
          icon="tabler:user-code"
          width={iconSize}
          height={iconSize}
        />
      ),
      link: "/about",
    },
    {
      text: "Skills",
      icon: <Icon icon="hugeicons:knowledge-02" width={iconSize} height={iconSize} />,
      link: "/skills",
    },
    {
      text: "Contact",
      icon: (
        <Icon icon="fluent:mail-24-regular" width={iconSize} height={iconSize} />
      ),
      link: "/contact",
    },
  ];
  
  const bottomItems = [
    {
      text: "Tutorial",
      icon: (
        <Icon
         icon="hugeicons:laptop-programming"
          width={iconSize}
          height={iconSize}
        />
      ),
      link: "/tutorial",
    },
    {
      text: "Blog",
      icon: (
        <Icon icon="material-symbols:menu-book-outline" width={iconSize} height={iconSize} />
      ),
      link: "/blog",
    },
  ];

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <StyledIconButton onClick={handleDrawerClose}>
          {open ? (
            <ChevronLeftIcon sx={{ color: theme.palette.primary.main }} />
          ) : (
            <ChevronRightIcon sx={{ color: theme.palette.primary.main }} />
          )}
        </StyledIconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              component={Link}
              href={item.link}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:hover .MuiListItemIcon-root": {
                  color: theme.palette.secondary.main, // Change color on hover
                },
                transition: "all 0.3s ease", // Smooth hover effect
              }}>
              <ListItemIcon
                className="MuiListItemIcon-root"
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: theme.palette.primary.main, // Default color
                  transition: "color 0.3s ease", // Smooth color transition
                }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ marginTop: "auto" }}>
        {bottomItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              component={Link}
              href={item.link}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:hover .MuiListItemIcon-root": {
                  color: theme.palette.secondary.main, // Change color on hover
                },
                transition: "all 0.3s ease", // Smooth hover effect
              }}>
              <ListItemIcon
                className="MuiListItemIcon-root"
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: theme.palette.primary.main, // Default color
                  transition: "color 0.3s ease", // Smooth color transition
                }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideDrawer;
