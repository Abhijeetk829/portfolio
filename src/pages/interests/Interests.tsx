import Books from "./books";
import Cooking from "./cooking";
import Games from "./games";
import Sports from "./sports";
import Travelling from "./travelling";

interface CodeProps {
  className?: string;
}

export function Code({ className }: CodeProps) {
  return (
    <>
      <Games id="games" />
      <Sports id="sports" />
      <Travelling id="travelling" />
      <Cooking id="cooking" />
      <Books id="books" />
    </>
  );
}

Code.displayName = "Code";

export default Code;
