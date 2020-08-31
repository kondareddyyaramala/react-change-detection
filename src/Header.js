import React from 'react';

export default function Header({ headerName}) {
  return (
    <>
     {console.log('Rendering Header component')}
     <header>{headerName}</header>
    </>
  );
}