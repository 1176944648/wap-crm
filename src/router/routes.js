
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
    component : ()=>import("../pages/customerDetails/CustomerDetails.vue"),//进入详情页
    children : [{
        path: "Information/:user",
        component : ()=>import("../pages/customerDetails/customerInformation/CustomerInformation.vue")//基本信息
    },{
        path: "Record/:user",
        component : ()=>import("../pages/customerDetails/documentaryRecord/DocumentaryRecord.vue")//跟单记录
    },{
        path: "Sign/:user",
        component : ()=>import("../pages/customerDetails/signMsg/SignMsg.vue")//签约信息
    }],
},{
    path:"/Details/:user",
    redirect : "/Details/Information/:user",
}
]

export default router
