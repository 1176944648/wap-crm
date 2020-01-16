
const router = [{
    path: '/index',
    component: () => import("../pages/main/main.vue")
}, {
    path: "/login",
    component: () => import("../pages/register/loginn.vue")//这是写了路由的地址，后在地址对应的组件里面写插件
}, {
    path: "/",
    redirect: "/login"//做了定向得地址配置，可直接跳转，搭配router-view使用
},
{//客户列表
    path: "/customerList",
    name: "customerList",
    component: () => import("../pages/customerList"),
    redirect: "/customerList/all",
    children: [{//客户列表内tab切换子路由
        path: "all",
        name: "customerListAll",
        component: () => import("../pages/customerList/statusTab/customerListAll"),

    }, {
        path: "new",
        name: "customerListNew",
        component: () => import("../pages/customerList/statusTab/customerListNew"),
    }, {
        path: "sign",
        name: "customerListSign",
        component: () => import("../pages/customerList/statusTab/customerListSign"),
    }, {
        path: "follow",
        name: "customerListFollow",
        component: () => import("../pages/customerList/statusTab/customerListFollow"),
    }, {
        path: "more",
        name: "customerListMore",
        component: () => import("../pages/customerList/statusTab/customerListMore"),
    }]

}, {//客户列表搜索页
    path: "/search",
    name: "search",
    component: () => import("../pages/customerList/search/search.vue"),
},{
    path : "/bidding",//竞拍首页
    component : ()=>import("../pages/bidding/index.vue"),
    children : [{
        path: "orderlist",//竞拍订单列表
        component: () => import("../pages/bidding/orderList/list.vue")
    },
    {
        path: "orderlist/:id",//订单竞拍/竞速
        component: () => import("../pages/bidding/auction/biddingStage.vue"),
    },
    {
        path: "succeed",//竞拍成功
        component: () => import("../pages/bidding/auction/succeed/succeed.vue"),
    },
    {
        path: "defeated",//竞拍失败
        component: () => import("../pages/bidding/auction/defeated/defeated.vue"),
    },
    {
        path: "abortive",//流拍
        component: () => import("../pages/bidding/auction/abortive/abortive.vue"),
    }],
    redirect: "/bidding/orderlist",
},
{
    path: "/Details",
    component: () => import("../pages/customerDetails/CustomerDetails.vue"),//进入详情页
    redirect: "/Details/Information",
    children: [{
        path: "Information",
        component: () => import("../pages/customerDetails/customerInformation/CustomerInformation.vue")//基本信息
    }, {
        path: "Record",
        component: () => import("../pages/customerDetails/documentaryRecord/DocumentaryRecord.vue")//跟单记录
    }, {
        path: "Sign",
        component: () => import("../pages/customerDetails/signMsg/SignMsg.vue")//签约信息
    }],
},
{
    path: "/clock",//打卡
    component: () => import("../pages/clock/clock/clock.vue"),
},
{
    path: "/clockRecord",//打卡记录
    component: () => import("../pages/clock/clock/clockRecord.vue"),
},
{
    path: "/fieldclock",//外勤打卡
    component: () => import("../pages/clock/fieldclock/fieldclock.vue"),
}
]

export default router
