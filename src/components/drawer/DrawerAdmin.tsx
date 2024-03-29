// library
import {
  Box,
  Drawer,
  Icon,
  List,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

// icons
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

//style
import {
  StyledBox,
  StyledItemText,
  StyledListItem,
  StyledListItemIcon,
  StyledNavLink,
} from "./StyledDrawer";

// store
import { logout } from "../../redux/store/reducers/auth/auth.action";
import { AppDispatch, useTypedSelector } from "../../redux/store";

import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";

const links = [
  {
    text: "Профиль",
    route: "profile",
    icon: PersonRoundedIcon,
  },
  {
    text: "Товары",
    route: "announcement",
    icon: Inventory2RoundedIcon,
  },
  {
    text: "Заказы",
    route: "order",
    icon: LocalShippingRoundedIcon,
  },
  {
    text: "Пользователи",
    route: "user",
    icon: GroupRoundedIcon,
  },
  {
    text: "Магазины",
    route: "shop",
    icon: StoreRoundedIcon,
  },
];

const DrawerAdmin = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Drawer
      sx={{
        width: "300px",
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: "300px",
          boxSizing: "border-box",
          borderRight: 0,

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Stack>
        <NavLink
          to="/app/home"
          style={{ textDecoration: "none", color: "#000", fontSize: "27px" }}
        >
          <Toolbar sx={{ justifyContent: "center", mt: "23px", mb: "23px" }}>
            <Box
              sx={{ fontWeight: 700, letterSpacing: "1px", fontSize: "32px" }}
            >
              iSandyq
            </Box>
          </Toolbar>
        </NavLink>
        <Box sx={{ width: "300px", height: "1px", background: "#2398AB" }} />
        <List sx={{ p: 0, pt: "40px" }}>
          {links.map((row, index) => (
            <StyledNavLink to={row.route} key={index}>
              <StyledListItem>
                <StyledListItemIcon>
                  <Icon component={row.icon} />
                </StyledListItemIcon>
                {row.text}
              </StyledListItem>
            </StyledNavLink>
          ))}
        </List>
      </Stack>
      <Stack>
        <List>
          <StyledNavLink to="management">
            <StyledListItem>
              <StyledListItemIcon>
                <Icon component={SettingsOutlinedIcon} />
              </StyledListItemIcon>
              Настройки
            </StyledListItem>
          </StyledNavLink>
          <StyledNavLink to="">
            <StyledListItem
              onClick={() => dispatch(logout())}
              sx={{ color: "#F18989", mb: "35px" }}
            >
              <StyledListItemIcon>
                <Icon sx={{ color: "#F18989" }} component={LogoutRoundedIcon} />
              </StyledListItemIcon>
              Выйти
            </StyledListItem>
          </StyledNavLink>
        </List>
      </Stack>
    </Drawer>
  );
};

export default DrawerAdmin;
