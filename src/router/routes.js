import Details from "../pages/customerDetails/CustomerDetails.vue"

import Search from "../pages/customerList/search/search.vue"
import CustomerList from "../pages/customerList"
import Information from "../pages/customerDetails/customerInformation/CustomerInformation.vue"
import Record from "../pages/customerDetails/documentaryRecord/DocumentaryRecord.vue"
import Sign from "../pages/customerDetails/signMsg/SignMsg.vue"
import CustomerListAll from "../pages/customerList/statusTab/customerListAll"

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
    children: [{
        path: "all",
        name: "customerListAll",
        component: CustomerListAll
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