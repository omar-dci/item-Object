const sendHttpRequest = (method, url ,data) =>{
    return fetch(url,{
        method : method,
        body : JSON.stringify(data),
        headers: data ? {'Content-Type':'application/json'} : {}
    }).then(response =>{
        if (response.status >= 400) { //!response.ok
            return response.json().then(errResData =>{
                const error = new Error('somethhing went wrong!');
                error.data = errResData;
                throw error
            })
        }
        return response.json()
    })
 }

 
 const getData = ()=>{
    sendHttpRequest('GET','https://reqres.in/api/users')
    .then(responseData =>{
        console.log(responseData)
    })
 };
 const sendData = () =>{
    sendHttpRequest('POST','https://reqres.in/api/register',{
        email : 'eve.holt@reqres.in',
        password : 'pistol'
    })
    .then(responseData =>{
        console.log(responseData)
    }).catch(error =>{
        console.log(error, error.data)
    })
 };

 const postData = (url, data)=> {
    return fetch(url, {
        method: 'POST', // GET, PUT, DELETE, etc
        mode: 'cors', // no-cors, same-origin
        cache: 'no-cache', //default, reload, force-cache
        credentials: 'same-origin', // include, same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // if you are using GET you need to use this option
            // content-Type': 'applicatoin/X-www-form-urlencoded'
        },
        redirect: 'follow', // manual, error,
        referrer: 'no-referrer', // client
        body: JSON.stringify(data),
    }).then((response) => {
        return response.json();
    });
}
