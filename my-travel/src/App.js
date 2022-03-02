import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Data from './Data';

function App() {
   
  const travelData = Data.map(card => {
    return <Card
    key={card.id}
      {...card}
    
    />
  })

  return (
    <>
      <Navbar />
      {travelData}
  
    </>
  );
}

export default App;
