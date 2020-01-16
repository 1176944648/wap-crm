import Orderlist from "../pages/bidding/orderList/list.vue"
import Bidding from "../pages/bidding/auction/biddingStage.vue"
import Succeed from "../pages/bidding/auction/succeed/succeed.vue"
import Defeated from "../pages/bidding/auction/defeated/defeated.vue"
import Abortive from "../pages/bidding/auction/abortive/abortive.vue"
import Search from "../pages/customerList/search/search.vue"
import CustomerList from "../pages/customerList"

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
},
{
    path: "/Details",
    component : ()=>import("../pages/customerDetails/CustomerDetails.vue"),//进入详情页
    redirect : "/Details/Information",
    children : [{
        path: "Information",
        component : ()=>import("../pages/customerDetails/customerInformation/CustomerInformation.vue")//基本信息
    },{
        path: "Record",
        component : ()=>import("../pages/customerDetails/documentaryRecord/DocumentaryRecord.vue")//跟单记录
    },{
        path: "Sign",
        component : ()=>import("../pages/customerDetails/signMsg/SignMsg.vue")//签约信息
    }],
}
]

export default router
