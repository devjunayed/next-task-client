import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./TaskList.css";
import SingleTask from '../SingleTask/SingleTask';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../hooks/useAxios';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';


const TaskList = () => {
  const { user } = useContext(AuthContext);
  const userId = user.uid;
  const publicAxios = useAxios();
  const [tabIndex, setTabIndex] = useState(0);


  const { data: todoTask, refetch: refetchTodoTask, isFetching: isTodoTaskFetching, isLoading: isTodoTaskLoading } = useQuery({
    queryKey: [userId, "todoTask", undefined],
    queryFn: async () => {
      const res = await publicAxios.get(`/todo/${userId}`);
      return res.data;
    }
  });

  // on going task
  const { data: onGoingTask, refetch: refetchOnGoing, isFetching: isOnGoingFetching,
    isLoading: isOnGoingLoading } = useQuery({
      queryKey: [userId, "onGoingTask", undefined],
      queryFn: async () => {
        const res = await publicAxios.get(`/ongoing/${userId}`);
        return res.data;
      }
    });

  // completed task
  const { data: completedTask, refetch: refetchCompeleted, isCompletedFetching, isLoading: isCompletedLoading } = useQuery({
    queryKey: [userId, "completedTask", undefined],
    queryFn: async () => {
      const res = await publicAxios.get(`/completed/${userId}`);
      return res.data;
    }
  });

  


  const handleDragStart = (e, todo) => {
    e.dataTransfer.setData("application/json", JSON.stringify(todo));
    e.target.classList("bg-red-600");
  }

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedDataJson = e.dataTransfer.getData('application/json');
    const droppedData = JSON.parse(droppedDataJson);
    const targetedMenu = e.target.innerText;

    // removing data from the current tab
    const backendRoutes = ["todo", "ongoing", "completed"];
    console.log(backendRoutes[tabIndex]);
    console.log(tabIndex)

    publicAxios.delete(`/${backendRoutes[tabIndex]}/${droppedData._id}`)
      .then(res => {
        console.log(res);
        if (res.data.deletedCount >= 1) {

          if (targetedMenu === "To-Do") {
            publicAxios.post("/todo", droppedData)
              .then(res => {
                if (res.data.acknowledged) {
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Task moved to ${targetedMenu}`,
                    showConfirmButton: false,
                    timer: 2500
                  });
                  refetchTodoTask();
                  refetchOnGoing();
                  refetchCompeleted();
                }
              }).catch(err => console.log(err));
          }
          else if (targetedMenu === "Ongoing") {
            publicAxios.post("/ongoing", droppedData)
              .then(res => {
                if (res.data.acknowledged) {
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Task moved to ${targetedMenu}`,
                    showConfirmButton: false,
                    timer: 2500
                  });
                  refetchTodoTask();
                  refetchOnGoing();
                  refetchCompeleted();
                }
              }).catch(err => console.log(err));
          }
          else if (targetedMenu === "Completed") {
            publicAxios.post("/completed", droppedData)
              .then(res => {
                console.log(res);
                if (res.data.acknowledged) {
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Task moved to ${targetedMenu}`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetchTodoTask();
                  refetchOnGoing();
                  refetchCompeleted();
                }
              }).catch(err => console.log(err));
          }


        }
      }).catch(err => console.log(err));

    // e.target.classList.remove("bg-red-600 text-white");
    e.target.classList.remove("bg-red-600");
    e.target.classList.remove("text-white");
    console.log("dropped");
  }
  const handleDragOver = (e) => {
    e.preventDefault();
    e.target.classList.add("bg-red-600");
    e.target.classList.add("text-white");
  }




  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>
          <div onDrop={handleDrop} onDragOver={handleDragOver}>
            To-Do
          </div>
        </Tab>

        <Tab>
          <div onDrop={handleDrop} onDragOver={handleDragOver}>
            Ongoing
          </div>
        </Tab>

        <Tab>
          <div onDrop={handleDrop} onDragOver={handleDragOver}>
            Completed
          </div>
        </Tab>


      </TabList>

      <TabPanel>
         {
          !isTodoTaskFetching && !isTodoTaskLoading &&
            todoTask.length === 0 ?
            <div className='h-[70vh] flex items-center justify-center'>
              <h1 className="text-5xl text-center text-red-600">No Task</h1>
            </div>
            :
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
              {!isTodoTaskFetching && !isTodoTaskLoading &&

                todoTask.map((todo) =>
                  <div key={todo._id} draggable onDragStart={(e) => handleDragStart(e, todo)}>

                    <SingleTask
                      title={todo.title}
                      description={todo.description}
                      priority={todo.priority}
                      deadLine={todo.deadLine}
                    />
                  </div>)

              }
            </div>} 
      </TabPanel>
      <TabPanel>
        {
          !isOnGoingFetching && !isOnGoingLoading &&
            onGoingTask.length === 0 ?
            <div className='h-[70vh] flex items-center justify-center'>
              <h1 className="text-5xl text-center text-red-600">No Task</h1>
            </div>
            :
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
              {!isOnGoingFetching && !isOnGoingLoading &&

                onGoingTask.map((todo) =>
                  <div key={todo._id} draggable onDragStart={(e) => handleDragStart(e, todo)}>

                    <SingleTask
                      title={todo.title}
                      description={todo.description}
                      priority={todo.priority}
                      deadLine={todo.deadLine}
                    />
                  </div>)

              }
            </div>}
      </TabPanel>
      <TabPanel>
         {
          !isCompletedFetching && !isCompletedLoading &&
            completedTask.length === 0 ?
            <div className='h-[70vh] flex items-center justify-center'>
              <h1 className="text-5xl text-center text-red-600">No Task</h1>
            </div>
            :
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
              {!isCompletedFetching && !isCompletedLoading &&

                completedTask.map((todo) =>
                  <div key={todo._id} draggable onDragStart={(e) => handleDragStart(e, todo)}>

                    <SingleTask
                      title={todo.title}
                      description={todo.description}
                      priority={todo.priority}
                      deadLine={todo.deadLine}
                    />
                  </div>)

              }
            </div>} 
      </TabPanel>
    </Tabs>
  );
};

export default TaskList;