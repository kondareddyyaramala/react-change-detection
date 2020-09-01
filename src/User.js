import React, { useState, useRef, useEffect } from 'react';

export default function User() {
  const [firstName, setFirstName] = useState('');
  

  const usePrevious = firstName => {
     const firstNameRef = useRef();
     
     useEffect(() => {
       console.log('Setting the value in useEffect ::: ', firstName);
       firstNameRef.current = firstName;
     })
     
     console.log('Returning value from useEffect ::: ', firstNameRef.current);
     return firstNameRef.current;

  }


  const previousFirstName = usePrevious(firstName);


  useEffect(() => {
      console.log(`Current value :: ${firstName} :: Previous Value ${previousFirstName}`)
  }, [firstName])


  return (
    <>
     User :: <input value={firstName} onChange={e => setFirstName(e.target.value)}/>
    </>
  );
}