import { Book } from "@/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="flex gap-5 border p-5 shadow-md rounded">
      <Image
        src={book.coverImage}
        alt={book.title}
        height={0}
        width={0}
        sizes="100vw"
        style={{ width: "auto", height: "12rem" }}
      />
      <div>
        <h2 className="line-clamp-2 text-xl font-bold text-primary-600 text-balance">
          {book.title}
        </h2>
        <p className="text-xl font-bold text-primary-900 mt-1">
          {book.author.name}
        </p>
        <Link
          href={`/book/${book._id}`}
          className="py-1 px-2 rounded border border-primary-500 inline-block mt-4 text-primary-500 font-medium text-sm hover:border-primary-100 hover:bg-primary-100 transition duration-300 ease-in-out"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
