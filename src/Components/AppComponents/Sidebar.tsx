import React from 'react'
import '../../Styles/Shadows.css'
import '../../Styles/Fonts.css'
import PosSidebarIcon from '../../Assets/Icons/PosSidebar.svg'
import TableSidebarUnselectedIcon from '../../Assets/Icons/TableSidebarUnselected.svg'
import TableSidebarSelectedIcon from '../../Assets/Icons/TableSidebarSelected.svg'



const Sidebar = () => {
  return (
    <div className='relative w-[80px] shadow-sidebar p-[10px] pt-[15px] pb-[15px]'>
      <div className='fontSidebarHeading text-CustomBrand-300 text-[25px]'>
        ZUCI
      </div>
      <div className='text-center p-[1px] fontSidebarSubHeading text-CustomBrand-200 text-[11px] mt-[-5px]'>
        jubilee hills
      </div>
      <div className='absolute top-[150px] flex flex-col gap-y-4 left-[15px] right-[15px]'>
        <div className='bg-CustomBrand-300 rounded-[5px] flex justify-center p-[11px] cursor-pointer'>
          <img src={PosSidebarIcon} />
        </div>
        <div className='rounded-[5px] flex justify-center ps-[8px] pe-[8px] pt-[7px] pb-[7px] cursor-pointer'>
          <img src={TableSidebarUnselectedIcon} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
