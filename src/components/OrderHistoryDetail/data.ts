export const OrderDetailCreator = {
  category: '패스트푸드',
  storeName: '버거킹전남대점',
  minimumOrderAmount: 3,
  pickUpLocation: 'example1',
  deliveryStatus: true,
  memberInfo: [
    {
      memberId: 321,
      deliveryName: '배민닉네임1',
      price: 6800,
      isPayed: false,
    },
    {
      memberId: 123,
      deliveryName: '배민닉네임2',
      price: 12300,
      isPayed: true,
    },
  ],
};

export const OrderDetailMemberData = {
  category: '패스트푸드',
  storeName: '버거킹전남대점',
  minimumOrderAmount: 3,
  pickUpLocation: 'example1',
  deliveryStatus: false,
  price: 11900,
};
