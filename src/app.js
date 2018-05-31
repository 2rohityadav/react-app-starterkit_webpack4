import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css'
import './styles/styles.scss'


const MyApp = ()=> (
  <p>Hello Rohit !</p>
)


ReactDOM.render(<MyApp />, document.getElementById('app'));

























class OldSyntax {
  constructor(){
    this.name = 'Rohit'
    this.getGreeting = this.getGreeting.bind(this)
  }
  getGreeting(){
    return `Hi my name is ${this.name} from old fashion`
  }
}

const oldObj = new OldSyntax()
const oldInstance = oldObj.getGreeting;
// console.log(oldObj)
console.log(oldInstance())


// ---------new syntax

class NewSyntax {
  name = 'Rohit';
  getGreeting = ()=> {
    return `Hi my name is ${this.name} fron new fashion`
  }
}
const newObj = new NewSyntax();
const newInstance = newObj.getGreeting;
//console.log(newSyntaxObj)
console.log(newInstance())
