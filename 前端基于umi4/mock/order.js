export default {
  'post /api/orders/lists': (req, res) => {
    setTimeout(() => {
      let data;
      if(req.body.pageNum <4){
        data = [
          {
            id: 1,
            house: {
              imgs: [{
                url: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
              }],
              name: '东城民宿',
              info: '东城区交通方便',
              price: '100',
            },
            createTime: '2022-03-05',
          },
          {
            id: 2,
            house: {
              imgs: [{
                url: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
              }],
              name: '西城民宿',
              info: '西城区山水怡情',
              price: '100',
            },
            createTime: '2022-03-05',
          },
          {
            id: 3,
            house: {
              imgs: [{
                url: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
              }],
              name: '东城民宿',
              info: '东城区交通方便',
              price: '200',
            },
            createTime: '2022-03-15',
          },
          {
            id: 4,
            house: {
              imgs: [{
                url: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
              }],
              name: '东城民宿',
              info: '东城区交通方便',
              price: '100',
            },
            createTime: '2022-03-15',
          },
          {
            id: 5,
            house: {
              imgs: [{
                url: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
              }],
              name: '东城民宿',
              info: '东城区交通方便',
              price: '100',
            },
            createTime: '2022-03-15',
          },
          {
            id: 6,
            house: {
              imgs: [{
                url: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
              }],
              name: '东城民宿',
              info: '东城区交通方便',
              price: '120',
            },
            createTime: '2022-03-15',
          },
          {
            id: 7,
            house: {
              imgs: [{
                url: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
              }],
              name: '东城民宿',
              info: '东城区交通方便',
              price: '150',
            },
            createTime: '2022-03-15',
          },
          {
            id: 8,
            house: {
              imgs: [{
                url: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
              }],
              name: '东城民宿',
              info: '东城区交通方便',
              price: '200',
            },
            createTime: '2022-03-15',
          }
        ]
      }else {
        data = [];
      }
      res.json({
        status: 200,
        data
      })
    }, 500);
  },
  'POST /api/orders/pay': (req, res) => {
    res.json({
      data: 'ok',
      status: 200
    });
  },
  'POST /api/comment/add': (req, res) => {
    res.json({
      data: 'ok',
      status: 200
    });
  },
  'POST /api/orders/hasOrder': (req, res) => {
    res.json({
      data: 'ok',
      status: 200
    });
  },
  'POST /api/orders/addOrder': (req, res) => {
    res.json({
      data: 'ok',
      status: 200
    });
  },
};