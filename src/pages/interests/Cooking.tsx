interface CookingProps {
  id?: string;
}

const Cooking = ({ id }: CookingProps) => {
  return <div id={id}>Cooking Page</div>;
};

Cooking.displayName = "Cooking";
export default Cooking;
