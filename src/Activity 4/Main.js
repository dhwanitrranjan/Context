import React, {useContext} from 'react';
import { usercontext } from './Application';
import TopNav from './TopNav';
import Page from './Page';

export default function Main() {
    var arr = useContext(usercontext)
    return (
        <div>
            <h3>Main</h3>
            <h5>Title: {arr[0]}</h5>
            <h5>username: {arr[1]}</h5>
            <br/>
            <TopNav/>
            <Page/>
        </div>
    )
}
