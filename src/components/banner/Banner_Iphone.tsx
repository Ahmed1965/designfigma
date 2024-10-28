import React from 'react'
import Image from 'next/image'
import Images from '../../../public/Images.png'
import Ellipse_13 from '../../../public/Ellipse_13.png'
import Ellipse from '../../../public/Ellipse.png'
import Ellipse_15 from '../../../public/Ellipse_15.png'
import Ellipse_16 from '../../../public/Ellipse_16.png'
import Ellipse_14 from '../../../public/Ellipse_14.png'
import ScreenSize from '../../../public/screenSize.png'
import smartphone_rotate_2 from '../../../public/smartphone_rotate_2.png'
import numberofCore from '../../../public/numberofCore.png'
import mainCamera from '../../../public/mainCamera.png'
import frontCamera from '../../../public/frontCamera.png'
import battery from '../../../public/battery.png'
import Delivery from '../../../public/Delivery.png'
import Stock from '../../../public/Stock.png'
import guranteed from '../../../public/guranteed.png'





export default function Banner_Iphone() {
  return (
    <>
      <div className="w-full h-[896px] pt-28 pr-40 pb-28 pl-40 flex gap-12">
        <div className="w-[536px] h-[516px] flex gap-12">
          <Image
            src={Images}
            alt=''
            width={413.12}
            height={516}
            className=''
          />
          <div className="w-[536px] h-[672px] flex gap-8">
            <div className="h-[112px] flex gap-6">
              <div className="w-[536px] h-10 text-[40px] leading-10 font-700">Apple iPhone 14 Pro Max
                <div className="w-[536px] h-12 flex gap-4">
                  <div className="w-[101px] h-12 py-6 text-[32px] leading-[12px] ">$1399
                    <div className="w-[419px] h-8  font-[400] text-[24px] lead-[32px] -mt-3 ml-[100px] text-[#a0a0a0] line-through tracking-[3%]">$1499
                    </div>
                    <div className="w-[1440px] h-[896px] pt-28 pr-40 pb-28 pl-140 flex gap-12">
                      <div className="w-[93px] h-6 text-[15px] font-[400] leading-6 text-[#0c0c0c] -mt-[109px] ">Select color:
                        <div className="w-[419px] h-8 pr-[246px] flex gap-2">
                          <div className="text-[#000] -mt-[30px] ml-[90px]">
                            <Image
                              src={Ellipse}
                              alt='Ellipse'
                              width={32}
                              height={32}
                            />
                            <div className="text-[#781dbc] ml-[34px] -mt-8 ">
                              <Image
                                src={Ellipse_13}
                                alt='Ellipse'
                                width={32}
                                height={32}
                              />
                            </div>
                            <div className="w-[419px] h-8 pr-[246px] flex gap-2">
                              <div className="text-[#e10000] ml-[67px] -mt-[31px] ">
                                <Image
                                  src={Ellipse_15}
                                  alt='Ellipse'
                                  width={32}
                                  height={32}
                                />
                              </div>
                            </div>
                            <div className="w-[419px] h-8 pr-[246px] flex gap-2">
                              <div className="text-[#e10000] ml-[100px] -mt-[62px] ">
                                <Image
                                  src={Ellipse_16}
                                  alt='Ellipse'
                                  width={32}
                                  height={32}
                                />
                              </div>
                            </div>
                            <div className="w-[419px] h-8 pr-[246px]  flex gap-2">
                              <div className="text-[#e8e8] -mt-[95px] ml-[136px] ">
                                <Image
                                  src={Ellipse_14}
                                  alt='Ellipse'
                                  width={32}
                                  height={32}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[122px] h-12  pt-4 pr-6 pb-4 pl-6 flex gap-2   ">
                  <div className="w-[74px] h-4 text-[14px] font-[500] leading-4  text-center  mt-10 text-[#d5d5d5] flex gap-2  ">128GB
                  </div>
                  <div className="w-[74px] h-4 text-[14px] font-[500] leading-4 text-center text-[#6f6f6f] mt-10 ml-3">256GB
                  </div>
                  <div className="w-[74px] h-4 text-[14px] font-[500] leading-4 text-center text-[#6f6f6f] mt-10 ml-3">512GB
                  </div>
                  <div className="w-[74px] h-4 text-[14px] font-[500] leading-4 text-center text-[#6f6f6f] mt-10 ml-3">1TB
                  </div>
                </div>
                <div className="w-full h-36 first-line:flex gap-4">
                  <div className="w-[168px] h-16 min-w-[168px] rounded-sm border pt-4 pr-2 pb-4 pl-2 flex gap-2 mt-10 ml-4">
                    <Image
                      src={ScreenSize}
                      alt='screenSize'
                      width={20}
                      height={20}
                      className='top-[2.14px] left-3'
                    />
                    <div className="  text-sm font-[400] leading-4    ">Screen Size
                      <div className="grid col-span-1 text-sm font-[400] leading-4 ">
                        <div className="grid col-span-1 text-sm font-[400] leading-4   " >6.7
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[168px] h-16 -mt-16 ml-52 rounded-lg border py-4 ">
                    <Image
                      src={smartphone_rotate_2}
                      alt='smartphone_rotate_2'
                      className=''
                    />
                    <div className="  text-sm font-[400] leading-4 ml-10 -mt-[22px]   ">CPU
                      <div className="text-sm font-[400] leading-4 ">
                        <div className="text-sm font-[400] leading-4    " >Apple A16 Bionic
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[168px] h-16 -mt-16 ml-[402px] rounded-lg border py-4 pt-4 pr-2 pb-4 pl-2">
                    <Image
                      src={numberofCore}
                      alt='smartphone_rotate_2'
                      className=''
                    />
                    <div className="  text-sm font-[400] leading-4 ml-10 -mt-[px]   ">Number of Core
                      <div className="text-sm font-[400] leading-4 ">
                        <div className="text-sm font-[400] leading-4    " >6
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-36 first-line:flex gap-4">
                  <div className="w-[168px] h-16 min-w-[168px] rounded-sm border pt-4 pr-2 pb-4 pl-2 flex gap-2  ml-4 -mt-[98px]">
                    <Image
                      src={mainCamera}
                      alt='mainCamera'
                      width={20}
                      height={18}
                      className='top-[3px] left-[2px]'
                    />
                    <div className="  text-sm font-[400] leading-4 text-[#4e4e4e]    ">Main Camera
                      <div className="grid col-span-1 text-sm font-[400] leading-4 ">
                        <div className="grid col-span-1 text-sm font-[400] leading-4   " >48-12-12MP
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[168px] h-16 -mt-[55px] ml-[210px] rounded-lg border py-4 ">
                    <Image
                      src={frontCamera}
                      alt='frontCamera'
                      className=''
                    />
                    <div className="  text-sm font-[400] leading-4 text-[#4e4e4e] -mt-[27px] ml-8    ">Front Camera
                      <div className="grid col-span-1 text-sm font-[400] leading-4 ">
                        <div className="grid col-span-1 text-sm font-[400] leading-4   " >12MP
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[168px] h-16 -mt-16 ml-[402px] rounded-lg border py-4 pt-4 pr-2 pb-4 pl-2">
                    <Image
                      src={battery}
                      alt='battery'
                      className=''
                    />
                    <div className="  text-sm font-[400] leading-4 ml-10 -mt-[23px] text-[#4e4e4e]   ">Battery Capacity
                      <div className="text-sm font-[400] leading-4 ">
                      <div className="text-sm font-[400] leading-4    " >4323 mAh
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[536px] h-[72px] text-sm leading-6 font-[400] tracking-normal -mt-12 ml-5 ">Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...
                </div>
                <div className=" gap-12 ml-5 py-10 flex ">
                  <div className="rounded-lg border ">Add to wishlist</div>
                  <div className="rounded-sm border ">Add to cart</div>
                </div>
                  <div className="flex">
                  <div className="">
                    <Image 
                    src={Delivery}
                    alt='Delivery'
                    className='bg-[#e4e4] -mt-5'
                    
                    />
                  </div>
                  <div className="text-sm font-[400] leading-3 text-[#4e4e4e] ">Free Delivery <br /><em>1-2 day</em> </div>
                  <div className="flex">
                  <div className="">
                    <Image 
                    src={Stock}
                    alt='Stock'
                    className='bg-[#e4e4] ml-9 -mt-2 '
                    
                    />
                  </div>
                  <div className="text-sm font-[400] leading-3 text-[#4e4e4e] ml-5">In Stock <br /><em>Today</em> </div>
                </div>

                </div>
                <div className="flex">
                  <div className="">
                    <Image 
                    src={Stock}
                    alt='Stock'
                    className='bg-[#e4e4] ml-96 -mt-14 '
                    
                    />
                  </div>
                  <div className="text-sm font-[400] leading-3 text-[#4e4e4e] ml-5 -mt-10"> Guaranteed <br /><em>1 year</em> </div>
                </div>

                
                
                
                
                

                

    
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

