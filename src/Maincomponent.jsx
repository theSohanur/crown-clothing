import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.component';


const HatsPage = () =>(
    <div>
        <h1>HATS PAGE</h1>
    </div>
)






const Maincomponent = () => {
    return (
        <div>
            {/* <Homepage/> */}
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/hats' component={HatsPage} />
            </Switch>
            
        </div>
    )
}

export default Maincomponent
