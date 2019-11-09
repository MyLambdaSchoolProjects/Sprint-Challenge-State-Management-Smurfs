export const GET_SMURF = 'GET_SMURF';
export const ADD_SMURF = 'ADD_SMURF';


export const getSmurf = (res)=>{
    return{type: GET_SMURF, payload: res}
};

export const addSmurf = (props) =>{
    return{type: ADD_SMURF, payload: props}
    
};