import React from 'react';

function Result({
  name,
  location,
  rate
}) {
  return (
    <div className='result'>
      <p>{name}</p>
      <p>{location}</p>
      <p>{rate}</p>
    </div>
  )
}

export default Result;
