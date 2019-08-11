import React from 'react';
import UserContext, {UserConsumer} from './UserContext';


export default class Home extends React.Component {
   static contextType = UserContext; // to access context in other than render life cycle

   componentDidMount() {
       console.log('in class', this.context);
   }
    render() {
        return (
        <UserConsumer>
            {props => <div>{props.name}</div>}
        </UserConsumer>
    )
        }
}


// Use const xContext = React.createContext() to create context.
// Pull xContext.Provider and xContext.Consumer out of xContext
// Wrap Provider around your parent component.
// A class can consume with static contextType = xContext
// A functional component can consume with const x = useContext(xContext)