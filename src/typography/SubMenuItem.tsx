import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

import styles from "./SubMenuItem.module.scss";

interface SubMenuItemProps {
  text: string;
  to: string;
  className?: string;
}

export function SubMenuItem({ text, to, className }: SubMenuItemProps) {
  return (
    <>
      <ListItemButton component={Link} to={to}>
        <ListItemText
          className={
            className
              ? `${styles.subMenuItem} ${className}`
              : styles.subMenuItem
          }
          primary={text}
        />
      </ListItemButton>
    </>
  );
}

SubMenuItem.displayName = "SubMenuItem";

export default SubMenuItem;
