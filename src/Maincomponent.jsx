import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.component';
import Shop from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import SignInUp from './pages/sign-in-sign-up/SignInUp.component';







const Maincomponent = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/shop' component={Shop} />
                <Route path='/signin' component={SignInUp} />
            </Switch>
            
        </div>
    )
}

export default Maincomponent
