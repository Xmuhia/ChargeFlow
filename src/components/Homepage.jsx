import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';


import { useGetCryptosQuery } from '../services/CryptoApi';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  
  console.log(data);

  const globalStats = data['data']['stats'];

  if(isFetching) return 'Loading...';

  console.log(globalStats);

  return (
    <>
      <Title level={2} className='heading'>Global Crypto Statistics</Title>
      <Row>
        <Col span={12}><Statistic title='Total Currencies' value={globalStats.total} /></Col>
        <Col span={12}><Statistic title='Total Exchanges' value={globalStats.totalExchanges} /></Col>
        <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title='Total Markets' value={millify(globalStats.totalMarkets)}/></Col>
      </Row>
    </>
  );
}

export default Homepage;
