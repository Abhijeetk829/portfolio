import type { PageProps } from "../../shared/types";

const About = ({ id, styles, className }: PageProps) => {
  return (
    <div id={id} style={styles} className={className}>
      About Page
    </div>
  );
};

About.displayName = "About";
export default About;
