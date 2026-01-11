interface EngineeringProps {
  id?: string;
}

const Engineering = ({ id }: EngineeringProps) => {
  return <div id={id}>Engineering Page</div>;
};

Engineering.displayName = "Engineering";
export default Engineering;
