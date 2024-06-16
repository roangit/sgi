import React from 'react'

const MainHeader = ({titulo}) => {
  return (
    <>
          <h1 style={{textAlign: 'center', fontSize: '40px'}}>{titulo}</h1>
          <hr style={{width:'70%', margin:'auto', border: '2px solid', borderRadius: '5px'}}/>   
    </>
  )
}

export default MainHeader