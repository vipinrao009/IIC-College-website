import React from 'react'
import NoticeBoard from '../pages/Notice.jsx';
import Gallary from '../pages/Gallary.jsx';
import Slider from '../pages/Slider/Slider.jsx';
import NoticeBar from '../pages/NoticeBar.jsx';
import Layout from '../Layout/Layout.jsx';

const HomePage = () => {
  return (
      <Layout>
        <Slider />
        <NoticeBar/>
        <Gallary />
        <NoticeBoard />
      </Layout>
    );
}

export default HomePage
