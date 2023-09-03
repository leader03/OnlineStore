export const dataList = (data: any) => {
    return (dispatch: any) => {
        dispatch({
            type:'data',
            payload:data
        })
    }
}

export const removeFromCart = (data: any) => {
    return (dispatch: any) => {
        dispatch({
            type:'remove',
            payload:data
        })
    }
}

export const increaseQuantity = (data: any) => {
    return (dispatch: any) => {
        dispatch({
            type:'increase',
            payload:data
        })
    }
}