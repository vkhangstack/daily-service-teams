import { auth } from '@/config/firebase';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { GoogleAuthProvider, OAuthProvider, signInWithPopup } from 'firebase/auth';
import { FunctionComponent } from 'react';

interface LoginProps {
  username: string;
  password: string;
}

const Login: FunctionComponent<LoginProps> = () => {
  const onFinish = async (values: any) => {
    // message.info(`Hello: ${values.username}`);
    // const provider = new OAuthProvider('microsoft.com');

    // provider.setCustomParameters({
    //   // Force re-consent.
    //   prompt: 'consent',
    //   // Target specific email with login hint.
    //   login_hint: 'user@firstadd.onmicrosoft.com',
    // });

    // provider.setCustomParameters({
    //   // Optional "tenant" parameter in case you are using an Azure AD tenant.
    //   // eg. '8eaef023-2b34-4da1-9baa-8bc8c9d6a490' or 'contoso.onmicrosoft.com'
    //   // or "common" for tenant-independent tokens.
    //   // The default value is "common".
    //   tenant: 'd67b5dbc-b40e-4a9e-baad-6deface018f3',
    // });
    const provider = new GoogleAuthProvider();

    const data = await signInWithPopup(auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(data);
    const token = credential?.accessToken;
    const user = data.user;

    // const credential = OAuthProvider.credentialFromResult(data);
    // const accessToken = credential?.accessToken;
    // const idToken = credential?.idToken;

    console.log('accessToken :>> ', token);
    console.log('idToken :>> ', user);
  };

  return (
    <Form name='normal_login' className='login-form' initialValues={{ remember: true }} onFinish={onFinish}>
      {/* <Form.Item name='username' rules={[{ required: true, message: 'Please input your Username!' }]}>
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
      </Form.Item> */}

      <Form.Item>
        <Button type='primary' htmlType='submit' className='login-form-button'>
          Log with Microsoft
        </Button>
        {/* <br />
        Or <a href=''>register now!</a> */}
      </Form.Item>
    </Form>
  );
};

export default Login;
