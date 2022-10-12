import About from "./views/about";
import Comingsoon from "./views/comingsoon";
import Contact from "./views/contact";
import Error from "./views/error";
import Events from "./views/events";
import Index from "./views/index";
import Privacy from "./views/privacy";
import Reservation from "./views/reservation";

const ROUTES = [
    {navbarItem:true, name:"Home", path: "/",component:<Index/>},
    {navbarItem:true, name:"Events", path: "/events",component:<Events/>},
    {navbarItem:true, name:"About", path: "/about",component:<About/>},
    {navbarItem:true, name:"Contact", path: "/contact",component:<Contact/>},
    {navbarItem:true, name:"Reservation", path: "/reservation",component:<Reservation/>},
    {navbarItem:false, name:"Comingsoon", path: "/comingsoon",component:<Comingsoon/>},
    {navbarItem:false, name:"Privacy", path: "/privacy",component:<Privacy/>},
    {navbarItem:false, path:"*",component:<Error/>}
];

export {
    ROUTES
};