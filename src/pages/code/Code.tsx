import Spatial from "./spatial";
import Tours from "./tours";
import Websites from "./websites";

interface CodeProps {
  className?: string;
}

export function Code({ className }: CodeProps) {
  return (
    <>
      <Spatial id="spatial" />
      <Tours id="tours" />
      <Tours id="tours" />
      <Websites id="websites" />
    </>
  );
}

Code.displayName = "Code";

export default Code;
