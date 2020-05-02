import React from 'react';
import './bootstrap.min.css';

export const Footer: React.FC = () => {
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">
          All images are from <a href="https://commons.wikimedia.org/wiki/Main_Page">Wikimedia Commons</a>
        </p>
      </div>
    </div>
  );
};