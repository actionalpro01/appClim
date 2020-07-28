const listData = [
  {
    id: '001',
    iconName: 'comment',
    title: 'About yourself',
    content: [
      {
        id: 1,
        title:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece',
      },
    ],
    type: 1,
  },
  {
    id: '002',
    iconName: 'graduation-cap',
    title: 'Education',
    content: [
      {id: 1, title: 'London Hight School', isGrad: true},
      {id: 2, title: 'London University', isGrad: false},
    ],

    type: 2,
  },
  {
    id: '003',
    iconName: 'book',
    title: 'Work Experience',
    content: [
      {id: 1, title: 'Gruby Company', position: 'Employee'},
      {id: 2, title: 'Mina Company', position: 'Manager'},
    ],

    type: 3,
  },
];
export {listData};
