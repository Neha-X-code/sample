import {Component} from 'react'

class Header extends Component{
    render(){
        return(<h1>This is {this.props.data}</h1>)
    }
}

// function Header(props){
//     // return(<h1 className = 'hello'>Hello I am Header</h1>)
//     return(<h1>This is {props.data}</h1>)
// }

export default Header