interface BlogsProps {
  id?: string;
}

const Blogs = ({ id }: BlogsProps) => {
  return <div id={id}>Blogs Page</div>;
};

Blogs.displayName = "Blogs";
export default Blogs;
