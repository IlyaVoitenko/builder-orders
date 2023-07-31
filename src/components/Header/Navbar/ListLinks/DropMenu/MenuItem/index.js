import React from 'react'

const MenuItem = ({item}) => {
  return (
    <a
    href={item.link}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
    role="menuitem"
  >
    {item.value}
  </a>
  )
}

export default MenuItem