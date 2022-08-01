import React, {useContext} from 'react';
import { usercontext } from './Application';

export default function TopNav() {
    var arr = useContext(usercontext)

    return (
        <div>
            <h3>TopNav</h3>
            <h5>Title: {arr[0]}</h5>
        </div>
    )
}
