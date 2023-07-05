import { Button, Result } from 'antd';
import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
interface ContactProps {}

interface ContactState {}

class Contact extends React.Component<ContactProps, ContactState> {
  constructor(props: ContactProps) {
    super(props);
    this.state = { dev: null };
  }
  render() {
    return (
      <Result
        icon={<SmileOutlined />}
        title='Great, we have done all the operations!'
        extra={<Button type='primary'>Next</Button>}
      />
    );
  }
}

export default Contact;
