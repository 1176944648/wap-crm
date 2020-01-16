import Orderlist from "../pages/bidding/orderList/list.vue"
import Bidding from "../pages/bidding/auction/biddingStage.vue"
import Succeed from "../pages/bidding/auction/succeed/succeed.vue"
import Defeated from "../pages/bidding/auction/defeated/defeated.vue"
import Abortive from "../pages/bidding/auction/abortive/abortive.vue"
import Search from "../pages/customerList/search/search.vue"
import CustomerList from "../pages/customerList"
import Information from "../pages/customerDetails/customerInformation/CustomerInformation.vue"
import Record from "../pages/customerDetails/documentaryRecord/DocumentaryRecord.vue"
import Sign from "../pages/customerDetails/signMsg/SignMsg.vue"
const router = [
    {
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
    },{
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
        path: "/bidding/abortive",
        component: Abortive,
    }
]

export default router
