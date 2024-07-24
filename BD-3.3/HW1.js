const express = require("express");
const app = express();

let watchList = [
  { videoId: 1, title: 'JavaScript Tutorial', watched: false, url: 'https://youtu.be/shorturl1', isFavorite: false },
  { videoId: 2, title: 'Node.js Basics', watched: true, url: 'https://youtu.be/shorturl2', isFavorite: false },
  { videoId: 3, title: 'React.js Guide', watched: false, url: 'https://youtu.be/shorturl3', isFavorite: false }
];

let tasks = [
  { taskId: 1, title: "Buy groceries", completed: false },
  { taskId: 2, title: "Walk the dog", completed: false },
  { taskId: 3, title: "Do laundry", completed: true },
];

let books = [
  { bookId: 1, title: "1984", available: true },
  { bookId: 2, title: "Brave New World", available: true },
  { bookId: 3, title: "Fahrenheit 451", available: false },
];

function deleteUnwatchedVideos(watchList) {
  return watchList.filter((video) => video.watched);
}

app.get("/watchlist/delete-unwatched", (req, res) => {
  let result = deleteUnwatchedVideos(watchList);
  res.json(result);
});

function markVideoAsFavorite(watchList, videoId, isFavorite) {
  for (let i = 0; i < watchList.length; i++) {
    watchList[i].isFavorite = false;
    if (watchList[i].videoId == videoId) {
      watchList[i].isFavorite = isFavorite;
      break;
    }
  }
  return watchList;
}

app.get("/watchlist/favorite", (req, res) => {
  let videoId = parseInt(req.query.videoId);
  let isFavorite = req.query.isFavorite === "true";
  let result = markVideoAsFavorite(watchList, videoId, isFavorite);
  res.json(result);
});

function updateTaskStatusById(tasks, Id, completed) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].taskId === Id) {
      tasks[i].completed = completed;
    }
  }
  return tasks;
}

app.get("/tasks/update", (req, res) => {
  let taskId = parseInt(req.query.taskId);
  let completed = req.query.completed === "true";
  let result = updateTaskStatusById(tasks, taskId, completed);
  res.json(result);
});

function removeCompletedTasks(tasks) {
  return tasks.filter((tasks) => !tasks.completed);
}

app.get("/tasks/remove-completed", (req, res) => {
  let result = removeCompletedTasks(tasks);
  tasks = result;
  res.json(result);
});

function updateBookAvailabilityById(books, bookId, available) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].bookId === bookId) {
      books[i].available = available;
    }
  }
  return books;
}

app.get("/library/update", (req, res) => {
  let bookId = parseInt(req.query.bookId);
  let available = req.query.available === "true";
  let result = updateBookAvailabilityById(books, bookId, available);
  res.json(result);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost/:${PORT}`);
});
