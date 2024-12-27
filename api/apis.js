import {request} from '@/api/request.js'

<<<<<<< HEAD
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
=======
export function apiLogin(data){
	return request({
		method:'POST',
		url:"/login",
		data
	})
}
>>>>>>> b6966335321cf364f74b8eea23da82fe294f04e9
