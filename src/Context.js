import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component {
   state = {
    contacts : [{
        id : 1,
        name : 'John Doe',
        email: 'doe@gmail.com',
        phone: '555-555-5555'
     },
       {
         id : 2,
         name : 'Henry Williams',
         email: 'henry@gmail.com',
         phone: '222-222-2222'
       },
       {
         id : 3,
         name : 'Thomas Null',
         email: 'thomas@gmail.com',
         phone: '333-333-3333'
       }
      ]
   }

   render(){
       return(
           <Context.Provider value={this.state}>
             {this.props.children}
           </Context.Provider>
       )
   }
}

export const Consumer = Context.Consumer;
