import React from 'react';
import Parent from './Parent';
import { createContext, useState } from "react";

const counterContext = createContext();

export default function Context() {
    let [count, setCounter] = useState(0)
    return (
        <div>
            <p>Context Component</p>
            <counterContext.Provider value={[count, setCounter]}>
            <Parent />
            </counterContext.Provider>
            
        </div>
    )
}

export {counterContext};