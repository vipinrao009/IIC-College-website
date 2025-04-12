import React, { useState } from 'react';
import { Tabs } from 'antd';
import Layout from '../../Layout/Layout';
import AddNotice from './AddNotice';
import GetNotices from './GetNotices';


const App = () => {
  const [tabPosition] = useState('left');

  // Tab config
  const tabs = [
    {
      key: "1",
      label: "Add Notice",
      children: <AddNotice />
    },
    {
      key: "2",
      label: "All Notices",
      children: <GetNotices />
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

export default App;
