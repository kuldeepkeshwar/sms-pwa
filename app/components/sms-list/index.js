import React from 'react';

const List = (props) => {
  return (
    <div>
      {
            props.messages.map((msg) => {
              return (
                <div key={msg.id}>
                  <div>{msg.sender}</div>
                  <div>{msg.message}</div>
                </div>
              );
            })
        }
    </div>
  );
};
List.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
export default List;
