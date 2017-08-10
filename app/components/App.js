import React from 'react';
import List from './sms-list';

const messages = [{
  id: 101,
  sender: 101,
  date: '10/10/2017',
  message: 'hello',
},
{
  id: 102,
  sender: 101,
  date: '11/10/2017',
  message: 'world',
}];
const App = () => {
  return (
    <div>
      <h2 id="heading">Messaging</h2>
      <div>
        <input type="search" />
      </div>
      <List messages={messages} />
    </div>
  );
};

export default App;
