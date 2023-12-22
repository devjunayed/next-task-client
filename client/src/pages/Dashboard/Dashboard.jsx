import AddTask from "../../components/AddTask/AddTask";
import TaskList from "../../components/TaskList/TaskList";


const Dashboard = () => {
    return (
        <div className="mx-24">
           <AddTask />
           <TaskList />
        </div>
    );
};

export default Dashboard;