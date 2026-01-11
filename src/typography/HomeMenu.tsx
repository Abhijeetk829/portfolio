import { Link } from "react-router-dom";
import signatureDark from "../assets/signatureDark.svg";
import signatureLight from "../assets/signatureLight.svg";
import { Themes } from "../shared/types";
import styles from "./HomeMenu.module.scss";

interface HomeMenuProps {
  className?: string;
  onclick?: () => void;
  currentTheme: Themes;
}

export function HomeMenu({ className, onclick, currentTheme }: HomeMenuProps) {
  return (
    <>
      <Link
        to="/"
        className={className}
        color="primary"
        type="phone"
        onClick={onclick}
      >
        <img
          src={currentTheme === Themes.Dark ? signatureDark : signatureLight}
          alt="Home"
          className={styles.signature}
        />
      </Link>
    </>
  );
}

HomeMenu.displayName = "HomeMenu";

export default HomeMenu;
