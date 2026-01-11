interface DigitalProps {
  id?: string;
}

const Digital = ({ id }: DigitalProps) => {
  return <div id={id}>Digital Page</div>;
};

Digital.displayName = "Digital";
export default Digital;
