import type { PageProps } from "../../shared/types";

const Achievements = ({ id, styles, className }: PageProps) => {
  return (
    <div id={id} style={styles} className={className}>
      Achievements Page
    </div>
  );
};

Achievements.displayName = "Achievements";
export default Achievements;
