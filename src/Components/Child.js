import { counterContext } from './Context';
import {useContext} from 'react';
import GrandChild from './GrandChild';

export default function Child() {
    let [count, setCount] = useContext(counterContext)

    let updateCount = () =>{
        if (count < 12) {
            setCount(count=>count+1)
        }
    }
    return (
        <div>
            <p>Child Component</p>
            <button onClick={updateCount}>Click Here</button>
            <GrandChild />
        </div>
    )
}
