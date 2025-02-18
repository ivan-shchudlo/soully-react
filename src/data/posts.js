import {fetchDataSuccess,fetchDataFailure, fetchDataLoading} from '../actions'

import store from '../store';
class Messages{
    static getAll(){
        store.dispatch(fetchDataLoading());
        return fetch('http://localhost:3002/soully/posts')

        .then(response=> response.json()
        ) .then(json => {
            store.dispatch(fetchDataSuccess(json))
           
            return json;
        }).catch(error => store.dispatch(fetchDataFailure(error)));
         

    }
    static newPost = post=>{
        const options={
            method:"PUT",
            headers:new Headers({
                'Content-Type':'application/json'
            }),
            body:post
        }
        return fetch('http://localhost:3002/soully/add-post',options)
        .then(res=>res.json())
        .then(res=>console.log(res))
        .catch(error=>console.log(error));
        
    }
}


export default Messages;