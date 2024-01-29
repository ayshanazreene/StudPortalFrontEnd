import axios from "axios";

export const commonAPI=async(httpMethod,url,reqBody)=>{
//httpmethod- get/post etc
//url- page route
//reqbody - data to post in case of post()
console.log(url);
let reqConfig={
    method:httpMethod,
    url:url,
    data:reqBody,
    headers:{
        "Content-Type":"application/json"
    }
    
}
console.log(reqConfig);
return await axios(reqConfig)
.then((res)=>{
   console.log(res);
    return res
})
.catch(err=>{
    console.log(err);
    return err
})
}