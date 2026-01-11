interface GamesProps {
  id?: string;
}

const Games = ({ id }: GamesProps) => {
  return <div id={id}>Games Page</div>;
};

Games.displayName = "Games";
export default Games;
