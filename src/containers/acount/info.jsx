import React from "react";
import './info.scss'
const InfoPage = () => {
    return(
        <>
        <div className="account_page_inner">
            <div className="account_page_sidebar">
                <div className="account_sidebar">
                    <div className="account_sidebar_items">
                        <a href="" className="account_sidebar_item">
                            <span className="cirkle">
                                <img src="https://mcdn.coolmate.me/image/September2023/mceclip6_34.png" alt="" />
                                <p>Thông tin tài khoản</p>
                            </span>
                        </a>
                        <a href="" className="account_sidebar_item">
                            <span className="cirkle">
                                <img src="https://mcdn.coolmate.me/image/September2023/mceclip4_7.png" alt="" />
                            </span>
                            <p>Lịch sử đơn hàng</p>
                        </a>
                        <a href="" className="account_sidebar_item">
                            <span className="cirkle">
                                <img src="https://mcdn.coolmate.me/image/September2023/mceclip4_6.png" alt="" />
                                <p>Đăng xuất</p>
                            </span>
                        </a>

                    </div>
                </div>
            </div>
            <div className="account_page_content">
                
            </div>
        </div>

        </>
    )
}
export default InfoPage;