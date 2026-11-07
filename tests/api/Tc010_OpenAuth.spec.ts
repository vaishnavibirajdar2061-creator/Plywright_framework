
import {test,expect, APIResponse} from "@playwright/test"



/*
GET https://api.github.com/user/repos

1.Create Application in Git hub
2.Get Client_ID=  &  Client_Secret=
3.Click on update application button
4.Set the id to url https://github.com/login/oauth/authorize?client_id=
and send this through browser
5.Click on Authorize button. you will get auth code
6.In response , user redirected to redirects URL and get the code within URL
7.Get the access token https://github.com/login/oauth/access_token?client_id= &client_secret=&code=
after this you will get access token and copy
8.Use API to get git hub access  GET https://api.github.com/user/repos

*/

test("Test for OpenAuth2.0",async({request})=>{

/*
    //send one more request to get the access token
    let baseUrl="https://github.com/login/oauth/access_token";
    let queryParam={
        client_id:"",
        client_secret:"",
        code:""
    }

let res=await request.get(`${baseUrl}`,{headers:{Accept:"application/json"},params:queryParam});

let jsonres=await res.json();
console.log(jsonres);

let token=""

    //main api to access repos
    let response:APIResponse=await request.get("https://api.github.com/user/repos",{headers:{
        Authorization:`Bearer ${token}`
    }});

    let jsonResponse=await response.json();
    console.log(jsonResponse);
    


*/

})