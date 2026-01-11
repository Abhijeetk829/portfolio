import { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ContactList } from "./ContactList";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Typography from "@mui/material/Typography";
import { HomeMenu, MenuItem, SubMenuItem } from "./index";

import navData from "../data/navigation.json";
import styles from "./Navbar.module.scss";

function Navbar() {
  const [expandedAccordion, setExpandedAccordion] = useState<string>("");

  const handleAccordionChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedAccordion(isExpanded ? panel : "");
    };

  const navLinks = navData.navigation.map((item) => (
    <Accordion
      className={styles.accordion}
      key={item.path}
      expanded={expandedAccordion === item.path}
      onChange={handleAccordionChange(item.path)}
      disableGutters
      elevation={0}
      square
      slotProps={{ transition: { unmountOnExit: true } }}
    >
      <AccordionSummary
        className={styles.accordionSummary}
        expandIcon={item.children?.length ? <ExpandMoreIcon /> : null}
      >
        {item.children?.length ? (
          <Typography>{item.title}</Typography>
        ) : (
          <MenuItem
            hasSubMenu={!!item.children?.length}
            text={item.title}
            to={item.path}
          />
        )}
      </AccordionSummary>
      {item.children?.length && (
        <AccordionDetails>
          <List className={styles.nestedList} disablePadding>
            {item.children.map((child) => (
              <ListItem
                key={child.path}
                disablePadding
                className={styles.nestedListItemContainer}
              >
                <SubMenuItem text={child.title} to={child.path} />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      )}
    </Accordion>
  ));

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <HomeMenu />
      </div>
      <div className={styles.navLinks}>{navLinks}</div>
    </nav>
  );
}

Navbar.displayName = "Navbar";

export default Navbar;
