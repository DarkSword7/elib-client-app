import React from "react";
import Image from "next/image";
import DownloadButton from "./components/DownloadButton";
import { Book } from "@/types";

const SingleBookPage = async ({ params }: { params: { bookId: string } }) => {
  let book: Book | null = null;
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/books/${params.bookId}`,
      { cache: "no-store" }
    );
    if (!response.ok) {
      throw new Error("Error while fetching book");
    }
    book = await response.json();
    console.log("book", book);
  } catch (error: any) {
    throw new Error("Error while fetching book");
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
      <div className="col-span-2 pr-16 text-primary-950">
        <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{book.title}</h2>
        <span className="font-semibold">by {book.author.name}</span>
        <p className="mt-5 text-lg leading-8">{book.desc}</p>
        <DownloadButton fileLink={book.file} />
      </div>
      <div className="flex justify-end">
        <Image
          src={book.coverImage}
          alt={book.title}
          className="rounded-md border"
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default SingleBookPage;
