interface VisualizationsProps {
  id?: string;
}

const Visualizations = ({ id }: VisualizationsProps) => {
  return <div id={id}>Visualizations Page</div>;
};

Visualizations.displayName = "Visualizations";
export default Visualizations;
