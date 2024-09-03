import { useState } from 'react'
import './App.css'
import PrimaryNoIcon from './Components/Buttons/PrimaryNoIcon'
import PrimaryWithIcon from './Components/Buttons/PrimaryWithIcon'
import SecondaryNoIcon from './Components/Buttons/SecondaryNoIcon'
import SecondaryWithIcon from './Components/Buttons/SecondaryWithIcon'
import HomeIcon from './Assets/Icons/home.svg'
import HomeBlueIcon from './Assets/Icons/HomeBlue.svg'

function App() {

  return (
    <div className='flex gap-x-4'>  
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

export default App
