import Search from "../pages/customerList/search/search.vue"
import CustomerList from "../pages/customerList"

const router = [{
    path:"/customerList",
    name:"customerList",
    component:CustomerList,

},{
    path:"/search",
    name:"search",
    component:Search,
}]

export default router
