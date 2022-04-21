import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";


const Mid=store=>next=>action=>{
    if(action.promise){
        action.promise.then(response=>response.json()).
        then((result)=>{
            store.dispatch({type:action.type,success:true,payload:result})
        })
    }
    else{
        next(action)
    }
}

const store = createStore(rootReducer,applyMiddleware(Mid))

export default store;