interface ToursProps {
  id?: string;
}

const Tours = ({ id }: ToursProps) => {
  return <div id={id}>Tours Page</div>;
};

Tours.displayName = "Tours";
export default Tours;
