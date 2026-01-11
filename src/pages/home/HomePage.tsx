import About from "./About";
import Achievements from "./Achievements";

import { PAGEIDS } from "../../shared/pageIds";
import type { PageProps } from "../../shared/types";
import homePageStyles from "./HomePage.module.scss";
import Personal from "./Personal";
import Professional from "./Professional";

export function HomePage({ className, id, styles }: PageProps) {
  return (
    <div
      id={id}
      className={
        className
          ? `${homePageStyles.homePageContainer} ${className}`
          : homePageStyles.homePageContainer
      }
      style={styles}
    >
      <About id={PAGEIDS.ABOUT} styles={styles} />
      <Personal id={PAGEIDS.PERSONAL} styles={styles} />
      <Professional id={PAGEIDS.PROFESSIONAL} styles={styles} />
      <Achievements id={PAGEIDS.ACHIEVEMENTS} styles={styles} />
    </div>
  );
}

HomePage.displayName = "HomePage";

export default HomePage;
