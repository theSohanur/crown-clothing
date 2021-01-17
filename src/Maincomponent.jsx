import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.component';
import Shop from './pages/shop/Shop.component';


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
                <Route path='/shop' component={Shop} />
            </Switch>
            
        </div>
    )
}

export default Maincomponent
