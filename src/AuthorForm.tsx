import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

import Form from 'react-bootstrap/Form';

import { Author } from './AuthorQuiz';

interface Props extends RouteComponentProps {
  onAddAuthor: (author: Author) => void;
}

interface State extends Author {
  bookTemp: string;
}

const AuthorFormGroup = styled(Form.Group)`
  margin-bottom: 20px;
  & > label: {
    display: block;
  }
`;

export const AuthorForm: React.FC<Props> = ({ onAddAuthor, history }) => {
  const [state, setState] = React.useState<State>({
    name: "",
    imageUrl: "",
    imageSource: "",
    books: [],
    bookTemp: ""
  });
  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const onAddBookClick = (): void => {
    setState({ ...state, books: state.books.concat(state.bookTemp), bookTemp: "" });
  };
  const onSubmit = (): void => {
    const { bookTemp, ...newAuthor } = state;

    onAddAuthor(newAuthor);
    history.push("/");
  };

  return (
    <Form onSubmit={onSubmit}>
      <AuthorFormGroup controlId="Form.NameInput">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" value={state.name} onChange={onFieldChange} />
      </AuthorFormGroup>
      <AuthorFormGroup controlId="Form.ImageUrlInput">
        <Form.Label>Image URL</Form.Label>
        <Form.Control name="imageUrl" value={state.imageUrl} onChange={onFieldChange} />
      </AuthorFormGroup>
      <AuthorFormGroup controlId="Form.BookInput">
        <Form.Label>Book</Form.Label>
        {
          state.books.length > 0 ?
            <Form.Control as="textarea" value={state.books.join("\n")} rows={state.books.length} readOnly />
            : null
        }
        <Form.Control name="bookTemp" value={state.bookTemp} onChange={onFieldChange} />
        <input type="button" value="+" onClick={onAddBookClick} />
      </AuthorFormGroup>
      <input type="submit" value="Add" />
    </Form>
  );
};