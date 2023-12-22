import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./TaskList.css";
import SingleTask from '../SingleTask/SingleTask';

const TaskList = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>To-Do</Tab>
        <Tab>Ongoing</Tab>
        <Tab>Completed</Tab>
      </TabList>

      <TabPanel>
        <div className='grid grid-cols-4'>
        <SingleTask />
        </div>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 3</h2>
      </TabPanel>
    </Tabs>
  );
};

export default TaskList;