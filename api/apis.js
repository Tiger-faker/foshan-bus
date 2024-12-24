import {request} from '@/api/request.js'

//登录接口
export function apiLogin(data){  
	return request({
		method:'POST',
		url:"/auth/login",
		data
	})
}

//注册接口
export function apiRegister(data){  
	return request({
		method:'POST',
		url:"/auth/register",
		data
	})
}

//城市信息接口
export function apiCities(data){  
	return request({
		url:"/cities"
	})
}

//获取线路接口
export function apiRoutesSearch(data){  
	return request({
		url:"/routes/search",
		method: "GET",
		data
	})
}

//获取用户信息接口
// export function apiAuth(token){  
// 	return request({
// 		url:"/auth/me",
// 		method: "GET",
// 		headers: {  
// 		    "Authorization": "Bearer " + token
// 			}
// 	})
// }