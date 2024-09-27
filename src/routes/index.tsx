import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '@components/features/Layout/Layout';
import MainPage from '@pages/MainPage';
import LoginPage from '@pages/LoginPage';
import SignupPage from '@pages/SignupPage';
import MyPage from '@pages/MyPage';
import OrderHistoryPage from '@pages/OrderHistoryPage';
import OrderDetailPage from '@pages/OrderDetailPage';
import PointPage from '@pages/PointPage';
import PaymentPage from '@pages/PaymentPage';

import { RouterPath } from './path';

const router = createBrowserRouter([
  {
    path: RouterPath.introtuce,
    element: <Layout />,
    children: [
      {
        path: RouterPath.main,
        element: <MainPage />,
      },
      {
        path: RouterPath.login,
        element: <LoginPage />,
      },
      {
        path: RouterPath.signup,
        element: <SignupPage />,
      },
      {
        path: RouterPath.myPage,
        element: <MyPage />,
      },
      {
        path: RouterPath.myPageOrderHistory,
        element: <OrderHistoryPage />,
      },
      {
        path: RouterPath.myPageOrderDetail,
        element: <OrderDetailPage />,
      },
      {
        path: RouterPath.myPagePoint,
        element: <PointPage />,
      },
      {
        path: RouterPath.payment,
        element: <PaymentPage />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
