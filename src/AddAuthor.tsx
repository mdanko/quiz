import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

import { Author } from './AuthorQuiz';
import { AuthorForm } from './AuthorForm';

interface Props extends RouteComponentProps {
  onAddAuthor: (author: Author) => void;
}

const AddAuthorForm = styled.div`
  width: 50%;
  margin: 50px 10%;
`;

export const AddAuthor: React.FC<Props> = (props) => {
  return (
    <AddAuthorForm>
      <h1>Add Author</h1>
      <AuthorForm {...props} />
    </AddAuthorForm>
  );
};