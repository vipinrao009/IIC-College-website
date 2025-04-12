import React, { useState } from 'react';
import { Tabs } from 'antd';
import Layout from '../../Layout/Layout';
import AddEvent from './AddEvent';
import AllEvent from './AllEvent';


const App = () => {
  const [tabPosition] = useState('left');

  // Tab config
  const tabs = [
    {
      key: "1",
      label: "Add Upcoming event",
      children: <AddEvent />
    },
    {
      key: "2",
      label: "All Upcoming event",
      children: <AllEvent />
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
