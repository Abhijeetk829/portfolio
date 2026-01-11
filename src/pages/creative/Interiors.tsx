interface InteriorsProps {
  id?: string;
}

const Interiors = ({ id }: InteriorsProps) => {
  return <div id={id}>Interiors Page</div>;
};

Interiors.displayName = "Interiors";
export default Interiors;
