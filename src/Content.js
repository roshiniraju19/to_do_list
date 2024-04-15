import React from 'react'
import ItemsList from './ItemsList';

const Content = ({items,handleCheck, handledelete}) => {

  return (
    <main>
      {items.length ? (
        <ItemsList
          items = {items} 
          handleCheck = {handleCheck}
          handledelete = {handledelete}    
        />    
      ) : (
        <>
        <p>Your List is empty</p>
        </>
      )}
      
    </main>
  )
}

export default Content