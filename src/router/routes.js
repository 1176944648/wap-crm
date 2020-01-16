import Details from "../pages/customerDetails/CustomerDetails.vue"

import Search from "../pages/customerList/search/search.vue"
import CustomerList from "../pages/customerList"
import Information from "../pages/customerDetails/customerInformation/CustomerInformation.vue"
import Record from "../pages/customerDetails/documentaryRecord/DocumentaryRecord.vue"
import Sign from "../pages/customerDetails/signMsg/SignMsg.vue"
import CustomerListAll from "../pages/customerList/statusTab/customerListAll"
import CustomerListFollow from "../pages/customerList/statusTab/customerListFollow"
import CustomerListNew from "../pages/customerList/statusTab/customerListNew"
import CustomerListSign from "../pages/customerList/statusTab/customerListSign"
import CustomerListMore from "../pages/customerList/statusTab/customerListMore"

const router = [{
    path: "/Information",
    component: Information
}, {
    path: "/Record",
    component: Record
}, {
    path: "/Sign",
    component: Sign
}, {
    path: "/customerList",
    name: "customerList",
    component: CustomerList,
    redirect : "/customerList/all",
    children: [{
        path: "all",
        name: "customerListAll",
        component: CustomerListAll,
        
    },{
        path: "new",
        name: "customerListNew",
        component: CustomerListNew
    },{
        path: "sign",
        name: "customerListSign",
        component: CustomerListSign
    },{
        path: "follow",
        name: "customerListFollow",
        component: CustomerListFollow
    },{
        path: "more",
        name: "customerListMore",
        component: CustomerListMore
    }]

}, {
    path: "/search",
    name: "search",
    component: Search,
},
{
    path: "/Information",
    component: Information
}, {
    path: "/Record",
    component: Record
}, {
    path: "/Sign",
    component: Sign
}, {
    path: "/customerList",
    name: "customerList",
    component: CustomerList,

}, {
    path: "/search",
    name: "search",
    component: Search,
}, {
    path: "/orderlist",
    component: Orderlist
},
{
    path: "/bidding",
    component: Bidding,
},
{
    path: "/bidding/succeed",
    component: Succeed,
},
{
    path: "/bidding/defeated",
    component: Defeated,
},
{
    path:"/customerList",
    name:"customerList",
    component:CustomerList,
    children:[{
        path:"all",
        name:"customerListAll",
        component:CustomerListAll
    }]

},{
    path:"/search",
    name:"search",
    component:Search,
}]

export default router