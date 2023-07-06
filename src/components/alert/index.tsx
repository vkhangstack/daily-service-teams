import React from 'react';
import { Alert } from 'antd';
import Marquee from 'react-fast-marquee';

const AlertComponent: React.FC = () => (
  <Alert
    banner
    closeIcon={false}
    closable={false}
    icon={false}
    showIcon={false}
    style={{
      background: 'transparent',
      fontSize: '1rem',
      fontFamily: 'sans-serif',
      fontStyle: 'normal',
      textAlign: 'center',
      width: '100%',
    }}
    message={
      <Marquee pauseOnHover gradient={false}>
        Phạm Văn Khang, Phạm Văn Khang
      </Marquee>
    }
  />
);

export default AlertComponent;
