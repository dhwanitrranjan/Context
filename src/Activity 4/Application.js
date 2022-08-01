import React, {createContext} from 'react';
import Dashboard from './Dashboard';

var usercontext = createContext();

export default function Application() {
    var title= "Member of Technical Staff"
    var username = "dhwanitranajn"
    var id = 27

    return (
        <div>
            <usercontext.Provider value={[title,username,id]}>
                <Dashboard />
            </usercontext.Provider>
        </div>
    )
}

export {usercontext};
