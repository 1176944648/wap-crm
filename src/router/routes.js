import Abortive from "../pages/bidding/auction/abortive/abortive.vue"
import Search from "../pages/customerList/search/search.vue"
import CustomerList from "../pages/customerList"
import Details from "../pages/customerDetails/CustomerDetails.vue"
import Information from "../pages/customerDetails/customerInformation/CustomerInformation.vue"
import Record from "../pages/customerDetails/documentaryRecord/DocumentaryRecord.vue"
import Sign from "../pages/customerDetails/signMsg/SignMsg.vue"
import CustomerListAll from "../pages/customerList/statusTab/customerListAll"
import CustomerListFollow from "../pages/customerList/statusTab/customerListFollow"
import CustomerListNew from "../pages/customerList/statusTab/customerListNew"
import CustomerListSign from "../pages/customerList/statusTab/customerListSign"
import CustomerListMore from "../pages/customerList/statusTab/customerListMore"

const router = [{
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
    path: "/orderlist",//竞拍订单列表
    component: ()=>import("../pages/bidding/orderList/list.vue")
},
{
    path: "/bidding",//订单竞拍/竞速
    component: ()=>import("../pages/bidding/auction/biddingStage.vue"),
},
{
    path: "/bidding/succeed",//竞拍成功
    component: ()=>import( "../pages/bidding/auction/succeed/succeed.vue"),
},
{
    path: "/bidding/defeated",//竞拍失败
    component: ()=>import("../pages/bidding/auction/defeated/defeated.vue"),
},
{
    path: "/bidding/abortive",//流拍
    component: ()=>import("../pages/bidding/auction/abortive/abortive.vue"),
},
{
    path: "/Details",
    component : Details,
    redirect : "/Details/Information",
    children : [{
        path: "Information",
        component : Information
    },{
        path: "Record",
        component : Record
    },{
        path: "Sign",
        component : Sign
    }],
}
]

export default router
