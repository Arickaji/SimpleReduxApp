import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../State/index';

const Shop = () => {
    const dispatch = useDispatch();
    const {depositMoney,withDrawMoney} = bindActionCreators(actionCreators,dispatch);
    return (
        <div>
            <h2 className="my-3">Deposit / Withdraw</h2>
            {/* <button className="btn btn-primary mx-2 my-2" onClick={()=>{dispatch(actionCreators.withDraw(100))}}>-</button>
            Update Balance 
            <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
            <button className="btn btn-primary mx-2 my-2" onClick={()=>{withDrawMoney(100)}}>-</button>
            Update Balance 
            <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
            
        </div>
    )
}

export default Shop
