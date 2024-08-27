import React from 'react';
import CategoryList from '../components/CategoryList';
import BannerProduct from '../components/BannerProduct';
import HorizontalCardProduct from '../components/HorizontalCardProduct';
import VerticalCardProduct from '../components/VerticalCardProduct';

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />

      <HorizontalCardProduct category="airpods" heading="Top's Airpods"  className="overflow-hidden"/>
      <HorizontalCardProduct category="watches" heading="Popular's Watches" className="overflow-hidden"/>

      <VerticalCardProduct category="mobiles" heading="Mobiles" className="overflow-hidden" />
      <VerticalCardProduct category="mouse" heading="Mouse" className="overflow-hidden"/>
      <VerticalCardProduct category="televisions" heading="Televisions" className="overflow-hidden" />
      <VerticalCardProduct category="camera" heading="Camera & Photography" className="overflow-hidden" />
      <VerticalCardProduct category="earphones" heading="Wired Earphones" className="overflow-hidden"/>
      <VerticalCardProduct category="speakers" heading="Bluetooth Speakers" className="overflow-hidden"/>
      <VerticalCardProduct category="refrigerator" heading="Refrigerator" className="overflow-hidden"/>
      <VerticalCardProduct category="trimmers" heading="Trimmers" className="overflow-hidden"/>
    </div>
  );
};

export default Home;
