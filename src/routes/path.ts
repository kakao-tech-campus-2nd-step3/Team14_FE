export const RouterPath = {
  root: '/',
  introduce: '/',
  spot: '/spot',
  login: '/login',
  signup: '/signup',
  myPage: '/mypage',
  myPageOrderHistory: '/mypage/orderhistory',
  myPageOrderDetail: '/mypage/orderhistory/:orderId',
  myPagePoint: '/mypage/point',
  payment: '/payment',
};

export const getDynamicPath = {
  orderDetail: (orderId: number) =>
    RouterPath.myPageOrderDetail.replace(':orderId', orderId.toString()),
};
