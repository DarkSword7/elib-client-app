export interface Book {
  _id: string;
  title: string;
  author: Author;
  desc: string;
  coverImage: string;
  file: string;
  genre: string;
  createdAt: string;
  updatedAt: string;
}

export type Author = {
  name: string;
};
