interface SketchingProps {
  id?: string;
}

const Sketching = ({ id }: SketchingProps) => {
  return <div id={id}>Sketching Page</div>;
};

Sketching.displayName = "Sketching";
export default Sketching;
