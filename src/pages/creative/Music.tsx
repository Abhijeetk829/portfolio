interface MusicProps {
  id?: string;
}

const Music = ({ id }: MusicProps) => {
  return <div id={id}>Music Page</div>;
};

Music.displayName = "Music";
export default Music;
