import React from 'react';
import './bootstrap.min.css';

export const Hero: React.FC = () => {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select all books written by the author below</p>
      </div>
    </div>
  );
}