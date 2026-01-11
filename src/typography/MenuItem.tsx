import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import styles from "./MenuItem.module.scss";

interface MenuItemProps {
  hasSubMenu: boolean;
  text: string;
  to: string;
  className?: string;
}

export function MenuItem({ hasSubMenu, text, to, className }: MenuItemProps) {
  return (
    <>
      {hasSubMenu ? (
        <Typography
          variant="h6"
          className={
            className ? `${styles.menuItem} ${className}` : styles.menuItem
          }
        >
          {text}
        </Typography>
      ) : (
        <Typography
          variant="h6"
          component={Link}
          to={to}
          className={
            className ? `${styles.menuItem} ${className}` : styles.menuItem
          }
        >
          {text}
        </Typography>
      )}
    </>
  );
}

MenuItem.displayName = "MenuItem";

export default MenuItem;
