export default function ajax (method,url,data) {
    let xml;
    if (window.XMLHttpRequest) {
        xml = new XMLHttpRequest()
    } else {
        /*
        * 兼容ie5、6
        * */
        xml = new ActiveXObject()
    }
    return new Promise( (resolve,reject)=> {
        xml.onreadystatechange = () =>{
            if (xml.readyState===4) {
                if(xml.status===200) {
                    resolve(xml.response)
                } else {
                    reject(xml.status)
                }
            }
        }
        if(method.toUpperCase()=== "GET"){
            let arr = [];
            for(let key in data){
                arr.push(key + '=' + data[key]);
            }
            let getData=arr.join("&");

            xml.open("GET",url +"?"+getData,true);
            xml.send(null);
        }else if(method.toUpperCase()=== "POST"){
            xml.open("POST",url,true);
            xml.responseType="json";
            xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            xml.send(data);
        }
    });
}