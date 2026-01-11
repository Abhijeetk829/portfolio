import type { PageProps } from "../../shared/types";

const Professional = ({ id, styles, className }: PageProps) => {
  return (
    <div id={id} style={styles} className={className}>
      Professional Page
    </div>
  );
};

Professional.displayName = "Professional";
export default Professional;
