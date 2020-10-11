import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <img src="./jumbo.jpg" alt="my image" width="100%" height="1%" />
       
      </Jumbotron>

    </div>
  );
};

export default Jumbo;