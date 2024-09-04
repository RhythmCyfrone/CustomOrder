import { useState } from 'react'
import './App.css'
import PrimaryNoIcon from './Components/Shared/Buttons/PrimaryNoIcon'
import PrimaryWithIcon from './Components/Shared/Buttons/PrimaryWithIcon'
import SecondaryNoIcon from './Components/Shared/Buttons/SecondaryNoIcon'
import SecondaryWithIcon from './Components/Shared/Buttons/SecondaryWithIcon'
import Sidebar from './Components/AppComponents/Sidebar/Sidebar'
import HomeIcon from './Assets/Icons/home.svg'
import HomeBlueIcon from './Assets/Icons/HomeBlue.svg'
import TableSelected from './Components/AppComponents/TableSelected/TableSelected'

function Test() {

  return (
    <div className='w-full h-full flex gap-x-4 justify-center items-center'>  
      <PrimaryNoIcon 
        content='Button'
      />
      <PrimaryWithIcon
        content='Button'
        iconSrc={HomeIcon}
      />
      <SecondaryNoIcon
        content='Button'
      />
      <SecondaryWithIcon
        content='Button'
        iconSrc={HomeBlueIcon}
      />
    </div>
  )
}

function App() {
  return (
    <div className='w-full h-full flex'>  
      <Sidebar />
      <div className='flex-1'>

      </div>
      <TableSelected />
    </div>
  )
}

export default App
