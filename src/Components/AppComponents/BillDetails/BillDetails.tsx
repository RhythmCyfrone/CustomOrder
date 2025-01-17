import { useState } from 'react';
import BillViewIcon from '../../../Assets/Icons/BillView.svg'
import SeparatingLine from '../../../Assets/Icons/SeparatingLine.svg'
import NoteIcon from '../../../Assets/Icons/Note.svg'
import PriceTagIcon from '../../../Assets/Icons/price-tag.svg'
import SplitBillIcon from '../../../Assets/Icons/SplitBIll.svg'
import CombineBillIcon from '../../../Assets/Icons/CombineBill.svg'
import CancelBillIcon from '../../../Assets/Icons/x-button.svg'
import MoreIcon from '../../../Assets/Icons/More.svg'
import '../../../Styles/Fonts.css'
import '../../../Styles/Shadows.css'
import '../../../Styles/Animations.css'

const BillDetails = () => {
    const [isRotated, setIsRotated] = useState(false);
    const [viewBill, setViewBill] = useState(false)
    const [viewMore, setViewMore] = useState(false);
    
    const bottomPadding = isRotated?'pb-[16px]':'pb-[32px]'
    const topPadding = isRotated || viewMore?'pt-[16px]':'pt-[32px]'
    const translate = isRotated || viewMore?'-translate-y-[60%]':'-translate-y-[50%]'

    const handleIconClick = () => {
        setIsRotated(!isRotated);
        if(!viewBill)
            setViewBill(true)
    };
  return (
    <div className='absolute bottom-[0px] z-10'>
        <div className={`relative w-[420px] bg-[#DDEBFF] rounded-t-[32px] flex flex-col transform-padding duration-500 ${topPadding}`}>
            {viewBill && 
                <div className={`ps-[32px] pe-[32px] flex flex-col ${isRotated?'fade-in ':'fade-out'}`} 
                    onAnimationEnd={() => {
                        if(!isRotated)
                            setViewBill(false)
                    }}
                >
                    <div className='flex justify-between p-0 items-center'>
                        <span className='font-poppins font-normal text-[16px]'>Sub Total</span>
                        <span className='font-poppins font-normal text-[20px]'>1000 /-</span>
                    </div>
                    <div className='flex flex-col gap-y-[4px]'>
                        <div className='flex justify-between p-0 items-center'>
                            <span className='font-poppins font-normal text-[16px]'>Discount (10%)</span>
                            <span className='font-poppins font-normal text-[16px] text-[#FF4F4F] cursor-pointer'>Remove</span>
                            <span className='font-poppins font-normal text-[12px]'>171</span>
                        </div>
                        <div className='flex justify-between p-0 items-center'>
                            <span className='font-poppins font-normal text-[16px]'>Service Charge (2%)</span>
                            <span className='font-poppins font-normal text-[16px] text-[#FF4F4F] cursor-pointer'>Remove</span>
                            <span className='font-poppins font-normal text-[12px]'>34.22</span>
                        </div>
                        <div className='flex justify-between p-0 items-center'>
                            <span className='font-poppins font-normal text-[16px]'>SGST (13%)</span>
                            <span className='font-poppins font-normal text-[12px]'>50.6</span>
                        </div>
                        <div className='flex justify-between mb-[16px] p-0 items-center'>
                            <span className='font-poppins font-normal text-[16px]'>CGST (13%)</span>
                            <span className='font-poppins font-normal text-[12px]'>90.71</span>
                        </div>
                    </div>
                    
                </div>
            }
            <div className={`absolute left-[50%] top-[0px] ${translate} -translate-x-[50%] transform-all duration-500 w-[147px] min-h-[80px] bg-[#DDEBFF] rounded-t-[16px]
                            flex flex-col items-center p-[8px]`}
            >
                <img
                    src={BillViewIcon}
                    className={`cursor-pointer transition-transform duration-500 ${
                        isRotated ? '-rotate-180':''
                    }`}
                    onClick={handleIconClick}
                />
                {
                    isRotated 
                    ?<span className='font-normal text-[14px] text-[#020202]'>Close</span>
                    :<span className='font-normal text-[14px] text-[#020202]'>View Bill Details</span>
                }
            </div>
            <div className='flex justify-between p-0 items-center ps-[32px] pe-[32px]'>
                <span className='font-poppins font-normal text-[16px]'>Grand Total</span>
                <span className='font-poppins font-normal text-[24px]'>1000 /-</span>
            </div>
            <img src={SeparatingLine} className='w-full' />
            <div className='flex flex-wrap mt-[12px] gap-x-[32px] gap-y-[10px] ps-[32px] pe-[32px]'>
                <div className='p-[5.5px] ps-[20px] pe-[20px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer'>
                    <img src={NoteIcon} />
                    <span className='font-poppins font-normal text-[10px] text-white'>Note</span>
                </div>
                <div className='p-[5.5px] ps-[14px] pe-[14px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer'>
                    <img src={PriceTagIcon} />
                    <span className='font-poppins font-normal text-[10px] text-white'>Discount</span>
                </div>
                <div className='p-[5.5px] ps-[14px] pe-[14px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer'>
                    <img src={SplitBillIcon} />
                    <span className='font-poppins font-normal text-[10px] text-white'>Split Bill</span>
                </div>
                <div className={`${viewMore?'hidden':''} p-[5.5px] ps-[20px] pe-[20px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer`}
                    onClick={() => setViewMore(!viewMore)}
                >
                    <img src={MoreIcon} />
                    <span className='font-poppins font-normal text-[10px] text-white'>More</span>
                </div>
                <div className={`${viewMore?'':'hidden'} p-[5.5px] ps-[12px] pe-[12px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer`}
                >
                    <img src={CombineBillIcon} />
                    <span className='font-poppins font-normal text-[10px] text-white'>Combine</span>
                </div>
                <div className={`${viewMore?'':'hidden'} p-[5.5px] ps-[5px] pe-[5px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer`}
                >
                    <img src={CancelBillIcon} />
                    <span className='font-poppins font-normal text-[8.5px] text-white'>Cancel Order</span>
                </div>
            </div>
            <div className={`ps-[32px] pe-[32px] w-full mt-[12px] ${bottomPadding} transition-all duration-500`}>
                <div className='text-center fontButtonDefault bg-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover active:shadow-none'
                >
                    Generate Bill
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default BillDetails
