export default function ajax (method,url,data) {
    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    } else {
        /*
        * 兼容ie5、6
        * */
        xhr = new ActiveXObject()
    }
    return new Promise( (resolve,reject)=> {
        xhr.onreadystatechange = () =>{
            if (xhr.readyState===4) {
                if(xhr.status===200) {
                    resolve(xhr.response)
                } else {
                    reject(xhr.status)
                }
            }
        }
        xhr.ontimeout = function(){
            console.log('请求超时');
        }
        xhr.timeout = 1000;
        if(method.toUpperCase()=== "GET"){
            let arr = [];
            for(let key in data){
                arr.push(key + '=' + data[key]);
            }
            let getData=arr.join("&");

            xhr.open("GET",url +"?"+getData,true);
            xhr.send(null);
        }else if(method.toUpperCase()=== "POST"){
            xhr.open("POST",url,true);
            xhr.responseType="json";
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            xhr.send(data);
        }
    });
}