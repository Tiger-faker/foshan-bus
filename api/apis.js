import {request} from '@/api/request.js'

export function apiLogin(data){
	return request({
		method:'POST',
		url:"/login",
		data
	})
}