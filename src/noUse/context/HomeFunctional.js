import {useContext} from 'react';
import UserContext from './UserContext';

export default function HomeFunctional(props) {
    const user = useContext(UserContext);
    console.log('in functional ', user) 

     return null
}

//For functional components, you'll use useContext, such as in the example below.
// This is the equivalent of static contextType.