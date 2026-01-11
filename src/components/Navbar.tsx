import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ContactList } from "./ContactList";

import { Themes, type SubRoute } from "../shared/types";
import { HomeMenu } from "./index";

import CircleIcon from "@mui/icons-material/Circle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import nav from "../data/navigation.json";
import { navParser } from "../utils";
import styles from "./Navbar.module.scss";
import ThemeSwitchButton from "./ThemeSwitch";

interface NavbarProps {
  onThemeChange?: (theme: Themes) => void;
}

function Navbar({ onThemeChange }: NavbarProps) {
  const navigation = useNavigate();
  const location = useLocation();

  const navData = navParser(nav);

  const [subRoutes, setSubRoutes] = useState<SubRoute[]>(
    navData.navigation[0].children || []
  );
  const [currentSubRoute, setCurrentSubRoute] = useState<string>(
    navData.navigation?.[0]?.children?.[0]?.path || ""
  );
  const [currentTheme, setCurrentTheme] = useState<Themes>(Themes.Dark);

  useEffect(() => {
    if (currentSubRoute.length !== 0 && currentSubRoute !== location.pathname) {
      navigation(currentSubRoute);
    }
  }, [currentSubRoute, navigation, location.pathname]);

  const navLinks = (
    <List>
      {navData.navigation.map((item) => (
        <ListItemButton
          key={item.path}
          onClick={() => {
            setSubRoutes(item.children || []);
            setCurrentSubRoute(item?.children?.[0]?.path || "");
          }}
        >
          <ListItemText
            className={styles.primaryNavItems}
            primary={item.title}
          />
        </ListItemButton>
      ))}
    </List>
  );

  const updatedSubRoutes = (
    <>
      {subRoutes.length > 0 && (
        <List className={styles.secondaryNavList}>
          {subRoutes.map((subItem: SubRoute) => (
            <ListItemButton
              key={subItem.path}
              onClick={() => {
                setCurrentSubRoute(subItem.path);
              }}
            >
              <div className={styles.subNavItemButton}>
                <span
                  className={
                    currentSubRoute === subItem.path
                      ? `${styles.secondaryNavItems} ${styles.selectedSubNavItem}`
                      : styles.secondaryNavItems
                  }
                >
                  {subItem.title}
                </span>
                {currentSubRoute === subItem.path ? (
                  <CircleIcon fontSize="small" className={styles.activeIcon} />
                ) : (
                  <RadioButtonUncheckedIcon
                    fontSize="small"
                    className={styles.inactiveIcon}
                  />
                )}
              </div>
            </ListItemButton>
          ))}
        </List>
      )}
    </>
  );

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <HomeMenu
            onclick={() => {
              setSubRoutes([] as SubRoute[]);
              setCurrentSubRoute("");
            }}
            currentTheme={currentTheme}
          />
        </div>
        <div className={styles.navLinks}>{navLinks}</div>
        <ContactList />
      </nav>
      <nav className={`${styles.navbar} ${styles.subNavbar}`}>
        {updatedSubRoutes}
        <ThemeSwitchButton
          onChange={(theme: Themes): void => {
            onThemeChange?.(theme);
            setCurrentTheme(theme);
          }}
        />
      </nav>
    </>
  );
}

Navbar.displayName = "Navbar";

export default Navbar;
