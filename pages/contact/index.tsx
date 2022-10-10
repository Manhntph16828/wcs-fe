import React from 'react'

type Props = {}

const Contact = (props: Props) => {
    return (
        <div>
            <iframe className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863855881428!2d105.74459841482062!3d21.03813279283435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1664180971300!5m2!1svi!2s"
            width="600" height="450" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="main w-[1410px] mx-auto mt-[80px] grid grid-cols-2">
                <div className="mr-[81px]">
                    <h2 className="text-2xl mb-[30px]">LIÊN HỆ</h2>
                    <span className="text-[#6E6F7E] ">Nếu bạn muốn biết thêm về các chính sách của chúng tôi, bạn có thể tham khảo
                        các điều khoản và điều kiện của chúng tôi. Bạn cũng sẽ có thể làm theo đơn đặt hàng của mình (số theo
                        dõi sẽ được cung cấp trong e-mail sau khi đặt hàng). Bạn muốn trả lại một số mặt hàng?
                        <a href="./cancel-order.html" className="text-[#E22C43]">Bấm vào đây.</a>
                    </span>
                    <div className="mt-[40px]">
                        <div className="flex">
                            <img src="./img/Frame.png" alt="" className="w-[30px] h-[30px] mr-[26px]" />
                            <div>
                                <h3 className="text-xl">Địa chỉ</h3>
                                <span className="text-[#6E6F7E]">Số 1 Trịnh Văn Bô, Phương Canh, Nam Từ Liêm, Hà Nội</span>
                            </div>
                        </div>
                        <div className="flex py-[20px]">
                            <img src="./img/Group.png" alt="" className="w-[30px] h-[30px] mr-[26px]"/>
                                <div>
                                    <h3 className="text-xl">Số điện thoại</h3>
                                    <span className="text-[#6E6F7E]">0987654321</span>
                                </div>
                        </div>
                        <div className="flex">
                            <img src="./img/Group (1).png" alt="" className="w-[30px] h-[30px] mr-[26px]"/>
                                <div>
                                    <h3 className="text-xl">Email</h3>
                                    <span className="text-[#6E6F7E]">example@gmail.com</span>
                                </div>
                        </div>
                        <div className="flex py-[20px]">
                            <img src="./img//Frame2.png" alt="" className="w-[30px] h-[30px] mr-[26px]"/>
                                <div>
                                    <h3 className="text-xl">Giờ mở cửa</h3>
                                    <span className="text-[#6E6F7E]">Từ 7h - 21h hàng ngày </span>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <h2 className="text-2xl">GÓP Ý VỚI CHÚNG TÔI</h2>
                    <input type="text" placeholder="Tên của bạn"
                        className="w-[690px] h-[60px] border border-[#A4A5AE] pl-[24px] mt-[30px]"/>
                        <input type="text" placeholder="Email của bạn"
                            className="w-[690px] h-[60px] border border-[#A4A5AE] pl-[24px] mt-[30px]"/>
                            <textarea name="" id="" className="w-[690px] border border-[#A4A5AE] mt-[30px] h-[120px]">
                            </textarea>
                            <div>
                                <button className="bg-black w-[690px] h-[60px] mt-[28px] ">
                                    <a href="" className="text-slate-50 ">Gửi</a>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                )
}

                export default Contact