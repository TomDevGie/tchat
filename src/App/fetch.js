const ADR_SRV = 'http://localhost:666'

/**
 * 
 * @param {*} params 
 */
function httpGet(params, callback){
    // nom de la ressource
    // id 
    // valeur par defaut
    if(undefined===params.ressources){
        params.ressources='publicDiscussions';
    }
    let url = ADR_SRV+'/'+params.ressources;
    
    // if (undefined!==params.userId){
        // url+='/'+params.userId;
    // }
    fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            //console.log(response,JSON.parse(response));
            if(undefined!==callback){
                callback(response);
            }
            return response;
        });

}


// httpGet({ressources:'users',id:'1'});
export default httpGet;


export function httpPost(config){
    if(undefined===config.ressources){
        config.ressources='publicDiscussions';
    }
    let url = ADR_SRV+'/'+config.ressources;
    
    if (undefined!==config.id){
        url+='/'+config.id;
    }
    let method = (undefined===config.method)?'GET':config.method;

    let xhr = new XMLHttpRequest();
    xhr.open(method,url,true);
    xhr.setRequestHeader('Content-Type','Application/json');
    xhr.onreadystatechange=
        (response)=>{
            if(xhr.readyState<4 || xhr.status>400 )return;
            (undefined!==config.callback)?config.callback():console.log(response,response.data);
        }
    xhr.send((undefined!==config.data)?JSON.stringify(config.data):'');
    
}