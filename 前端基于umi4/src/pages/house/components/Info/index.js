import React, { useState, useEffect } from 'react';
import { Button } from 'antd-mobile';
import { timer } from '@/utils';

export default function(props){
  const [state, setState] = useState()

  const handleOrder = (id) => {
    props?.btnClick(id)
  }

  const renderBtn = () => {
    // order里面没有id，说明订单一定不存在
    if(!props.order?.id){
      return <Button className='info-btn' color='warning' block onClick={()=>handleOrder()}>预定</Button>
    }

    // 已经有订单了，处于未支付状态
    if(props.order?.isPayed === 0){
      return <Button className='info-btn' color='danger' onClick={()=>handleOrder(props.order.id)}>取消预定</Button>
    }

    // 已经有订单了，处于已支付状态
    if(props.order?.isPayed === 1){
      return <Button className='info-btn' color='primary'>居住中</Button>
    }
  }

  useEffect(() => {

  }, [])

  return (
    <div className='info'>
      <div className='info-title'>{props?.detail?.name}</div>
      <div className='info-msg'>简介：{props?.detail?.info}</div>
      <div className='info-price'>价格：{props?.detail?.price}</div>
      <div className='info-time'>发布时间：{timer(props?.detail?.publishTime)}</div>
      <div className='info-time'>开始出租：{timer(props?.detail?.startTime, '')}</div>
      <div className='info-time'>结束出租：{timer(props?.detail?.endTime, '')}</div>
      {renderBtn()}
    </div>
  )
}