import React from 'react';
import styled from 'styled-components';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { Book } from './Book';
import { Author } from './AuthorQuiz';

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

const TurnRow = styled(Row)`
  background: ${props => props.background} !important;
  $ > div {
    height: 100px;
    padding-top: 20px;
    padding-bottom: 20px;    
  }
`;

const AuthorImage = styled(Image)`
  max-height: 100%;
`;

const highlightMapping: HighlightType = {
  none: "honeydew",
  correct: "#1d3557",
  wrong: "#e63946"
};

function highlightToBgClass(highlight: HighlightKey): string {
  return highlightMapping[highlight];
}

export const Turn: React.FC<Props> = ({ author, books, highlight, onAnswerSelected }) => {
  return (
    <TurnRow background={highlightToBgClass(highlight)}>
      <Col md={{ span: 4, offset: 1 }}>
        <AuthorImage src={author.imageUrl} rounded alt="Author" />
      </Col>
      <Col md={6}>
        {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected} />)}
      </Col>
    </TurnRow >
  );
}