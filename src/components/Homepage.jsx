import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/CryptoApi';

const { Title } = Typography;

const Homepage = () => {
  const { data, isfetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  if(isFetching) return 'Loading...';

console.log(data);

  return (
    <>
      <Title level={2} className='heading'>Global Crypto Statistics</Title>
      <Row>
        <Col span={12}><Statistic title='Total Currencies' value={globalStats.total}  /></Col>
        <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)}  /></Col>
        <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalExchanges)}  /></Col>
        <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalStats.totalExchanges)}  /></Col>
        <Col span={12}><Statistic title='Total Markets' value={millify(globalStats.totalExchanges)}  /></Col>
      </Row>
    </>
  );
}

export default Homepage;
