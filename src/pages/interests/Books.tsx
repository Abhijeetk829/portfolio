interface BooksProps {
  id?: string;
}

const Books = ({ id }: BooksProps) => {
  return <div id={id}>Books Page</div>;
};

Books.displayName = "Books";
export default Books;
