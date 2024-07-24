const express = require("express");
const app = express();

let activities = [
  { activityId: 1, type: 'Running', duration: 30, caloriesBurned: 300 },
  { activityId: 2, type: 'Swimming', duration: 45, caloriesBurned: 400 },
  { activityId: 3, type: 'Cycling', duration: 60, caloriesBurned: 500 }
];

let cors = require('cors');

app.use(cors());

function addActivity(activityId, type, duration, caloriesBurned)
{
  activities.push({ activityId: activityId, type: type, duration: duration, caloriesBurned: caloriesBurned });
}

app.get("/activities/add",(req,res) => {
  let activityId = parseInt(req.query.activityId);
  let type = req.query.type;
  let duration = parseInt(req.query.duration);
  let caloriesBurned = parseInt(req.query.caloriesBurned);
  let result = addActivity(activityId, type, duration, caloriesBurned);
  res.json({ activities });
});

function sortAscending(a, b)
{
  return a.activityId - b.activityId;
}

app.get("/activities/sort-by-duration",(req,res) => {
  let activitiesCopy = activities.slice();
  let result = activitiesCopy.sort(sortAscending);
  res.json({ activities: result });
});

function filterByType(activities, type)
{
  return activities.filter(activity => activity.type === type);
}

app.get("/activities/filter-by-type",(req,res) => {
  let type = req.query.type;
  let result = filterByType(activities, type);
  res.json({ activities : result });
});

function totalCaloriesBurned(activities)
{ let sum = 0;
  for(let i = 0; i < activities.length; i++)
    {
      sum += activities[i].caloriesBurned;
    }
 return sum;
}

app.get("/activities/total-calories",(req,res) => {
  let result = totalCaloriesBurned(activities);
  res.json({ totalCaloriesBurned: result });
});

function updateActivityDuration(activities, activityId, duration)
{
  for(let i = 0; i < activities.length; i++)
    {
      if(activities[i].activityId === activityId)
      {
        activities[i].duration = duration;
      }
    }
  return activities;
}

app.get("/activities/update-duration",(req,res) => {
  let activityId = parseInt(req.query.activityId);
  let duration = parseInt(req.query.duration);
  let result = updateActivityDuration(activities, activityId, duration);
  res.json({ activities: result });
});

function deleteActivityByID(activities, activityId)
{
  return activities.filter(activity => activity.activityId !== activityId);
}

app.get("/activities/delete",(req,res) => {
  let activityId = parseInt(req.query.activityId);
  let result = deleteActivityByID(activities, activityId);
  res.json({ activities: result });
});

function deleteActivityByType(activities, type)
{
  return activities.filter(activity => activity.type !== type);
}

app.get("/activities/delete-by-type",(req,res) => {
  let type = req.query.type;
  let result = deleteActivityByType(activities, type);
  res.json({ activities: result });
});

const PORT = 3000; 
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost/:${PORT}`);
});