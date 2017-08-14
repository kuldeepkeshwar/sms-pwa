import express from 'express';


const router = express.Router();

const appState = {
  total: 1000,
  messages: [],
};
for(let i=1;i<=50;i++){
  appState.messages.push({
    id: 100+i,
    sender: {
      number: 9004925450,
      name: 'Mr. X'+i,
    },
    time: '10/10/2017',
    detail: 'Hi, Mr. X'+i,
  })
}
const messageThread = {
  total: 1000,
  sender: {
    number: 9004925450,
    name: 'Mr. X',
  },
  messages: [],
};
for(let i=1;i<=25;i++){
  messageThread.messages.push({
    id: 100+i,
    time: '10/10/2017',
    detail: 'Hi, Mr. X'+i,
  })
}
router.get('/messages/', (req, res) => {
  res.send(appState);
});
router.get('/messages/thread/', (req, res) => {
  res.send(messageThread);
});
export default router;
