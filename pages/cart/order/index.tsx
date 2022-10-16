import React from 'react'
import Image from 'next/image'
type Props = {}

const Cart = (props: Props) => {
  return (
    <div>
        <div className="w-[1140px] mx-auto ">
        <div className="text-2xl py-[25px]">
            <span>Trang chủ</span> `{'>'}` <span className="text-[#E22C43]">Giỏ hàng</span>
        </div>
        <div className="oder-table">
            <table className="w-full mt-[30px]">
                <thead>
                    <tr>
                        <th className="border-solid border-2 border-[#C4C4C4] h-[60px] w-[444px]">TÊN SẢN PHẨM </th>
                        <th  className="border-solid border-2 border-[#C4C4C4]  h-[60px]">GIÁ</th>
                        <th  className="border-solid border-2 border-[#C4C4C4]  h-[60px]">SỐ LƯỢNG </th>
                        <th  className="border-solid border-2 border-[#C4C4C4] p-auto  h-[60px]">TỔNG </th>
                        <th  className="border-solid border-2 border-[#C4C4C4] p-auto  h-[60px] w-[157px]">HỦY ĐƠN HÀNG</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-solid border-2 border-[#C4C4C4] ">
                        <th className="flex ">
                             <Image src="/img/Main image.png" layout='fill' className="ml-[20px] mt-[34px] mb-[34px] h-[120px] w-[100px]" alt=""/>
                            <span className="my-auto ml-[50px]">Tên sản phẩm</span>
                        </th>
                        <th className=" ">$5000</th>
                        <th className="">
                            <span><a href="">2</a></span>
                            
                        </th>
                        <th className="">$10000</th>
                        <th className=" "><a href="" className="text-red-500">X</a></th>
                    </tr>
                </tbody>
            </table>
            <div className=" relative ">
                <button className="w-[340px] h-[60px] bg-black text-slate-50 mt-[55px] rounded-[4px] absolute right-0 hover:bg-orange-500"><a href="" className="text-[18px]">Tiếp tục xem sản phẩm {'->'} </a></button>
            </div>
        </div>
        <div className="payment mt-[180px] text-lg border-solid border-2 border-[#C4C4C4]">
           <div className="py-[16px] ml-[71px]">Tổng Tiền</div>
           <hr className="mx-[71px]"/>
           <div className="flex ml-[71px] mt-[24px]">
                <span>Tổng</span>
                 <span className="px-[619px]">$10000</span>
           </div>
           <button className="w-[340px] h-[60px] bg-black text-slate-50 my-[38px] rounded-[4px] ml-[71px]"><a href="" className="text-[18px]">Thanh toán</a></button>

        </div>
    </div>   
    </div>
  )
}

export default Cart