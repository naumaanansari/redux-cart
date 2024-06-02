import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../Data";

const initialState= {
    products:storeData,
    amount: 0,
    total: 0
}

const basketslice = createSlice({
    name: "basket",
    initialState,
    reducers:{
        increaseAmount:(state,{payload})=>  {
            const item = state.products.find(item=> item.name===payload.name)
            item.amount ++
        },
        decreaseAmount:(state,{payload})=>  {
            const item = state.products.find(item=> item.name===payload.name)
            if (item.amount > 1 ) {
                item.amount --
            }
        },
        removeItem:(state,{payload})=>  {
            state.products = state.products.filter(item=>item.name !== payload.name)
        },
        updateAmount:(state)=>{
            let amount=0;
            let total=0;
            state.products.forEach(item=>{
                amount += item.amount;
                total += item.amount * item.price;
            })
            state.amount = amount;
            state.total = total;
        }
    }
})
export const {increaseAmount, decreaseAmount, removeItem,updateAmount}= basketslice.actions;
export default basketslice.reducer;