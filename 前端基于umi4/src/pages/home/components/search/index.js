import React, { useState, useEffect, memo } from 'react';
import { Picker, List, Calendar, Button, Toast, Popup } from 'antd-mobile';
import dayjs from 'dayjs';
import { useHttpHook } from '@/hooks';
import { history } from 'umi';

function Search(props) {
  console.log('search render', props.citys)
  // const [citys, setCitys] = useState([[{ label: '杭州', value: '10001' }, { label: '苏州', value: '10002' }]]);
  const [selectedCity, setSelectedCity] = useState(['10001']);
  const [times, setTimes] = useState('可选时间');
  const [dateShow, setDateShow] = useState(false);

  const handleCityChange = (value) => {
    // console.log(value);
    setSelectedCity(value);
  };

  const handleDate = () => {
    setDateShow(!dateShow);
  };

  const handleDateConfirm = (time) => {
    setTimes(dayjs(time[0]).format('YYYY-MM-DD') + '~' + dayjs(time[1]).format('YYYY-MM-DD'));
  };

  const handleClick = () => {
    if(times.includes('~')){
      history.push({
        pathname: '/search',
        // umi4 语法
        search: `?code=${selectedCity}&startTime=${times.split('~')[0]}&endTime=${times.split('~')[0]}`,
        // query: {
        //   code: selectedCity,
        //   startTime: times.split('~')[0],
        //   endTime: times.split('~')[1],
        // }
      });
    }else {
      // Toast.fail('请选择时间');
      Toast.show({
        icon: 'fail',
        content: '请选择时间',
      })
    }
  };

  useEffect(() => {

  }, [])

  return (
    <div className='search'>
      {/**可选城市 */}
      <div className='search-addr'>
        {!props.citysLoading && <Picker
          title='城市'
          columns={props.citys}
          value={selectedCity}
          onConfirm={handleCityChange}
        >
          {(_, actions) => 
            <List.Item onClick={actions.open}>可选城市</List.Item>  
          }
        </Picker>}
      </div>
      {/**可选时间 */}
      <div className='search-time' onClick={handleDate}>
        <p className='search-time_left'>出租时间</p>
        <p className='search-time_right'>{times}</p>
      </div>
      {/**点击按钮 */}
      <Button color='warning' block onClick={handleClick}>搜索民宿</Button>
      {/* <Calendar
        visible={dateShow}
        onCancel={handleDate}
        onConfirm={handleDateConfirm}
      /> */}
      <Popup
        visible={dateShow}
        onMaskClick={handleDate}
      >
        <Calendar
          selectionMode='range'
          onChange={handleDateConfirm}
        />
      </Popup>
    </div>
  )
}

function areEqual(prevProps, nextProps){
  // console.log(prevProps, nextProps)
  if(prevProps.citys === nextProps.citys && prevProps.citysLoading === nextProps.citysLoading){
    return true;
  }else {
    return false;
  }
}

export default memo(Search, areEqual);