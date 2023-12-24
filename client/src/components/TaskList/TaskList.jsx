import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./TaskList.css";
import SingleTask from '../SingleTask/SingleTask';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../hooks/useAxios';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const TaskList = () => {
  const { user } = useContext(AuthContext);
  const userId = user.uid;
  const publicAxios = useAxios();

  const { data: todoTask, isFetching, isLoading } = useQuery({
    queryKey: [userId, "todoTask"],
    queryFn: async () => {
      const res = await publicAxios.get(`/get-todo/${userId}`);
      return res.data;
    }
  });

  return (
    <Tabs>
      <TabList>
        <Tab>To-Do</Tab>
        <Tab>Ongoing</Tab>
        <Tab>Completed</Tab>
      </TabList>

      <TabPanel>
        {
          !isFetching && !isLoading &&
          todoTask.length === 0 ?
            <div className='h-[70vh] flex items-center justify-center'>
              <h1 className="text-5xl text-center text-red-600">No Task</h1>
            </div>
            :
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
              {!isFetching && !isLoading &&

                todoTask.map((todo) =>
                  <SingleTask
                    key={todo._id}
                    title={todo.title}
                    description={todo.description}
                    priority={todo.priority}
                    deadLine={todo.deadLine}
                  />)

              }
            </div>}
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