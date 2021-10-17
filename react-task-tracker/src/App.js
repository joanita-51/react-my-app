import {useState} from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
const App = () => {
  const [tasks, setTasks] = useState([ //seTasks changes any part of the state
    {
        id: 1, 
        text: 'Doctors Appointment',
        day:'Feb 5th at 3:30pm',
        reminder: true, 
    } , 
    {
      id: 2, 
      text: 'Meeting at school',
      day:'Feb 6th at 5:30pm',
      reminder: true, 
  } ,
  {
      id: 3, 
      text: 'Food Shopping',
      day:'Feb 7th at 2:30pm',
      reminder: false, 
  } ,
])

const deleteTask = (id) =>{
  console.log('delete', id)
}
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
