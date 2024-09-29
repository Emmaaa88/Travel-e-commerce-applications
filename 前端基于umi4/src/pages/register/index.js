import React, { useState, useEffect } from 'react';
import { Form, Button, Input ,Toast } from 'antd-mobile';
import { history } from 'umi';
import { useStoreHook } from 'think-react-store';

import './index.less';

function register(props) {
  const { user: { registerAsync } } = useStoreHook();

  const handleSubmit = (values) => {
    if (values.password !== values.password2) {
      Toast.show({
        icon: 'fail',
        content: '密码和确认密码必须一致',
      })
      return;
    }
    registerAsync(values);
  };

  const handleClick = () => {
    history.push('/login');
  };

  useEffect(() => {

  }, [])

  return (
    <div className='register-page'>
      <Form onFinish={handleSubmit}
        footer={
          <Button color='warning' block size='large' type='submit'>注册</Button>
        }
      >
        <Form.Header>用户注册</Form.Header>
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
        <Form.Item
          name='password2'
          rules={[{ required: true, message: '确认密码不能为空' }]}
          label='确认密码'
        >
          <Input placeholder='请输入确认密码' />
          </Form.Item>
      </Form>
      <div className='login' onClick={handleClick}>已有账户，去登录</div>
    </div>
  )
}

export default register;