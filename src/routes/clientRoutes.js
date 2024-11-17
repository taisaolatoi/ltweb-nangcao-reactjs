import { createBrowserRouter } from 'react-router-dom';
import LoginForm from '../containers/auth/Login';
import RegisForm from '../containers/auth/Register';
import Content from '../component/content';
import LayOut from '../containers/homepage/Layout';
import ProductList from '../containers/productpage/productpage';
import ProductDetail from '../containers/productdetail/productdetail';
import InfoPage from '../containers/acount/info';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
        children: [
            {
                path: "/",
                element: <InfoPage />
            },
            {
                path: "/product",
                element: <ProductList />
            },
            {
                path: "/product_detail",
                element: <ProductDetail />
            },
            {
                path: "/account",
                element: <InfoPage />
            }
        ]
    },
    {
        path: "*",
        element: <div>Không tìm thấy web theo yêu cầu</div>
    }
]);
