import React, { useState, useEffect } from 'react';
import { Input, Form, Button, Toast } from 'antd-mobile';
import { history } from 'umi';
import { useStoreHook } from 'think-react-store';

import './index.less';

function Login(props) {
  const { user: { loginAsync } } = useStoreHook();

  const handleSubmit = (values) => {
    loginAsync(values);
    console.log(values)
  };

  const handleClick = () => {
    history.push('/register');
  };

  useEffect(() => {

  }, [])

  return (
    <div className='login-page'>
      <Form onFinish={handleSubmit} footer={
        <Button color='warning' block size='large' type='submit'>登录</Button>
      }>
        <Form.Header>用户登录</Form.Header>
        <Form.Item
          name='username'
          rules={[{ required: true, message: '用户名不能为空',  }]}
          label='用户名'
        >
          <Input placeholder='请输入姓名' />
          </Form.Item>
        <Form.Item
          name='password'
          rules={[{ required: true, message: '密码不能为空' }]}
          label='密码'
        >
          <Input placeholder='请输入密码' />
        </Form.Item>
      </Form>
      <div className='register' onClick={handleClick}>没有账户，去注册</div>
    </div>
  )
}

export default Login;