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
}]

export default router