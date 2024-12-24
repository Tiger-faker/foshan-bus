
const BASE_URL = 'https://bus-backend-weld.vercel.app/api';

export function request(config={}){
	let {
		url,
		method="GET",
		headers={},
		data={}
	} = config
	
	url = BASE_URL + url

	  // 为 GET 请求构建查询参数  
	    if (method.toUpperCase() === 'GET' && data) {  
	        const queryString = Object.entries(data)  
	            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)  
	            .join('&');  
	        url += `?${queryString}`;  
	    }  
	
	return new Promise((resolve,reject)=>{
		uni.request({
			url,
			method,
			headers,
			// POST 请求时使用 data 属性
			data: method.toUpperCase() === 'POST' ? data : undefined,   
			success:res=>{
				resolve(res);
			},
			fail:err=>{
				reject(err)
			}
		})
	})
}