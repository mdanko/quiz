import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './AuthorForm.css';
import { Author } from './AuthorQuiz';
import { AuthorForm } from './AuthorForm';

interface Props extends RouteComponentProps {
    onAddAuthor: (author: Author) => void;
}

export const AddAuthor: React.FC<Props> = (props) => {
    return (
        <div className="AddAuthorForm">
            <h1>Add Author</h1>
            <AuthorForm {...props} />
        </div>
    );
};