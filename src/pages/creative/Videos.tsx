interface VideosProps {
  id?: string;
}

const Videos = ({ id }: VideosProps) => {
  return <div id={id}>Videos Page</div>;
};

Videos.displayName = "Videos";
export default Videos;
