import React, { useState } from 'react';
import { Tabs } from 'antd';
import Layout from '../../Layout/Layout';
import UploadEventData from './UploadEventData';
import UploadedEventData from './UploadedEventData';


const EventData = () => {
  const tabPosition = window.innerWidth < 768 ? "top" : "left";

  // Tab config
  const tabs = [
    {
      key: "1",
      label: "Upload Event",
      children: <UploadEventData />
    },
    {
      key: "2",
      label: "All Uploaded event",
      children: <UploadedEventData />
    }
  ];

  return (
    <Layout>
      <div className="p-4">
        <Tabs
          tabPosition={tabPosition}
          defaultActiveKey="1"
          items={tabs}
          className="bg-white shadow-md rounded"
        />
      </div>
    </Layout>
  );
};

export default EventData;
