import {React} from 'react'
import App from './App'


export default function User(props){
    const Data  = props.Data
    
return(
    <div>
<h1>I'm{Data.Name} & my Age is {Data.Age} </h1>
    </div>
)

}