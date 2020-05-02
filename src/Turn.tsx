import React from 'react';
import './bootstrap.min.css';
import { Book } from './Book';
import { Author } from './AuthorQuiz';
import './App.css';

export type HighlightKey = "none" | "correct" | "wrong"

type HighlightType = {
  [key in HighlightKey]: string;
}

interface Props {
  author: Author;
  books: string[];
  highlight: HighlightKey;
  onAnswerSelected: (answer: string) => void;
}

const highlightMapping: HighlightType = {
  none: "",
  correct: "green",
  wrong: "red"
};

function highlightToBgColor(highlight: HighlightKey): string {
  return highlightMapping[highlight];
}

export const Turn: React.FC<Props> = ({ author, books, highlight, onAnswerSelected }) => {
  return (
    <div className="row turn" style={{ backgroundColor: highlightToBgColor(highlight) }}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorImage" alt="Author" />
      </div>
      <div className="col-6">
        {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected} />)}
      </div>
    </div>
  );
}