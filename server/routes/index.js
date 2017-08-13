import express from 'express';


const router = express.Router();

const appState = {
  total: 1000,
  messages: [{
    id: 101,
    sender: {
      number: 9004925450,
      name: 'Mr. X',
    },
    time: '10/10/2017',
    detail: 'Hi, Mr. X',
  }, {
    id: 102,
    sender: {
      number: 9004925450,
      name: 'Mr. X',
    },
    time: '10/10/2017',
    detail: 'Hi, Mr. X',
  }, {
    id: 103,
    sender: {
      number: 9004925450,
      name: 'Mr. X',
    },
    time: '10/10/2017',
    detail: 'Hi, Mr. X',
  }, {
    id: 104,
    sender: {
      number: 9004925450,
      name: 'Mr. X',
    },
    time: '10/10/2017',
    detail: 'Hi, Mr. X',
  }],
};
const messageThread = {
  total: 1000,
  sender: {
    number: 9004925450,
    name: 'Mr. X',
  },
  messages: [{
    id: 101,
    time: '10/10/2017',
    detail: 'Hi, Mr. X',
  }, {
    id: 102,
    time: '10/10/2017',
    detail: 'Hi, Mr. X',
  }, {
    id: 103,
    time: '10/10/2017',
    detail: 'Hi, Mr. X',
  }, {
    id: 104,
    time: '10/10/2017',
    detail: 'Hi, Mr. X',
  }],
};

router.get('/messages/', (req, res) => {
  res.send(appState);
});
router.get('/messages/thread/', (req, res) => {
  res.send(messageThread);
});
export default router;
