import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'
type Props = {}

const cartDetail = (props: Props) => {
    
    return (

        <div>
            <div className="main w-[1240px] mx-auto mt-[112px] mb-[160px]">
                <div className="grid grid-cols-2">
                    <div className="">
                        <div className="">
                            <p className="mb-[26px]">Mã đơn: <a href="">6aasfadatsgcaf7qw7e7</a></p>
                            <p className="mb-[26px]">Thông tin giao hàng:</p>
                            <div className="border border-[#A4A5AE] w-10/12	h-[200px]">
                                <div className="py-[30px] ml-[24px] ">
                                    <p className="mt-[4px]">Tên: <a href="">Nguyễn Văn A</a></p>
                                    <p className="py-[10px]">Địa chỉ: <a href="">Mê Linh, Hà Nội</a></p>
                                    <p>SĐT: <a href="">0987654321</a></p>
                                    <p className="py-[10px]">Email: <a href="">example@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
</div>
                    <div className="">
                        <div className="ml-[60px]">
                            <p className="mb-[26px]">Ngày tạo: <a href="">22/9/2022 11:22:25</a></p>
                            <p className="mb-[26px]">Ghi chú:</p>
                            {/* <textarea name="" className="border border-[#A4A5AE] w-full	h-[200px]">

                            </textarea> */}

                        </div>
                    </div>
                </div>
                <div className="border-solid border-2 border-[#C4C4C4] mt-[40px] w-full">

                    <div className="overflow-x-auto relative">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6 text-base">
                                        Sản phẩm
                                    </th>
                                    <th scope="col" className="py-3 px-6 text-base">
                                        Đơn giá
                                    </th>
                                    <th scope="col" className="py-3 px-6 text-base">
                                        Số Lượng
                                    </th>
                                    <th scope="col" className="py-3 px-6 text-base">
                                        Tổng
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row"
                                        className="flex py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[240px]">
                                        <Image src="/img//Main image.png" layout='fill' className="w-[100px] h-[120px]" alt="" />
                                        <p className="ml-[40px] my-auto text-base">Tên Sản Phẩm</p>
                                    </th>
                                    <td className="py-4 px-6 text-base">
                                        <p><a href="">100.000 </a>vnđ</p>
                                        <p className="mt-[10px]">20%</p>
                                    </td>
                                    <td className="py-4 px-6 text-base">
                                        2
                                    </td>
                                    <td className="py-4 px-6 text-base ">
                                        <p><a href="">160.000 </a>vnđ</p>
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>

                    <hr className="w-full" />
                    <div className="grid grid-cols-2 h-[59px]">

                        <div></div>
                        <div className=" my-auto flex">
                            <a href="" className="text-lg text-[#000000] ml-[84px]">Tổng tiền: </a>
                            <p><a href="" className="text-lg ml-[220px] text-[#E22C43]">160.000 vnđ</a></p>


                        </div>
                    </div>

                </div>
                <div className="flex relative mt-[60px]">
                    <div>
                        <h2 className="ml-[40px] text-xl">Trạng Thái Đơn Hàng</h2>
                    </div>
                    <div className="absolute right-0">
                        <button className="w-[260px] h-[60px] bg-[#E22C43] text-slate-50 hover:bg-amber-400">Đang Xử Lý</button><br />
                        <button className="w-[260px] h-[60px] bg-[#060606] text-slate-50 mt-[30px] hover:bg-red-700">Hủy Đơn Hàng</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cartDetail