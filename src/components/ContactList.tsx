import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import contactData from "../data/contact.json";
import styles from "./ContactList.module.scss";

interface ContactListProps {
  className?: string;
}

export function ContactList({ className }: ContactListProps) {
  return (
    <>
      <div className={styles.contactContainer}>
        <Typography
          variant="caption"
          color="textSecondary"
          align="center"
          fontSize={12}
        >
          © {new Date().getFullYear()} Abhijeet Kumar.
          <br />
          All rights reserved.
        </Typography>
      </div>
      <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
      <div
        className={
          className
            ? `${styles.iconContainer} ${className}`
            : styles.iconContainer
        }
      >
        {contactData.contacts.map((item) => (
          <div key={item.type} className={styles.contactItem}>
            {item.type === "email" && (
              <Link to={item.prefix + item.value}>
                <EmailIcon color="primary" />
              </Link>
            )}
            {item.type === "whatsapp" && (
              <Link to={item.prefix + item.value}>
                <LocalPhoneIcon color="primary" />
              </Link>
            )}
            {item.type === "linkedin" && (
              <Link to={item.prefix + item.value}>
                <LinkedInIcon color="primary" />
              </Link>
            )}
            {item.type === "instagram" && (
              <Link to={item.prefix + item.value}>
                <InstagramIcon color="primary" />
              </Link>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

ContactList.displayName = "ContactList";

export default ContactList;
