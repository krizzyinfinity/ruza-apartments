import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  createTheme,
  Grid,
  makeStyles,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { useTranslation } from "react-i18next";

const styles = {
  textDecoration: "none",
  fontSize: "110%",
  color: "green",
  cursor: "pointer",
  marginLeft: 40,
  "&:hover": {
    color: "red",
    borderBottom: "1px solid white",
  },
};

const Navbar = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ background: "transparent", zIndex: 999 }}
      >
        <Toolbar>
          <Grid
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              display: "flex",
            }}
          >
            <Typography
              style={{ fontSize: "160%", color: "olive" }}
              variant="h4"
            >
              <Link style={{ textDecoration: "none", color: "green" }} to="/">
                {t("ruza")}
              </Link>
            </Typography>
            {isMobile ? (
              <DrawerComponent />
            ) : (
              <Box>
                <Link to="/" style={styles}>
                  {t("home")}
                </Link>

                <Link style={styles} to="/about">
                  {t("aboutUs")}
                </Link>
                <Link style={styles} to="/activities">
                  {t("activities")}
                </Link>
                <Link style={styles} to="/accommodation">
                  {t("accommodation")}
                </Link>
              </Box>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
