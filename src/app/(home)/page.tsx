import { Suspense } from "react";
import Banner from "./components/Banner";
import BookList from "./components/BookList";
import Loading from "@/components/Loading";

export default async function Home() {
  return (
    <>
      <Banner />
      <Suspense fallback={<Loading />}>
        <BookList />
      </Suspense>
    </>
  );
}
