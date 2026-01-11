import Digital from "./digital";
import Engineering from "./engineering";
import Interiors from "./interiors";
import Models from "./models";
import Music from "./music";
import Photography from "./photography";
import Sketching from "./sketching";
import Videos from "./Videos";
import Visualizations from "./visualizations";

interface CreativeProps {
  className?: string;
}

export function Creative({ className }: CreativeProps) {
  return (
    <>
      <Models id="models" />
      <Visualizations id="visualizations" />
      <Engineering id="engineering" />
      <Interiors id="interiors" />
      <Digital id="digital" />
      <Sketching id="sketching" />
      <Photography id="photography" />
      <Videos id="videos" />
      <Music id="music" />
    </>
  );
}

Creative.displayName = "Creative";

export default Creative;
