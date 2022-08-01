import React from 'react';
import {useContext} from "react";
import {counterContext} from './Context'

export default function GrandChild() {
    let [counter] = useContext(counterContext)
    return (
        <div>
            <p>GrandChild Component</p>
            {counter}
        </div>
    )
}
