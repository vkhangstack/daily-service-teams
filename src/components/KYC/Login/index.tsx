import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { FunctionComponent } from 'react';

interface LoginProps {
  username: string;
  password: string;
}

const Login: FunctionComponent<LoginProps> = () => {
  const onFinish = (values: any) => {
    message.info(`Hello: ${values.username}`);
  };

  return (
    <Form name='normal_login' className='login-form' initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item name='username' rules={[{ required: true, message: 'Please input your Username!' }]}>
        <Input
          prefix={<UserOutlined className='site-form-item-icon' />}
          placeholder='Username'
          autoComplete='usernames'
        />
      </Form.Item>
      <Form.Item name='password' rules={[{ required: true, message: 'Please input your Password!' }]}>
        <Input
          prefix={<LockOutlined className='site-form-item-icon' />}
          type='password'
          autoComplete='current-password'
          placeholder='Password'
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name='remember' valuePropName='checked' noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className='login-form-forgot' href=''>
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' className='login-form-button'>
          Log in
        </Button>
        <br />
        Or <a href=''>register now!</a>
      </Form.Item>
    </Form>
  );
};

export default Login;
