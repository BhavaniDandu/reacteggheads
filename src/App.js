import React from 'react';

//import PropTypes from  'prop-types';
class App extends React.Component {
  render(){
    return (
      <Parent>
        <div  className="childA"></div>
      
      </Parent>
    )
  }
}
class Parent extends React.Component {
  render(){
    let items=React.Children.only(this.props.children)
    
    console.log(items)
    return null
  }
}
export default App

   
