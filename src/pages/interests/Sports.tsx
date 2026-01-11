interface SportsProps {
  id?: string;
}

const Sports = ({ id }: SportsProps) => {
  return <div id={id}>Sports Page</div>;
};

Sports.displayName = "Sports";
export default Sports;
