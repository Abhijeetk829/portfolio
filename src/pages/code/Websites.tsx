interface WebsitesProps {
  id?: string;
}

const Websites = ({ id }: WebsitesProps) => {
  return <div id={id}>Websites Page</div>;
};

Websites.displayName = "Websites";
export default Websites;
