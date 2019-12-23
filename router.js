import Vue from 'vue'
import Router from 'uni-simple-router' //仿vue路由插件
Vue.use(Router)


export default new Router({
	routes: [
		{
			path: "/pages/home/home",
			name: "home"
		},
		{
			path: "/pages/mine/mine",
			name: "mine"
		},
		{
			path: "/pages/house/houseList/houseList",
			name: "houseList"
		},
		{
			path: "/pages/house/houseDetail/houseDetail",
			name: "houseDetail"
		}
	]
})
