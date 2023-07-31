import React from 'react'
import MenuItem from '../MenuItem'

const MenuList = ({arr}) => {
  return (
    <div className="py-1 " role="none">
        {arr.map((item,index)=><MenuItem item={item} key={index}/>)}
    </div>
  )
}

export default MenuList