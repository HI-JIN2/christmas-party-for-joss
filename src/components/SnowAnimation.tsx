import React from 'react';
import '../styles/snow.css';

export const SnowAnimation = () => {
  return (
    <div className="snowflakes" aria-hidden="true">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="snowflake">❅</div>
      ))}
    </div>
  );
}