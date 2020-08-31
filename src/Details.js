import React from 'react';


export default function Details({ description, summaryHeader}){

  return (
    <>
      <details>
        {console.log('Rendering Details component')}
        <summary>{summaryHeader}</summary>
        {description}
      </details>
    </>
  )

}