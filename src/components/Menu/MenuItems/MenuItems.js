import React from 'react'

const MenuItems = ({ items }) => {
  items = items.map(({ id, label, link }) => (
    <li key={id} className='menu-item'>
      <a href={link}>
        {label}
      </a>
    </li>
  ))
  return (
    <ul className='menu-items'>
      {items}
    </ul>
  )
}

export default MenuItems
