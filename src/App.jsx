import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import BasketProducts from './components/BasketProducts'
import { useDispatch, useSelector } from 'react-redux'
import { updateAmount } from './features/basketslice'

function App() {
  const {products}= useSelector((store)=> store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateAmount())
  
    
  }, [products,dispatch])
  

  return (
    <>
    <Navbar/>
      <h1 className='text-center text-3xl font-medium mt-2 py-4'>12- Redux Store</h1>
      <BasketProducts/>  
    </>
  )
}

export default App
