interface ModelsProps {
  id?: string;
}

const Models = ({ id }: ModelsProps) => {
  return <div id={id}>Models Page</div>;
};

Models.displayName = "Models";
export default Models;
