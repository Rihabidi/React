import React from 'react';
import Icone from './Icone'
class Pictogramme extends React.Component {
    render() {
      return (
    <div>
         
          <Icone/>
          <hr />
        <div>
         <button type="button" class="btn no-outline btn-secondary" >
          &nbsp;
          <span class="align-middle">J'Aime</span>
          
        </button>
        </div>
    </div>
        )
    }
}

export default Pictogramme
  
  
