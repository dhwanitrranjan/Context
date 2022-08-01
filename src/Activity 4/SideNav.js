import React, {useContext} from 'react';
import { usercontext } from './Application';

export default function SideNav() {
    var arr = useContext(usercontext)
    return (
        <div>
            <h3>SideNav</h3>
            <h5>ID: {arr[2]}</h5>
        </div>
    )
}
