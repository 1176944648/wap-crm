import Orderlist from "../pages/bidding/orderList/list.vue"
import Bidding from "../pages/bidding/auction/biddingStage.vue"
import Succeed from "../pages/bidding/auction/succeed/succeed.vue"
import Defeated from "../pages/bidding/auction/defeated/defeated.vue"
import Abortive from "../pages/bidding/auction/abortive/abortive.vue"
const router = [{
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