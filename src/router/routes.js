import Details from "../pages/customerDetails/CustomerDetails.vue"
import Information from "../pages/customerDetails/customerInformation/CustomerInformation.vue"
import Record from "../pages/customerDetails/documentaryRecord/DocumentaryRecord.vue"
import Sign from "../pages/customerDetails/signMsg/SignMsg.vue"

const router = [{
    path: "/Details",
    component : Details,
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
    path : "/Details",
    redirect : "/Details/Information"
},
]

export default router