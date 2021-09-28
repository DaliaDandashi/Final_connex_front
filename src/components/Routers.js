import React, { useContext } from 'react'
import SessionContext from './session/SessionContext'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home_page from '../pages/Home_page/Home_page'
import about_us from '../pages/about_us/about_us'
 import Get_in_touch from '../pages/get_in_touch/get_in_touch'
import Reservation from '../pages/Reservation/Reservation'
import Login from '../pages/login/login'
import Profile from '../pages/Profile/Profile'
import Adminpanel from '../pages/admin_panel/Adminpanel'


////// DashboardDriver
import DashboardDriver from '../pages/DashboardDriver/DashboardDriver'
import List_user from '../pages/List_user/List_user'
import Edit_driver from '../pages/Driver/Edit_driver.jsx'


///// DashBoard Admin
import Entry_Dash_Admin from '../pages/Entry_Dash_Admin/Entry_Dash_Admin'
import Adddriver from '../pages/Adddriver'
import mssg from '../pages/mssg/mssg'
import List_driver from '../pages/Driver/List_driver'




export default function Router() {

    const {
        session: { user }
    } = useContext(SessionContext);
    console.log(user);

    return (
        <div>
            <Switch>
                <Route path="/" component={Home_page} exact />
                <PublicRoute path="/login" component={Login} user={user} />
                <Route path="/get_in_touch" component={Get_in_touch} />
                <Route path="/about_us" component={about_us} />
                <Route path="/Reservation" component={Reservation} />

                <PrivateRoute path="/Adddriver" component={Adddriver} user={user} />
                <PrivateRoute path="/Entry_Dash_Admin" component={Entry_Dash_Admin} user={user} />
                <PrivateRoute path="/DashboardDriver" component={DashboardDriver} user={user} />
                <PrivateRoute path="/mssg" component={mssg} user={user} />
                <PrivateRoute path="/List_user" component={List_user} user={user} />
                <PrivateRoute path="/Profile" component={Profile} user={user} />
                <PrivateRoute path="/List_driver" component={List_driver} user={user} />
                <PrivateRoute path="/Edit_driver/:id" component={Edit_driver} user={user} />
            </Switch>



        </div>
    )
}
function PublicRoute({ user, component: Com, ...props }) {
    return (
        <Route {...props} render={props => user.token ?
            <Redirect to={user.role == 1 ? '/Entry_Dash_Admin' : user.role == 0 ? '/DashboardDriver' : '/'} /> :
            <Com {...props} />
        } />
    )
}

function PrivateRoute({ user, component: Com, ...props }) {
    return (
        <Route {...props} render={props => user.token ?
            <Com  {...props} /> :
            <Redirect to="/" />
        } />
    )
}
