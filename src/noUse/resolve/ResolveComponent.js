import { resolve } from "react-resolver";
import React from 'react';
 
@resolve("user", function(props) {
  // return http.get(`/api/users/${props.params.userId}`);

  setTimeout(() => {
       console.log('resolved');
       return 'render';
  }, 5000)

})
class ResolveComponent extends React.Component {
  render() {
    const { user } = this.props;    
    return <div>{user}</div>
  }
}