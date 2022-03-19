import React from 'react';

// Component Using JSX
export const WithJsx = () => {
  return (
    <div>
      <h1> With JSX </h1>
    </div>
  )
}

// Component Without JSX
export const WithoutJsx = () => {
  // 1st - param is Tag
  // 2nd - param is attributes
  // 3rd - params is child element
  return React.createElement('div', 
    { id: 'without-jsx', className: 'withoutJsx' },
    React.createElement('h1', null, 'Without JSX')
  );
}
