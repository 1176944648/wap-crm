
import Search from "../pages/customerList/search/search.vue"
import CustomerList from "../pages/customerList"
import Information from "../pages/customerDetails/customerInformation/CustomerInformation.vue"
import Record from "../pages/customerDetails/documentaryRecord/DocumentaryRecord.vue"
import Sign from "../pages/customerDetails/signMsg/SignMsg.vue"

const router = [{
    path: "/Information",
    component : Information
},{
    path: "/Record",
    component : Record
},{
    path: "/Sign",
    component : Sign
},{
    path:"/customerList",
    name:"customerList",
    component:CustomerList,

},{
    path:"/search",
    name:"search",
    component:Search,
}]

export default router
