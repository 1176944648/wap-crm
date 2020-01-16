import routes from "./routes"

export default function createRouter(Router){
    return new Router({
        mode : "history",
        routes,
    })
}