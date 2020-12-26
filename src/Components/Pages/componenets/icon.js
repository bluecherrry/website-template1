import React from 'react'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
function  Icon() {
  const myStyle = {
    fontSize:'30px',
    color:'green',
    padding:'10px'
   }
   const shop={
    fontSize:'30px',
    color:'green',
    padding:'10px',
    marginRight:'0'
   }
  return (
    <div>
      <LocalMallIcon style={myStyle} title="react"/>
      
      <AddShoppingCartIcon style={shop} />
      
    </div>
  )
}

export default Icon
