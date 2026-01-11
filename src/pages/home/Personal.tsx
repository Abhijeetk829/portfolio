import type { PageProps } from "../../shared/types";

const Personal = ({ id, styles, className }: PageProps) => {
  return (
    <div id={id} style={styles} className={className}>
      Personal Page
    </div>
  );
};

Personal.displayName = "Personal";
export default Personal;
