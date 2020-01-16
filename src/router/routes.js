import Abortive from "../pages/bidding/auction/abortive/abortive.vue"
import Details from "../pages/customerDetails/CustomerDetails.vue"
import Information from "../pages/customerDetails/customerInformation/CustomerInformation.vue"
import Record from "../pages/customerDetails/documentaryRecord/DocumentaryRecord.vue"
import Sign from "../pages/customerDetails/signMsg/SignMsg.vue"
const router = [{//客户列表
    path: "/customerList",
    name: "customerList",
    component: ()=>import("../pages/customerList"),
    redirect : "/customerList/all",
    children: [{//客户列表内tab切换子路由
        path: "all",
        name: "customerListAll",
        component: ()=>import("../pages/customerList/statusTab/customerListAll"),
        
    },{
        path: "new",
        name: "customerListNew",
        component: ()=>import("../pages/customerList/statusTab/customerListNew"),
    },{
        path: "sign",
        name: "customerListSign",
        component: ()=>import("../pages/customerList/statusTab/customerListSign"),
    },{
        path: "follow",
        name: "customerListFollow",
        component: ()=>import("../pages/customerList/statusTab/customerListFollow"),
    },{
        path: "more",
        name: "customerListMore",
        component: ()=>import("../pages/customerList/statusTab/customerListMore"),
    }]

}, {//客户列表搜索页
    path: "/search",
    name: "search",
    component: ()=>import("../pages/customerList/search/search.vue"),
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
