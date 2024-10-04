import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '@components/features/Layout/Layout';
import IntroducePage from '@pages/Introduce';
import SpotPage from '@pages/SpotPage';
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
    path: RouterPath.root,
    element: <Layout />,
    children: [
      {
        path: RouterPath.introtuce,
        element: <IntroducePage />,
      },
      {
        path: RouterPath.main,
        element: <SpotPage />,
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
