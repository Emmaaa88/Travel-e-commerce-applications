import React, { useState, useEffect } from 'react';
import {
  Form, ImageUploader, Toast, Input, Button
} from 'antd-mobile';
import { useStoreHook } from 'think-react-store';

function Edit(props) {
  const { user: { editUserAsync, getUserAsync, avatar, phone, sign } } = useStoreHook();
  const [files, setFiles] = useState([{url: avatar}]);

  const handleChange = (files) => {
    console.log(0,files)
    // if (files[0]?.file?.size / 1024 / 1024 > 0.5) {
    //   Toast.show({
    //     icon: 'fail',
    //     content: '图片大小不能大于0.5M',
    //   });
    //   return;
    // }
    setFiles(files);
  };

  const handleSubmit = () => {
    if(!files.length){
      // Toast.fail('请上传图片');
      Toast.show({
        icon: 'fail',
        content: '请上传图片',
      });
      return;
    }
    // validateFields((error, value)=>{
    //   // console.log(error)
    //   // console.log(files)
    //   if(error){
    //     Toast.show({
    //       icon: 'fail',
    //       content: '请将信息补充完整',
    //     });
    //     return;
    //   }else {
    //     editUserAsync({
    //       avatar: files[0].url,
    //       phone: value.tel,
    //       sign: value.sign
    //     });
    //   }
    // });
  };

  useEffect(() => {
    // console.log(props)
    getUserAsync({});
  }, [])

  return (
    <div className='user-edit'>
      <Form onFinish={handleSubmit} footer={
        <Button color='warning' block type='submit'>修改</Button>
      }>
        <ImageUploader
          value={files}
          maxCount={2}
          onChange={handleChange}
        />
        <Form.Item
          name='tel'
          rules={[{ required: true, message: '电话不能为空',  }]}
          label='电话'
        >
          <Input placeholder='请输入电话' />
        </Form.Item>
        <Form.Item
          name='sign'
          rules={[{ required: true, message: '签名不能为空',  }]}
          label='签名'
        >
          <Input placeholder='请输入签名' />
        </Form.Item>
      </Form>
    </div>
  )
}

export default Edit;