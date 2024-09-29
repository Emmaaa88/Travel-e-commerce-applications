export default {
  'post /api/house/search': (req, res) => {
    setTimeout(() => {
      let data;
      if(req.body.pageNum < 4){
        data =  [
          {
            id: 1,
            imgs: [{url: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg'}],
            name: '东城民宿',
            info: '东城区交通方便',
            price: '100'
          },
          {
            id: 2,
            imgs: [{url: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg'}],
            name: '西城民宿',
            info: '西城区山水怡情',
            price: '120'
          },
          {
            id: 3,
            imgs: [{url: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg'}],
            name: '新区民宿',
            info: '新区民宿位置优越',
            price: '200'
          },
          {
            id: 4,
            imgs: [{url: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg'}],
            name: '老城民宿',
            info: '老城区风景秀美',
            price: '220'
          },
          {
            id: 5,
            imgs: [{url: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg'}],
            name: '东城民宿',
            info: '东城区交通方便',
            price: '100'
          },
          {
            id: 6,
            imgs: [{url: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg'}],
            name: '西城民宿',
            info: '西城区山水怡情',
            price: '120'
          },
          {
            id: 7,
            imgs: [{url: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg'}],
            name: '新区民宿',
            info: '新区民宿位置优越',
            price: '200'
          },
          {
            id: 8,
            imgs: [{url: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg'}],
            name: '老城民宿',
            info: '老城区风景秀美',
            price: '220'
          },
        ]
      }else {
        data = []
      }
      res.json({
        status: 200,
        data
      });
    }, 500);
    
  },
  'post /api/house/detail': (req, res) => {
    res.json({
      status: 200,
      data: {
        id: 8,
        banner: [
          {
            url: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png', id: 1
          },
          {
            url: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png', id: 2
          },
          {
            url: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png', id: 3
          },
        ],
        info: {
          title: '老城民宿',
          msg: '老城区风景秀美',
          price: '220',
          publishTime: 1678880399000,
          startTime: 1678880399000,
          endTime: 1678880399000,
        }
      }
    });
  },
  'post /api/comment/lists': (req, res) => {
    setTimeout(() => {
      let data;
      if (req.body.pageNum < 4) {
        data = [
          {
            id: 1,
            avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
            username: 'user',
            createTime: 1678880399000,
            info: '房屋很满意'
          },
          {
            id: 2,
            avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
            username: 'user',
            createTime: 1678880399000,
            info: '空气清新'
          },
          {
            id: 3,
            avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
            username: 'user',
            createTime: 1678880399000,
            info: '态度温和'
          },
          {
            id: 4,
            avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
            username: 'user',
            createTime: 1678880399000,
            info: '早餐味道美'
          },
          {
            id: 5,
            avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
            username: 'user',
            createTime: 1678880399000,
            info: '态度温和'
          },
          {
            id: 6,
            avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
            username: 'user',
            createTime: 1678880399000,
            info: '早餐味道美'
          },
          {
            id: 7,
            avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
            username: 'user',
            createTime: 1678880399000,
            info: '态度温和'
          },
          {
            id: 8,
            avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
            username: 'user',
            createTime: 1678880399000,
            info: '早餐味道美'
          },
        ]
      } else {
        data = [];
      }
      res.json({
        status: 200,
        data
      });
    }, 100);
  },
  'post /api/comments/add': (req, res) => {
    res.json({
      status: 200,
      data: 'ok'
    });
  }
};