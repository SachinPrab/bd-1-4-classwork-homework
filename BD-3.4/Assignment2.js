const express = require("express");
const app = express();
let cors = require('cors');

app.use(cors());

let tasks = [
  { taskId: 1, text: 'Fix bug #101', priority: 2 },
  { taskId: 2, text: 'Implement feature #202', priority: 1 },
  { taskId: 3, text: 'Write documentation', priority: 3 }
];

function addNewTask(taskId, text, priority)
{
  tasks.push({ taskId: taskId, text: text, priority: priority });
  return tasks;
}

app.get("/tasks/add",(req,res) => {
  let taskId = parseInt(req.query.taskId);
  let text = req.query.text;
  let priority = parseInt(req.query.priority);
  let result = addNewTask(taskId, text, priority);
  res.json({ tasks: result});
});

function readTasks(tasks)
{
  return tasks;
}

app.get("/tasks",(req,res) => {
  let result = readTasks(tasks);
  res.json({ tasks: result});
});

function sortAscending(a,b)
{
  return a.priority - b.priority;
}

app.get("/tasks/sort-by-priority",(req,res) => {
  let taskCopy = tasks.slice();
  let result = taskCopy.sort(sortAscending);
  res.json({ tasks: result });
});

function updateTaskByPriority(tasks,taskId,priority)
{
  for(let i = 0; i < tasks.length; i++)
    {
      if(tasks[i].taskId === taskId)
      {
        tasks[i].priority = priority;
      }
    }
  return tasks;
}

app.get("/tasks/edit-priority",(req,res) => {
  let taskId = parseInt(req.query.taskId);
  let priority = parseInt(req.query.priority);
  let result = updateTaskByPriority(tasks,taskId,priority);
  res.json({ tasks: result });
});

function updateTaskByID(tasks,taskId,text)
{
  for(let i = 0; i < tasks.length; i++)
    {
      if(tasks[i].taskId === taskId)
      {
        tasks[i].text = text;
      }
    }
  return tasks;
}

app.get("/tasks/edit-text",(req,res) => {
  let taskId = parseInt(req.query.taskId);
  let text = req.query.text;
  let result = updateTaskByID(tasks,taskId,text);
  res.json({ tasks: result });
});

function deleteTask(tasks, taskId) {
  return tasks.filter(task => task.taskId !== taskId);
}

app.get("/tasks/delete", (req, res) => {
  let taskId = parseInt(req.query.taskId);
  tasks = deleteTask(tasks, taskId); 
  res.json({ tasks: tasks }); 
});

function filterByPriority(tasks, priority) {
  return tasks.filter(task => task.priority === priority);
}

app.get("/tasks/filter-by-priority", (req, res) => {
  let priority = parseInt(req.query.priority);
  let filteredTasks = filterByPriority(tasks, priority);
  res.json({ tasks: filteredTasks });
});

const PORT = 3000; 
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost/:${PORT}`);
});