import React, { useState } from 'react'
// import Card from '../components/Card'
import Menu from '../components/Menu'
// import Logo from '../components/Logo'
import { Logo, Card } from '../components/Base'
import { BarChart } from '../components/Module'
import DataBuilder from '../components/DataBuilder'

const menuItems = [
  { id: 'a', label: 'A', link: '/' },
  { id: 'b', label: 'B', link: '/' },
  { id: 'c', label: 'C', link: '/' }
]

const Test = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div>
      <Menu isOpen={isMenuOpen} onToggleMenu={handleToggleMenu} items={menuItems}>
        <div className='menu-header'>
          <header>
            <Logo />
          </header>
        </div>
      </Menu>
      <Card>
        <BarChart />
      </Card>
      <DataBuilder />
    </div>
  )
}

export default Test
