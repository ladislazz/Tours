import React from 'react';
import Tour from './Tour';
const Tours = ({ tours }) => {
  return (
    <div>
      {tours.map((tour) => {
        const { id } = tour;
        return <Tour key={id} {...tour} />;
      })}
    </div>
  );
};

export default Tours;
