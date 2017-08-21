import express from 'express';


const router = express.Router();

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
    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed enim placerat, tincidunt enim eu, suscipit sem. Cras dictum, nisi et cursus consequat, augue sapien tristique mi, sed ultrices arcu neque in sapien.'+i,
  })
}
router.get('/messages/', (req, res) => {
  let {limit,offset} = req.query;
  const appState = {
    total: 1000,
    messages: [],
  };
  offset=offset-0;

  for(let i=1;i<=limit;i++){
    appState.messages.push({
      id: 100+(i+offset),
      sender: {
        number: 9004925450,
        name: 'Mr. X'+(i+offset),
      },
      time: '10/10/2017',
      detail: 'Hi, Mr. X'+(i+offset),
    })
  }
  res.send(appState);
});
router.get('/messages/thread/', (req, res) => {
  res.send(messageThread);
});
export default router;
