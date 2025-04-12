import React, { useState } from 'react';
import { Tabs } from 'antd';
import Layout from '../../Layout/Layout';
import AddNotice from './AddNotice';

// Dummy Components (Replace with actual components)

const UpdateNotice = () => <div>Update Notice Component</div>;
const DeleteNotice = () => <div>Delete Notice Component</div>;

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
      label: "Update Notice",
      children: <UpdateNotice />
    },
    {
      key: "3",
      label: "Delete Notice",
      children: <DeleteNotice />
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
