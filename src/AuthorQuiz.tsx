import React from 'react';

import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import { Hero } from './Hero';
import { Turn, HighlightKey } from './Turn';
import { Continue } from './Continue';
import { Footer } from './Footer';

export type Author = {
  name: string;
  imageUrl: string;
  imageSource: string;
  books: string[];
}

export type TurnData = {
  books: string[];
  author: Author;
}

interface Props {
  turnData: TurnData;
  highlight: HighlightKey;
  onAnswerSelected: (answer: string) => void;
  onContinue: () => void;
}

export const AuthorQuiz: React.FC<Props> = ({ turnData, highlight, onAnswerSelected, onContinue }) => {
  return (
    <Container fluid className="p-3">
      <Hero />
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
      <Continue show={highlight === "correct"} onContinue={onContinue} />
      <p>
        <Link to="/add">Add an author</Link>
      </p>
      <Footer />
    </Container>
  );
};