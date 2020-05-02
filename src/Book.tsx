import React from 'react';
import './App.css';

interface Props {
  title: string;
  onClick: (title: string) => void;
}

export const Book: React.FC<Props> = ({ title, onClick }) => {
  return (
    <div className="answer" onClick={() => { onClick(title); }} >
      <h4>{title}</h4>
    </div>
  );
}