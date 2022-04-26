export const depositMoney = (amount) =>{
    return (dispatch) =>{
        dispatch({
            type : 'deposit',
            payload : amount
        })
    }
}

export const withDrawMoney = (amount) =>{
    return (dispatch) =>{
        dispatch({
            type : 'withDraw',
            payload : amount
        })
    }
}