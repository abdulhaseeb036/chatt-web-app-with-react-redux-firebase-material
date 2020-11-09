
const INITIAL_STATE = {  
    uname: "haseeb",
    email: "kuchbhi"
}

export default (state = INITIAL_STATE, action) => {
    console.log("action=>",action);
    switch (action.type) {
    case  "setData" :
        return ({
            ...state,
            appname: action.data

        })
    }
        
    return state
    
}