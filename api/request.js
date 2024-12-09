
const BASE_URL = 'https://bb-bus-server.vercel.app';

export function request(config={}){
	let {
		url,
		method="GET",
		header={},
		data={}
	} = config
	
	url = BASE_URL + url
	// header['access-key'] = "2297918261gzx"
	
	return new Promise((resolve,reject)=>{
		uni.request({
			url,
			method,
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
			},
			fail:err=>{
				reject(err)
			}
		})
	})
}