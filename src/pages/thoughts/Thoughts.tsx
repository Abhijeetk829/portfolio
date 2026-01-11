import Blogs from "./blogs";
import Podcasts from "./podcasts";

interface CodeProps {
  className?: string;
}

export function Code({ className }: CodeProps) {
  return (
    <>
      <Podcasts id="podcasts" />
      <Blogs id="blogs" />
    </>
  );
}

Code.displayName = "Code";

export default Code;
