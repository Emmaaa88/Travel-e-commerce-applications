import React, { useState, useEffect } from 'react';
import { List, Button } from 'antd-mobile';
import { history } from 'umi';
import { useStoreHook } from 'think-react-store';
import { ErrorBoundary } from '@/components';

import './index.less';

export default function (props) {
  const { user: { username, avatar, phone, sign, getUserAsync, logoutAsync } } = useStoreHook();
  const [state, setState] = useState()

  const handleClick = () => {
    history.push({
      pathname: '/user/edit',
      query: {
        id: 10
      }
    });
  };

  const handleLogout = () => {
    logoutAsync();
  };

  useEffect(() => {
    getUserAsync({
      id: 10
    });
  }, [])
  
  return (
    <ErrorBoundary>
    <div className='user-page'>
      {/**用户信息 */}
      <div className='info'>
        <div className='set' onClick={handleClick}>设置</div>
        <div className='user'>
          <img alt='user' src={avatar || require('../../assets/yay.jpg')} onError="javascript:alert('xss')"/>
          <div className='tel'>{phone}</div>
          <div className='sign'>{sign}</div>
        </div>
      </div>
      {/**列表 */}
      <div className='lists'>
        <List>
          <List.Item arrow>
            用户协议
          </List.Item>
          <List.Item arrow>
            常见问题
          </List.Item>
          <List.Item arrow>
            联系客服
          </List.Item>
        </List>
      </div>
      <Button style={{marginTop:'100px'}} block color='warning' onClick={handleLogout}>退出登录</Button>
    </div>
    </ErrorBoundary>
  )
}