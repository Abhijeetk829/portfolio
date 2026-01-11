interface PodcastsProps {
  id?: string;
}

const Podcasts = ({ id }: PodcastsProps) => {
  return <div id={id}>Podcasts Page</div>;
};

Podcasts.displayName = "Podcasts";
export default Podcasts;
