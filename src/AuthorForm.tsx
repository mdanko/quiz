import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './AuthorForm.css';
import { Author } from './AuthorQuiz';

interface Props extends RouteComponentProps {
    onAddAuthor: (author: Author) => void;
}

interface State extends Author {
    bookTemp: string;
}

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
        <form onSubmit={onSubmit}>
            <div className="AddAuthorForm__input">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={state.name} onChange={onFieldChange} />
            </div>
            <div className="AddAuthorForm__input">
                <label htmlFor="imageUrl">Image URL</label>
                <input type="text" name="imageUrl" value={state.imageUrl} onChange={onFieldChange} />
            </div>
            <div className="AddAuthorForm__input">
                {state.books.map((book) => <p key={book}>{book}</p>)}
                <label htmlFor="bookTemp">Book</label>
                <input type="text" name="bookTemp" value={state.bookTemp} onChange={onFieldChange} />
                <input type="button" value="+" onClick={onAddBookClick} />
            </div>
            <input type="submit" value="Add" />
        </form>
    );
};