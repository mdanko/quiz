import React from 'react';
import './bootstrap.min.css';
import './App.css';

interface Props {
  show: boolean;
  onContinue: () => void;
}

export const Continue: React.FC<Props> = ({ show, onContinue }) => {
  return (
    <div className="row continue">
      {
        show ?
          <div className="col-11">
            <button className="btn btn-primary btn-lg float-right" onClick={onContinue}>Continue</button>
          </div>
          : null
      }
    </div>
  );
};