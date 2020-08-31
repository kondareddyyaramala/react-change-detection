import React, { useState } from "react";
import "./style.css";
import Header from './Header';
import Details from './Details';
import User from './User';

export default function App() {
  const [header, setHeader] = useState('User Information');
  const [subheader, setSubheader] = useState('Details');
  const [description, setDescription] = useState('This is something new I just found');

  return (
    <section>

      <User/>
    </section>
  );
}
      // {console.log('Rendering App component')}
      // <Header headerName={header}></Header>
      // <Details 
      //     description={description}
      //     summaryHeader={subheader}>
      // </Details>
      // <button onClick={() => setHeader('New')}>Update header name</button>
      // <br/>
      // <button onClick={() => setSubheader('New subheader')}>Update subheader name</button>
      // <br/>
      // <button onClick={() => setDescription('new description')}>Update description </button>