import React from 'react';
import { Menu, Typography, Avatar } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons';
import Link from 'antd/es/typography/Link';

import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
       <img src={icon} style={{width: 150, margin: 0 }} />
        </div>
        <Menu theme='dark' >
          <Menu.Item icon={<HomeOutlined />} >
            <Link to='/' >Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />} >
            <Link to='/cryptocurrencies' >CryptoCurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />} >
            <Link to='/exchanges' >Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />} >
            <Link to='/news' >News</Link>
          </Menu.Item>
        </Menu>
    </div>
  );
}

export default Navbar;
