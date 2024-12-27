
<<<<<<< HEAD
const BASE_URL = 'https://bus-backend-weld.vercel.app/api';
=======
const BASE_URL = 'https://bb-bus-server.vercel.app';
>>>>>>> b6966335321cf364f74b8eea23da82fe294f04e9

export function request(config={}){
	let {
		url,
		method="GET",
<<<<<<< HEAD
		headers={},
=======
		header={},
>>>>>>> b6966335321cf364f74b8eea23da82fe294f04e9
		data={}
	} = config
	
	url = BASE_URL + url
<<<<<<< HEAD

	  // 为 GET 请求构建查询参数  
	    if (method.toUpperCase() === 'GET' && data) {  
	        const queryString = Object.entries(data)  
	            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)  
	            .join('&');  
	        url += `?${queryString}`;  
	    }  
=======
	// header['access-key'] = "2297918261gzx"
>>>>>>> b6966335321cf364f74b8eea23da82fe294f04e9
	
	return new Promise((resolve,reject)=>{
		uni.request({
			url,
			method,
<<<<<<< HEAD
			headers,
			// POST 请求时使用 data 属性
			data: method.toUpperCase() === 'POST' ? data : undefined,   
			success:res=>{
				resolve(res);
=======
			header,
			data,
			success:res=>{
				resolve(res);
				
				
				// if(res.data.errCode === 0){
				// 	resolve(res.data)
				// }else if(res.data.errCode === 400){
				// 	uni.showModal({
				// 		title:"错误",
				// 		content:res.data.errMsg,
				// 		showCancel:false
				// 	})
				// 	reject(res.data)
				// }else{
				// 	uni.showModal({
				// 		title:res.data.errMsg,
				// 		icon:"none"
				// 	})
				// 	reject(res.data)
				// }
>>>>>>> b6966335321cf364f74b8eea23da82fe294f04e9
			},
			fail:err=>{
				reject(err)
			}
		})
	})
}