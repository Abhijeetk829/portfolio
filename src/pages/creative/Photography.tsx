interface PhotographyProps {
  id?: string;
}

const Photography = ({ id }: PhotographyProps) => {
  return <div id={id}>Photography Page</div>;
};

Photography.displayName = "Photography";
export default Photography;
