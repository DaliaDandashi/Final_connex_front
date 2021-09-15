import React from 'react'
import { Switch,Route } from 'react-router-dom'
import Home_page from '../pages/Home_page/Home_page'
import about_us from '../pages/about_us/about_us'
import contact_us from '../pages/contact_us/contact_us'
import Addadmin from '../pages/admin/Addadmin'
import Adminpanel from '../pages/adminpanel/Adminpanel'



export default function Router(){


    return(
        <div>
<Switch>
<Route path="/Home_page" component={Home_page}/>
<Route path="/about_us" component={about_us}/>
<Route path="/contact_us" component={contact_us}/>
<Route path="/Addadmin" component={Addadmin}/>
<Route path="/Home_page" component={Home_page}/>
<Route path="/Adminpanel" component={Adminpanel}/>

</Switch>



        </div>
    )
}