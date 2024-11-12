import { createBrowserRouter } from 'react-router-dom';
import LoginForm from '../containers/auth/Login';
import RegisForm from '../containers/auth/Register';
import Content from '../component/content';
import LayOut from '../containers/homepage/Layout';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut />,
        children: [
            {
                path: "/",
                element: <Content />
            },
            {
                path: "/login",
                element: <LoginForm />
            },
            {
                path: "/regis",
                element: <RegisForm />
            },
        ]
    },
    {
        path: "*",
        element: <div>Không tìm thấy web theo yêu cầu</div>
    }
]);
