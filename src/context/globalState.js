import React,{createContext,useReducer} from 'react'


const initialState={
    transaction:[]}
        
 const reducer=(state,action)=>{
            switch(action.type){
                case 'DELETE_TRANSAC':
                    return{...state,
                    transaction: state.transaction.filter(transac=>transac.id!==action.payload)}
                case 'ADD_TRANSAC':
                    return{
                        ...state,
                        transaction:[action.payload, ...state.transaction]
                    }

                default:
                    return state;
            }
        }
export const GlobalContext=createContext(initialState );
export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)
    function deleteitem(id){
        dispatch({
            type:'DELETE_TRANSAC',
            payload:id
        })
    }
    function additem(transac){
        dispatch({
            type:'ADD_TRANSAC',
            payload:transac
        })
    }
      
    return(<GlobalContext.Provider value={{
        transaction:state.transaction,
        deleteitem,
        additem
    }}>
{children}
    </GlobalContext.Provider>)

    

} 


