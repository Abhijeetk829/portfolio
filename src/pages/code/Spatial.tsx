interface SpatialProps {
  id?: string;
}

const Spatial = ({ id }: SpatialProps) => {
  return <div id={id}>Spatial Page</div>;
};

Spatial.displayName = "Spatial";
export default Spatial;
