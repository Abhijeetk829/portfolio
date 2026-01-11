interface TravellingProps {
  id?: string;
}

const Travelling = ({ id }: TravellingProps) => {
  return <div id={id}>Travelling Page</div>;
};

Travelling.displayName = "Travelling";
export default Travelling;
