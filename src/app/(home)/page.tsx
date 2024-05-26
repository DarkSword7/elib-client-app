import Banner from "./components/Banner";
import BookList from "./components/BookList";

export default async function Home() {
  // Data fetching
  const response = await fetch(`${process.env.BASE_URL}/books`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Error while fetching books");
  }

  const books = await response.json();
  console.log("books", books);

  return (
    <>
      <Banner />
      <BookList books={books} />
    </>
  );
}
