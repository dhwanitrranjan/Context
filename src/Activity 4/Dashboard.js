import React, {useContext} from 'react';
import {usercontext} from './Application';
import Main from './Main';
import SideNav from './SideNav';

export default function Dashboard() {
    var arr = useContext(usercontext)
    return (
        <div>
            <h3>Dashboard</h3>
            <h5>Title: {arr[0]}</h5>
            <h5>username: {arr[1]}</h5>
            <h5>ID: {arr[2]}</h5>
            <br/>
            <Main />
            <SideNav />
        </div>
    )
}
