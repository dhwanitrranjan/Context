import React, {useContext} from 'react';
import { usercontext } from './Application';

export default function Page() {
    var arr = useContext(usercontext)
    
    return (
        <div>
            <h3>Page</h3>
            <h5>Username: {arr[1]}</h5>
        </div>
    )
}
