import React from 'react'
import Image from 'next/image'
type Props = {}

const orderCancel = (props: Props) => {
    return (
        <div>
            <div className="main w-[1240px] mx-auto mt-[112px] mb-[50px]">
                <div className="mr-[81px]">
                    <h2 className="text-2xl mb-[30px]">HỦY ĐƠN HÀNG</h2>
                </div>
                <div className="border-solid border-2 border-[#C4C4C4] mt-[40px] ">
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
                                    <td className="py-4 px-6 text-base">
                                        <p><a href="">160.000 </a>vnđ</p>
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                    <hr className="w-full"/>
                        <div className="grid grid-cols-2 h-[59px]">
                            <div></div>
                            <div className=" my-auto flex">
                                <a href="" className="text-xl text-[#000000] ml-[84px]">Tổng tiền: </a>
                                <p><a href="" className="text-lg ml-[260px] text-[#E22C43]">160.000 vnđ</a></p>
                            </div>
                        </div>

                </div>
                <div className="mt-[40px] ">
                    <h3 className="text-lg mb-[15px]">Lý do hủy đơn: </h3>
                    <input type="checkbox" className="mr-[10px]" /><a href="" className="text-lg">Thay đổi địa điểm</a> <br />
                    <input type="checkbox" className="mr-[10px]" /><a href="" className="text-lg">Không còn nhu cầu mua nữa</a> <br />
                    <input type="checkbox" className="mr-[10px]" /><a href="" className="text-lg">Muốn thay đổi kích cỡ màu sắc</a> <br />
                    <input type="checkbox" className="mr-[10px]" /><a href="" className="text-lg">Tôi còn mã giảm giá chưa dùng</a> <br />
                    <input type="checkbox" className="mr-[10px]" /><a href="" className="text-lg">Quần áo bị hư hại </a><br />
                    <a href="" className='mt-[5px] text-lg: '>Lý do khác :</a> <br />
                    <textarea name="" id="" className='w-[480px] h-[100px] border-2 border-black mt-[20px]'></textarea><br />
                    <button className="mt-[30px] text-slate-50 bg-[#E22C43] w-[300px] h-[60px]">Xác nhận hủy đơn</button>
                </div>
            </div>
        </div>
    )
}

export default orderCancel